#!/bin/bash

# Build optimization script for VPS with limited resources
# This script handles build timeouts and memory issues

echo "🔧 Starting optimized build process..."

# Check available memory
AVAILABLE_MEMORY=$(free -m | awk 'NR==2{printf "%.0f", $7}')
echo "Available memory: ${AVAILABLE_MEMORY}MB"

# Set memory limit based on available memory
if [ "$AVAILABLE_MEMORY" -lt 1024 ]; then
    NODE_MEMORY="--max-old-space-size=512"
    BUILD_TIMEOUT=300
    echo "⚠️ Low memory detected. Using conservative settings."
elif [ "$AVAILABLE_MEMORY" -lt 2048 ]; then
    NODE_MEMORY="--max-old-space-size=1024"
    BUILD_TIMEOUT=600
    echo "📊 Medium memory available. Using standard settings."
else
    NODE_MEMORY="--max-old-space-size=2048"
    BUILD_TIMEOUT=900
    echo "✅ Good memory available. Using optimal settings."
fi

# Clear cache to free up space
echo "🧹 Clearing caches..."
npm cache clean --force 2>/dev/null || true
rm -rf .next 2>/dev/null || true

# Set Node.js memory options
export NODE_OPTIONS="$NODE_MEMORY"

# Start build with timeout
echo "🔨 Starting build (timeout: ${BUILD_TIMEOUT}s)..."
timeout $BUILD_TIMEOUT npm run build

BUILD_EXIT_CODE=$?

if [ $BUILD_EXIT_CODE -eq 124 ]; then
    echo "⏰ Build timed out! Trying with reduced concurrency..."
    export NODE_OPTIONS="--max-old-space-size=4096 --max-semi-space-size=128"
    timeout 1200 npm run build
    BUILD_EXIT_CODE=$?
fi

if [ $BUILD_EXIT_CODE -ne 0 ]; then
    echo "❌ Build failed with exit code $BUILD_EXIT_CODE"
    
    # Try one more time with minimal settings
    echo "🔄 Final attempt with minimal settings..."
    export NODE_OPTIONS="--max-old-space-size=512"
    export NODE_ENV=production
    timeout 1800 npm run build
    BUILD_EXIT_CODE=$?
fi

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "✅ Build completed successfully!"
else
    echo "❌ Build failed after all attempts"
    exit 1
fi
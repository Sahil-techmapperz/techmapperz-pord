#!/bin/bash

# Quick build test for your VPS
echo "🧪 Testing build on your 2GB VPS..."

# Show current memory usage
echo "Current memory usage:"
free -h

# Clear any previous build
echo "🧹 Cleaning previous build..."
rm -rf .next
npm cache clean --force

# Test build with your VPS-optimized settings
echo "🔨 Testing optimized build..."
NODE_OPTIONS="--max-old-space-size=1536" timeout 600 npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Your VPS can handle the build."
    echo "Memory usage after build:"
    free -h
else
    echo "❌ Build failed. Trying with more memory..."
    NODE_OPTIONS="--max-old-space-size=2048" timeout 900 npm run build
    
    if [ $? -eq 0 ]; then
        echo "✅ Build successful with more memory!"
    else
        echo "❌ Build still failing. Check the troubleshooting guide."
    fi
fi
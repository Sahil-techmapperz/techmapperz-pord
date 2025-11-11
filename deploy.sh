#!/bin/bash

# Techmapperz Auto Deploy Script
# This script handles the deployment process on the VPS

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Configuration
PROJECT_DIR="/root/techmapperz-pord"
BACKUP_DIR="/var/backups/techmapperz"
LOG_FILE="/var/log/techmapperz-deploy.log"
APP_NAME="techmapperz"

# Create log entry
echo "$(date): Starting deployment" >> $LOG_FILE

# Function to handle errors
handle_error() {
    echo "❌ Deployment failed! Check logs at $LOG_FILE"
    echo "$(date): Deployment failed - $1" >> $LOG_FILE
    exit 1
}

# Create backup
echo "📦 Creating backup..."
mkdir -p $BACKUP_DIR
cp -r $PROJECT_DIR $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S) || handle_error "Backup creation failed"

# Navigate to project directory
cd $PROJECT_DIR || handle_error "Project directory not found"

# Pull latest changes
echo "⬇️ Pulling latest changes from GitHub..."
git pull origin main || handle_error "Git pull failed"

# Install dependencies
echo "📥 Installing dependencies..."
npm ci --production || handle_error "npm install failed"

# Build the project with timeout and memory optimization
echo "🔨 Building project..."
export NODE_OPTIONS="--max-old-space-size=1536"
timeout 600 npm run build || {
    echo "⚠️ Build timed out, trying with more memory..."
    export NODE_OPTIONS="--max-old-space-size=2048"
    timeout 900 npm run build || handle_error "Build failed after retry"
}

# Restart PM2 process (only the specific app)
echo "🔄 Restarting $APP_NAME application only..."
if pm2 list | grep -q $APP_NAME; then
    echo "Found existing $APP_NAME process, restarting..."
    pm2 restart $APP_NAME || handle_error "PM2 restart failed"
    echo "✅ Successfully restarted $APP_NAME"
else
    echo "No existing $APP_NAME process found, starting new one..."
    pm2 start npm --name $APP_NAME -- start || handle_error "PM2 start failed"
    echo "✅ Successfully started $APP_NAME"
fi

# Show only our app status
pm2 show $APP_NAME

# Save PM2 configuration
pm2 save

echo "✅ Deployment completed successfully!"
echo "$(date): Deployment completed successfully" >> $LOG_FILE

# Clean old backups (keep only last 5)
echo "🧹 Cleaning old backups..."
ls -t $BACKUP_DIR | tail -n +6 | xargs -I {} rm -rf $BACKUP_DIR/{}

echo "🎉 All done! Your site is now live."
#!/bin/bash

# Monitoring script for Techmapperz deployment
# Add this to crontab to run every 5 minutes: */5 * * * * /path/to/monitoring.sh

LOG_FILE="/var/log/techmapperz-monitoring.log"
APP_NAME="techmapperz"
HEALTH_URL="http://localhost:3000/api/health"

# Function to log with timestamp
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> $LOG_FILE
}

# Check if application is running
check_app_status() {
    if pm2 list | grep -q "$APP_NAME.*online"; then
        return 0
    else
        return 1
    fi
}

# Check health endpoint
check_health_endpoint() {
    response=$(curl -s -w "%{http_code}" -o /dev/null $HEALTH_URL)
    if [ "$response" = "200" ]; then
        return 0
    else
        return 1
    fi
}

# Check disk space
check_disk_space() {
    disk_usage=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 90 ]; then
        log_message "WARNING: Disk usage is ${disk_usage}%"
        return 1
    fi
    return 0
}

# Check memory usage
check_memory() {
    memory_usage=$(free | grep Mem | awk '{printf("%.2f", $3/$2 * 100.0)}')
    memory_int=$(echo "$memory_usage" | cut -d. -f1)
    if [ "$memory_int" -gt 90 ]; then
        log_message "WARNING: Memory usage is ${memory_usage}%"
        return 1
    fi
    return 0
}

# Restart application if needed
restart_app() {
    log_message "Attempting to restart $APP_NAME..."
    pm2 restart $APP_NAME
    sleep 10
    
    if check_app_status && check_health_endpoint; then
        log_message "Successfully restarted $APP_NAME"
        return 0
    else
        log_message "ERROR: Failed to restart $APP_NAME"
        return 1
    fi
}

# Main monitoring logic
main() {
    log_message "Starting health check..."
    
    # Check if app is running
    if ! check_app_status; then
        log_message "ERROR: $APP_NAME is not running"
        restart_app
        exit 1
    fi
    
    # Check health endpoint
    if ! check_health_endpoint; then
        log_message "ERROR: Health endpoint not responding"
        restart_app
        exit 1
    fi
    
    # Check system resources
    check_disk_space
    check_memory
    
    log_message "Health check completed successfully"
}

# Run main function
main
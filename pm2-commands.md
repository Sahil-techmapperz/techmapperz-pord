# 🔧 PM2 Commands for Techmapperz Only

## Restart Only Techmapperz Process

```bash
# Restart only your techmapperz app
pm2 restart techmapperz

# Start techmapperz if not running
pm2 start techmapperz

# Stop only techmapperz
pm2 stop techmapperz

# Delete techmapperz process
pm2 delete techmapperz
```

## Check Status

```bash
# Show all processes
pm2 list

# Show only techmapperz details
pm2 show techmapperz

# Monitor techmapperz in real-time
pm2 monit

# View logs for techmapperz only
pm2 logs techmapperz

# View last 50 lines of techmapperz logs
pm2 logs techmapperz --lines 50
```

## Safe Deployment Commands

```bash
# Graceful restart (waits for connections to close)
pm2 gracefulReload techmapperz

# Restart with no downtime
pm2 reload techmapperz

# Force restart (if app is stuck)
pm2 restart techmapperz --force
```

## What the Deployment Will Do

1. **Check if techmapperz process exists**
2. **If exists**: `pm2 restart techmapperz` (only your app)
3. **If not exists**: `pm2 start npm --name "techmapperz" -- start`
4. **Show status**: `pm2 show techmapperz`

## Your Other PM2 Processes

The deployment will **NOT affect**:
- Any other PM2 processes you might have
- System processes
- Other websites/apps running on PM2

Only the **"techmapperz"** named process will be restarted! ✅
# 🔧 VPS Memory Optimization for Next.js Build

## 🚨 Current Issue

Your VPS is running out of memory during the Next.js build process, causing:
- `Static worker exited with code: null and signal: SIGKILL`
- Build process being terminated by the system
- Application starting without a proper build

## 💡 Solutions

### Option 1: Increase VPS Memory (Recommended)
**Upgrade your VPS plan** to have at least:
- **4GB RAM minimum** for Next.js builds
- **8GB RAM recommended** for optimal performance

### Option 2: Optimize Build Process (Current Fix Applied)
The updated deployment script now:
- ✅ **Starts with 2GB memory allocation**
- ✅ **Increases to 3GB if needed**
- ✅ **Uses longer timeouts** (20-30 minutes)
- ✅ **Aborts deployment if build fails**
- ✅ **Shows resource usage** for debugging

### Option 3: Build Elsewhere (Alternative Solution)
Build the application locally or in GitHub Actions, then deploy the built files:

#### Update deployment to skip build:
```yaml
# In .github/workflows/deploy.yml
# Replace build section with:
- name: Build locally
  run: |
    npm ci
    npm run build
    
- name: Deploy build files
  uses: appleboy/ssh-action@v1.0.3
  with:
    # Upload .next directory instead of building on VPS
```

## 🔍 Check Current VPS Resources

SSH to your VPS and run:

```bash
# Check memory usage
free -h

# Check disk space
df -h

# Check running processes
ps aux --sort=-%mem | head -10

# Check swap space (virtual memory)
swapon --show
```

## ⚡ Immediate VPS Optimizations

### 1. Add Swap Space (Temporary fix)
```bash
# Create 2GB swap file
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# Verify
free -h
```

### 2. Stop Unnecessary Services During Build
```bash
# Stop other applications temporarily
pm2 stop all

# Run build
cd /root/techmapperz-pord
export NODE_OPTIONS="--max-old-space-size=2048"
npm run build

# Restart all applications
pm2 start all
```

### 3. Clear Build Cache
```bash
cd /root/techmapperz-pord

# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Clear node_modules and reinstall
rm -rf node_modules
npm ci

# Try build again
npm run build
```

## 📊 VPS Requirements for Next.js

### Minimum Requirements:
- **RAM**: 2GB (build might fail)
- **Storage**: 20GB
- **CPU**: 2 cores

### Recommended Requirements:
- **RAM**: 4-8GB 
- **Storage**: 40GB SSD
- **CPU**: 2-4 cores

## 🎯 Next Steps

1. **Check current VPS specs** with the commands above
2. **Add swap space** if memory is low
3. **Consider VPS upgrade** if builds keep failing
4. **Push the updated script** to try again

The updated deployment script should handle memory better, but if your VPS has less than 2GB RAM, you might need to upgrade or use the alternative build strategy.
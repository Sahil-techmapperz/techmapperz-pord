# 🛠️ VPS Build Timeout Troubleshooting

## Common Causes of Build Timeouts

1. **Limited RAM** - VPS doesn't have enough memory
2. **CPU limitations** - VPS has limited processing power
3. **Large bundle size** - Too many dependencies or large assets
4. **Swap space** - No swap file configured

## 🚀 Quick Fixes

### 1. **Increase Node.js Memory Limit**
```bash
# Try building with more memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 2. **Add Swap Space (Recommended)**
```bash
# Create 2GB swap file
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 3. **Use the Optimized Build Script**
```bash
# Make executable and run
chmod +x build-optimization.sh
./build-optimization.sh
```

### 4. **Check VPS Resources**
```bash
# Check memory
free -h

# Check CPU
nproc

# Check disk space
df -h

# Check current processes
htop
```

## 🔧 VPS Optimization Commands

### **For Low Memory VPS (1GB or less):**
```bash
# Create swap space
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Build with limited memory
NODE_OPTIONS="--max-old-space-size=512" npm run build
```

### **For Medium Memory VPS (2-4GB):**
```bash
# Build with standard memory
NODE_OPTIONS="--max-old-space-size=2048" npm run build
```

### **For High Memory VPS (4GB+):**
```bash
# Build with optimal memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 📊 Check Your VPS Specs

Run this command on your VPS:
```bash
echo "=== VPS Resources ==="
echo "RAM: $(free -h | awk 'NR==2{printf "%s/%s (%.2f%%)", $3,$2,$3*100/$2 }')"
echo "CPU Cores: $(nproc)"
echo "Disk Space: $(df -h / | awk 'NR==2{printf "%s/%s (%s)", $3,$2,$5}')"
echo "Swap: $(free -h | awk 'NR==3{print $2}')"
```

## 🎯 Recommended Solution Based on Your VPS

### **If you have < 2GB RAM:**
1. Add swap space (2GB)
2. Use `build-optimization.sh`
3. Build with `NODE_OPTIONS="--max-old-space-size=1024"`

### **If build still fails:**
1. **Build locally** and push the `.next` folder
2. **Use pre-built Docker image**
3. **Upgrade VPS plan** (recommended)

## 🔄 Alternative: Build Locally, Deploy Built Files

If VPS can't handle building:

```bash
# On your local machine
npm run build

# Commit the .next folder (temporarily remove from .gitignore)
git add .next
git commit -m "Add pre-built files"
git push

# Update deploy.sh to skip building
sed -i '/npm run build/d' deploy.sh
```

## ⚡ Quick Test Commands

```bash
# Test build with timeout
timeout 300 npm run build

# Test with memory limit
NODE_OPTIONS="--max-old-space-size=1024" timeout 600 npm run build

# Monitor resources during build
htop & npm run build
```

## 🆘 Emergency Fix (Skip Build)

If you need to deploy immediately without building:

```bash
# In deploy.sh, comment out the build step
sed -i 's/npm run build/# npm run build/' deploy.sh

# Or use pre-built version
npm run build:production  # Build with more memory
```

What's your VPS specifications? (RAM, CPU) I can give you a more targeted solution!
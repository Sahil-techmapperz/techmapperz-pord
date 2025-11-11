# 🚀 Automatic Deployment Setup - Complete Guide

## ✅ What the Updated Deployment Does Automatically

### 🔄 Smart Repository Management:
1. **First Deployment**: Automatically clones the repository if it doesn't exist
2. **Subsequent Deployments**: Pulls latest changes from GitHub
3. **Error Recovery**: If git pull fails, it re-clones the entire repository
4. **Clean Setup**: Always ensures you have the latest code

### 🛠️ Complete Build Process:
1. **Environment Setup**: Creates `.env` file with secrets
2. **Dependency Installation**: Runs `npm ci` automatically
3. **Production Build**: Builds with memory optimization
4. **Process Management**: Properly stops/starts PM2 processes

### 🔧 PM2 Management:
1. **Safe Restart**: Stops existing process before starting new one
2. **Clean State**: Deletes old process to prevent conflicts
3. **Auto-Save**: Saves PM2 configuration for persistence
4. **Status Check**: Shows final PM2 status after deployment

## 🚀 How to Trigger Automatic Deployment

### 1. Push Your Code (One-Time Setup)
```bash
# Add all changes
git add .

# Commit with message
git commit -m "Update deployment script for automatic setup"

# Push to main branch
git push origin main
```

### 2. Add GitHub Secrets (One-Time Setup)
Go to your repository → Settings → Secrets and variables → Actions:

**VPS Connection Secrets:**
- `VPS_HOST` = Your VPS IP address
- `VPS_USERNAME` = `root`
- `VPS_PASSWORD` = Your VPS root password
- `VPS_PORT` = `22`

**Environment Variable Secrets:**
- `NEXT_PUBLIC_BACKEND_BASE_URL` = `https://newbackend.techmapperz.com`
- `NEXT_PUBLIC_Site_URL` = `https://www.techmapperz.com`

### 3. Future Deployments (Automatic)
Every time you push to main branch:
```bash
git add .
git commit -m "Your changes description"
git push origin main
```
→ **Automatic deployment triggered!**

## 📋 What Happens During Deployment

### Step 1: Repository Setup
```
✓ Check if /root/techmapperz-pord exists
✓ If not exists: Clone repository
✓ If exists: Pull latest changes
✓ If pull fails: Re-clone repository
```

### Step 2: Environment Configuration
```
✓ Create .env file with production values
✓ Export environment variables for build
✓ Set Node.js memory limits
```

### Step 3: Build Process
```
✓ Install production dependencies (npm ci)
✓ Build Next.js application
✓ Handle memory constraints automatically
```

### Step 4: Process Management
```
✓ Stop existing PM2 process (if running)
✓ Delete old PM2 process (clean slate)
✓ Start new PM2 process
✓ Save PM2 configuration
```

## 🔍 Monitor Your Deployments

### View GitHub Actions:
1. Go to your repository on GitHub
2. Click "Actions" tab
3. See deployment progress in real-time

### Check VPS Status:
```bash
# SSH to your VPS
ssh root@your-vps-ip

# Check PM2 status
pm2 status

# Check application logs
pm2 logs techmapperz

# Check if website is responding
curl http://localhost:3000
```

## 🛡️ Error Handling Built-in

### Repository Issues:
- **Clone failure**: Script retries automatically
- **Git pull failure**: Automatically re-clones repository
- **Permission issues**: Uses proper directory navigation

### Build Issues:
- **Memory errors**: Automatically increases memory limit
- **Dependency issues**: Clean install with npm ci
- **Timeout handling**: 10-minute timeout with fallback

### PM2 Issues:
- **Process conflicts**: Properly stops/deletes old processes
- **Configuration loss**: Automatically saves PM2 config
- **Status verification**: Shows final process status

## 🎯 Benefits of This Setup

### For Development:
- ✅ **Zero-downtime deployments**
- ✅ **Automatic error recovery**
- ✅ **Build optimization**
- ✅ **Environment management**

### For Production:
- ✅ **Reliable deployments**
- ✅ **Process persistence**
- ✅ **Security (environment variables)**
- ✅ **Monitoring capabilities**

## 🚨 Troubleshooting

### If Deployment Fails:
1. **Check GitHub Actions logs** in your repository
2. **Verify GitHub secrets** are correctly set
3. **Check VPS connectivity** and permissions
4. **Review PM2 logs** on the VPS

### Common Issues:
- **VPS connectivity**: Check IP, username, password in secrets
- **Permission denied**: Ensure SSH access works
- **Build failures**: Check Node.js version compatibility
- **PM2 issues**: Clear PM2 processes manually if needed

---

## 🎉 Ready for Production!

**Your deployment is now fully automated!** 

Just push to main branch and watch your changes go live automatically! 🚀
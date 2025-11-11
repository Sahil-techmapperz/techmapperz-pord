# 🔐 GitHub Secrets Setup Guide

## Required Secrets for Auto-Deployment

After pushing your code to GitHub, you need to add these secrets to enable secure deployment.

### How to Add GitHub Secrets

1. **Go to your repository**: `https://github.com/Sahil-techmapperz/techmapperz-pord`
2. **Click**: Settings → Secrets and variables → Actions
3. **Click**: "New repository secret" for each secret below

### Required Secrets

#### VPS Connection Secrets
```
VPS_HOST = Your VPS IP address (e.g., 123.456.789.012)
VPS_USERNAME = root
VPS_PASSWORD = Your VPS root password
VPS_PORT = 22
```

#### Environment Variable Secrets
```
NEXT_PUBLIC_BACKEND_BASE_URL = https://newbackend.techmapperz.com
NEXT_PUBLIC_Site_URL = https://www.techmapperz.com
```

## Step-by-Step Secret Addition

### 1. VPS_HOST
- **Name**: `VPS_HOST`
- **Value**: Your Hostinger VPS IP address

### 2. VPS_USERNAME
- **Name**: `VPS_USERNAME`
- **Value**: `root`

### 3. VPS_PASSWORD
- **Name**: `VPS_PASSWORD`
- **Value**: Your VPS root password

### 4. VPS_PORT
- **Name**: `VPS_PORT`
- **Value**: `22`

### 5. NEXT_PUBLIC_BACKEND_BASE_URL
- **Name**: `NEXT_PUBLIC_BACKEND_BASE_URL`
- **Value**: `https://newbackend.techmapperz.com`

### 6. NEXT_PUBLIC_Site_URL
- **Name**: `NEXT_PUBLIC_Site_URL`
- **Value**: `https://www.techmapperz.com`

## What Happens During Deployment

1. ✅ **Code is pulled** from GitHub to your VPS
2. ✅ **.env file is created** automatically on the server using your secrets
3. ✅ **Dependencies are installed** with `npm ci`
4. ✅ **Project is built** with memory optimization
5. ✅ **PM2 restarts** your application with new changes

## Security Benefits

- 🔐 **No sensitive data** in your repository
- 🛡️ **Secrets encrypted** by GitHub
- 🚫 **Environment variables** never exposed in code
- ✅ **Production values** automatically applied

## After Adding Secrets

Once all secrets are added, you can safely push your code:

```bash
git add .
git commit -m "Initial commit: Techmapperz website with secure deployment"
git branch -M main
git remote add origin https://github.com/Sahil-techmapperz/techmapperz-pord.git
git push -u origin main
```

## Verification

After deployment, you can verify the environment variables are working by:

1. **Check the deployment logs** in GitHub Actions
2. **SSH to your VPS** and check: `cat /root/techmapperz-pord/.env`
3. **Visit your website** to ensure it's loading correctly

---

**Important**: Never commit `.env` files to version control. Always use GitHub Secrets for sensitive data! 🔒
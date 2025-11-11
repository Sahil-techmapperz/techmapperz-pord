# 🔐 VPS Connection Setup Guide

## How Auto-Deployment Connects to Your VPS

The auto-deployment system uses **SSH keys** for secure, passwordless authentication. Here's how it works:

## 🔑 SSH Key Authentication (Recommended & Secure)

### Why SSH Keys Instead of Passwords?
- ✅ **More secure** than passwords
- ✅ **No password needed** in GitHub secrets
- ✅ **Automated authentication** for CI/CD
- ✅ **Can't be brute-forced** like passwords

### Setup Process:

#### 1. **Generate SSH Key on Your VPS**
```bash
# Connect to your VPS first (using password this time)
ssh root@YOUR_VPS_IP

# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "deploy@techmapperz.com" -f /root/.ssh/id_rsa -N ""

# This creates:
# /root/.ssh/id_rsa (private key) - for GitHub secrets
# /root/.ssh/id_rsa.pub (public key) - stays on VPS
```

#### 2. **Add Public Key to Authorized Keys**
```bash
# Add the public key to authorized_keys
cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
chmod 700 /root/.ssh
```

#### 3. **Get Your Private Key for GitHub**
```bash
# Copy this entire output for GitHub secrets
cat /root/.ssh/id_rsa
```

#### 4. **Add to GitHub Secrets**
Go to your repository → Settings → Secrets and variables → Actions

Add these secrets:
- **`VPS_HOST`**: `YOUR_VPS_IP_ADDRESS`
- **`VPS_USERNAME`**: `root`
- **`VPS_SSH_KEY`**: `[paste the entire private key from step 3]`
- **`VPS_PORT`**: `22` (or your custom SSH port)

## 🔒 Alternative: Password Authentication (Less Secure)

If you prefer password authentication (not recommended for production):

#### 1. **Enable Password Authentication on VPS**
```bash
# Edit SSH config
nano /etc/ssh/sshd_config

# Ensure these lines are set:
PasswordAuthentication yes
PubkeyAuthentication yes

# Restart SSH service
systemctl restart sshd
```

#### 2. **Add to GitHub Secrets**
- **`VPS_HOST`**: `YOUR_VPS_IP_ADDRESS`
- **`VPS_USERNAME`**: `root`
- **`VPS_PASSWORD`**: `YOUR_ROOT_PASSWORD`
- **`VPS_PORT`**: `22`

#### 3. **Update GitHub Actions Workflow**
```yaml
# In .github/workflows/deploy.yml, replace the SSH action with:
- name: Deploy to VPS
  uses: appleboy/ssh-action@v1.0.3
  with:
    host: ${{ secrets.VPS_HOST }}
    username: ${{ secrets.VPS_USERNAME }}
    password: ${{ secrets.VPS_PASSWORD }}  # Use password instead of key
    port: ${{ secrets.VPS_PORT }}
    script: |
      cd /var/www/html/techmapperz
      git pull origin main
      npm ci --production
      npm run build
      pm2 restart techmapperz || pm2 start npm --name "techmapperz" -- start
```

## 🚀 Easy Setup Script

I can create a script that does everything automatically:

```bash
# On your VPS, run this one-liner:
curl -sSL https://raw.githubusercontent.com/YOURUSERNAME/techmapperz-website/main/auto-setup-ssh.sh | bash
```

## 📋 What You Need to Provide:

### For SSH Key Method (Recommended):
1. **VPS IP Address** (e.g., `123.456.789.012`)
2. **SSH Port** (usually `22`)
3. **Access to your VPS** (to run the key generation)

### For Password Method:
1. **VPS IP Address**
2. **Root username** (usually `root`)
3. **Root password**
4. **SSH Port** (usually `22`)

## 🔧 Testing Your Connection

After setup, test the connection:

```bash
# From your local machine or another server:
ssh -i /path/to/private/key root@YOUR_VPS_IP

# Or with password:
ssh root@YOUR_VPS_IP
```

## ❓ Which Method Do You Prefer?

**Option A:** SSH Key Authentication (Recommended)
- More secure
- No passwords in GitHub
- Industry standard

**Option B:** Password Authentication (Simpler)
- Easier to set up
- Less secure
- Password stored in GitHub secrets

Let me know which method you'd like to use, and I'll help you set it up! 🚀
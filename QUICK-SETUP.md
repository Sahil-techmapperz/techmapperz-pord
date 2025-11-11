# 🚀 Quick Setup Guide - Techmapperz Auto Deployment

## Step-by-Step Setup (5 minutes)

### 1. Create GitHub Repository
```bash
# Create a new repository on GitHub, then:
git init
git add .
git commit -m "Initial commit - Techmapperz website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/techmapperz-website.git
git push -u origin main
```

### 2. Prepare Your VPS
Run this command on your Hostinger VPS:
```bash
curl -sSL https://raw.githubusercontent.com/YOURUSERNAME/techmapperz-website/main/setup-vps.sh | bash
```

Or manually:
```bash
# Update system and install Node.js
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs git nginx

# Install PM2
npm install -g pm2

# Create directories
mkdir -p /var/www/html/techmapperz /var/log/pm2 /var/backups/techmapperz

# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "deploy@techmapperz.com" -f /root/.ssh/id_rsa -N ""
```

### 3. Configure GitHub
1. Go to your repository → **Settings** → **Deploy keys**
2. Add your VPS public key:
   ```bash
   cat /root/.ssh/id_rsa.pub
   ```
3. Go to **Settings** → **Secrets and variables** → **Actions**
4. Add these secrets:
   - `VPS_HOST`: Your VPS IP address
   - `VPS_USERNAME`: `root`
   - `VPS_SSH_KEY`: Your private key (`cat /root/.ssh/id_rsa`)
   - `VPS_PORT`: `22`

### 4. Clone and Deploy
```bash
# On your VPS:
cd /var/www/html
git clone git@github.com:YOURUSERNAME/techmapperz-website.git techmapperz
cd techmapperz
chmod +x deploy.sh
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 5. Configure Nginx
```bash
# Copy nginx config
cp nginx.conf /etc/nginx/sites-available/techmapperz
ln -sf /etc/nginx/sites-available/techmapperz /etc/nginx/sites-enabled/

# Update domain name in the config
sed -i 's/your-domain.com/YOURDOMAIN.com/g' /etc/nginx/sites-available/techmapperz

# Test and restart
nginx -t && systemctl reload nginx
```

### 6. Set Up SSL (Optional but Recommended)
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d YOURDOMAIN.com
```

### 7. Set Up Monitoring (Optional)
```bash
# Copy monitoring script
cp monitoring.sh /usr/local/bin/
chmod +x /usr/local/bin/monitoring.sh

# Add to crontab
echo "*/5 * * * * /usr/local/bin/monitoring.sh" | crontab -
```

## ✅ Test Your Setup

1. **Push a change to GitHub**:
   ```bash
   echo "# Test deployment" >> README.md
   git add README.md
   git commit -m "Test auto deployment"
   git push
   ```

2. **Check GitHub Actions**: Go to your repository → Actions tab

3. **Verify deployment**: Visit your website

4. **Check logs**:
   ```bash
   pm2 logs techmapperz
   tail -f /var/log/techmapperz-deploy.log
   ```

## 🔧 Quick Commands

```bash
# Check status
pm2 status
curl -s http://localhost:3000/api/health | jq

# Manual deployment
cd /var/www/html/techmapperz && ./deploy.sh

# View logs
pm2 logs techmapperz
tail -f /var/log/techmapperz-deploy.log

# Restart app
pm2 restart techmapperz

# Check nginx
nginx -t
systemctl status nginx
```

## 🆘 Troubleshooting

**Build fails?**
```bash
cd /var/www/html/techmapperz
npm ci --verbose
npm run build
```

**App won't start?**
```bash
pm2 delete techmapperz
pm2 start ecosystem.config.js
```

**GitHub Actions failing?**
- Check if all secrets are set correctly
- Verify SSH key is added to GitHub deploy keys
- Check VPS logs: `tail -f /var/log/techmapperz-deploy.log`

**Website not accessible?**
```bash
# Check if app is running
curl http://localhost:3000/api/health

# Check nginx
nginx -t
systemctl status nginx

# Check firewall
ufw status
```

That's it! Your auto-deployment is now set up. Every push to the main branch will automatically deploy to your VPS! 🎉
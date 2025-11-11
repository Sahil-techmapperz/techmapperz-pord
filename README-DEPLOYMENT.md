# Techmapperz Auto Deployment Setup

This guide will help you set up automatic deployment from GitHub to your Hostinger VPS.

## Overview

The deployment system includes:
- GitHub Actions for CI/CD
- PM2 for process management
- Nginx as reverse proxy
- Automated backup system
- Error handling and logging

## Prerequisites

1. Hostinger VPS with Ubuntu/Debian
2. GitHub repository
3. Domain name (optional but recommended)

## Setup Instructions

### 1. Prepare Your VPS

Run the setup script on your VPS:

```bash
# Download and run the VPS setup script
wget https://your-domain.com/setup-vps.sh
chmod +x setup-vps.sh
./setup-vps.sh
```

Or manually follow these steps:

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs git nginx

# Install PM2
npm install -g pm2

# Create directories
mkdir -p /var/www/html/techmapperz
mkdir -p /var/log/pm2
mkdir -p /var/backups/techmapperz
```

### 2. Configure GitHub Repository

1. **Create a new repository** on GitHub for your project
2. **Add deploy key**: Add the VPS public key to GitHub
3. **Set up GitHub Secrets**: Go to your repository → Settings → Secrets and add:
   - `VPS_HOST`: Your VPS IP address
   - `VPS_USERNAME`: Usually 'root'
   - `VPS_SSH_KEY`: Your private SSH key
   - `VPS_PORT`: SSH port (usually 22)

### 3. Clone Repository on VPS

```bash
cd /var/www/html
git clone git@github.com:yourusername/techmapperz-website.git techmapperz
cd techmapperz
chmod +x deploy.sh
```

### 4. Initial Deployment

```bash
cd /var/www/html/techmapperz
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

### 5. Configure Nginx

Update `/etc/nginx/sites-available/techmapperz` with your domain:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Test and reload Nginx:
```bash
nginx -t
systemctl reload nginx
```

### 6. Set Up SSL (Recommended)

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d your-domain.com -d www.your-domain.com
```

## How It Works

1. **Push to GitHub**: When you push to the `main` branch
2. **GitHub Actions**: Automatically triggers the workflow
3. **Build & Test**: Code is built and tested
4. **Deploy to VPS**: If tests pass, code is deployed to your VPS
5. **PM2 Restart**: Application is restarted with zero downtime
6. **Backup**: Old version is backed up automatically

## File Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── deploy.sh                   # VPS deployment script
├── ecosystem.config.js         # PM2 configuration
├── setup-vps.sh              # VPS initial setup script
└── README-DEPLOYMENT.md       # This file
```

## Commands

### On VPS:
```bash
# Manual deployment
cd /var/www/html/techmapperz && ./deploy.sh

# Check PM2 status
pm2 status

# View logs
pm2 logs techmapperz

# Restart application
pm2 restart techmapperz

# View deployment logs
tail -f /var/log/techmapperz-deploy.log
```

### Monitoring
- Application logs: `/var/log/pm2/techmapperz-*.log`
- Deployment logs: `/var/log/techmapperz-deploy.log`
- Nginx logs: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **Permission issues**: Ensure proper ownership of `/var/www/html/techmapperz`
3. **Port conflicts**: Make sure port 3000 is available
4. **GitHub Actions fail**: Verify all secrets are set correctly

### Debug Commands:
```bash
# Check if Node.js app is running
netstat -tulpn | grep :3000

# Check PM2 processes
pm2 list

# Test Nginx configuration
nginx -t

# Check system resources
htop
df -h
```

## Security Notes

1. Keep your VPS updated: `apt update && apt upgrade`
2. Use strong SSH keys
3. Consider changing default SSH port
4. Set up a firewall (ufw)
5. Regularly monitor logs for suspicious activity

## Backup Strategy

- Automatic backups before each deployment
- Backups stored in `/var/backups/techmapperz`
- Old backups automatically cleaned (keeps last 5)
- Manual backup: `cp -r /var/www/html/techmapperz /var/backups/techmapperz/manual-backup-$(date +%Y%m%d)`

## Performance Optimization

1. **Enable Gzip in Nginx**:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

2. **PM2 Cluster Mode** (for high traffic):
```javascript
// In ecosystem.config.js
instances: 'max', // Use all CPU cores
```

3. **Static File Caching**:
```nginx
location /_next/static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Support

If you encounter issues:
1. Check the logs first
2. Ensure all prerequisites are met
3. Verify GitHub secrets are correct
4. Test manual deployment first
# 🚀 Simple VPS Setup with Password Authentication

## Step 1: Get Your VPS Information

You'll need these details from your Hostinger VPS:

1. **VPS IP Address** (e.g., `123.456.789.012`)
2. **Username** (usually `root`)
3. **Password** (your VPS root password)
4. **SSH Port** (usually `22`)

## Step 2: Add GitHub Secrets

Go to your GitHub repository:
1. Click **Settings**
2. Go to **Secrets and variables** → **Actions**
3. Click **New repository secret**

Add these 4 secrets:

| Secret Name | Example Value | Description |
|------------|---------------|-------------|
| `VPS_HOST` | `123.456.789.012` | Your VPS IP address |
| `VPS_USERNAME` | `root` | Your VPS username |
| `VPS_PASSWORD` | `your-password-here` | Your VPS root password |
| `VPS_PORT` | `22` | SSH port (usually 22) |

## Step 3: Prepare Your VPS

Connect to your VPS and run these commands:

```bash
# Connect to your VPS
ssh root@YOUR_VPS_IP

# Update system
apt update && apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs git nginx

# Install PM2 (process manager)
npm install -g pm2

# Create project directory
mkdir -p /var/www/html/techmapperz
mkdir -p /var/log/pm2
mkdir -p /var/backups/techmapperz

# Set up PM2 to start on boot
pm2 startup
```

## Step 4: Clone Your Repository

```bash
# Navigate to web directory
cd /var/www/html

# Clone your repository (replace with your actual repo URL)
git clone https://github.com/YOURUSERNAME/techmapperz-website.git techmapperz

# Enter project directory
cd techmapperz

# Make scripts executable
chmod +x deploy.sh

# Install dependencies and build
npm ci
npm run build

# Start the application
pm2 start ecosystem.config.js
pm2 save
```

## Step 5: Configure Nginx (Optional but Recommended)

```bash
# Create nginx configuration
cat > /etc/nginx/sites-available/techmapperz << 'EOF'
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
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/techmapperz /etc/nginx/sites-enabled/

# Remove default nginx site
rm -f /etc/nginx/sites-enabled/default

# Test and restart nginx
nginx -t && systemctl restart nginx
```

## Step 6: Test Auto-Deployment

1. Make a small change to any file in your project
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test auto deployment"
   git push
   ```
3. Go to your GitHub repository → **Actions** tab
4. Watch the deployment process
5. Check your website!

## Quick Commands for Management

```bash
# Check if your app is running
pm2 status

# View application logs
pm2 logs techmapperz

# Restart application
pm2 restart techmapperz

# Check if website is responding
curl http://localhost:3000/api/health

# View deployment logs
tail -f /var/log/techmapperz-deploy.log
```

## Troubleshooting

### If deployment fails:
1. **Check GitHub Actions logs** in your repository
2. **SSH to your VPS** and check:
   ```bash
   cd /var/www/html/techmapperz
   git pull origin main  # Test if git works
   npm ci                # Test if npm works
   pm2 logs techmapperz  # Check app logs
   ```

### If website is not accessible:
```bash
# Check if app is running
pm2 status

# Check if port 3000 is open
netstat -tulpn | grep :3000

# Check nginx status
systemctl status nginx

# Test health endpoint
curl http://localhost:3000/api/health
```

### Common Issues:
- **Permission denied**: Run `chmod +x deploy.sh`
- **Port already in use**: Kill the process using port 3000
- **Build fails**: Check Node.js version with `node -v`
- **Git pull fails**: Check if repository URL is correct

## 🎉 You're All Set!

Once this is set up, every time you push to your main branch:
1. GitHub Actions will automatically trigger
2. Your code will be deployed to your VPS
3. PM2 will restart your application
4. Your website will be updated!

No more manual deployments needed! 🚀
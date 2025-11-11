#!/bin/bash

# VPS Setup Script for Techmapperz Auto Deployment
# Run this script on your Hostinger VPS to prepare it for auto-deployment

set -e

echo "🚀 Setting up VPS for auto-deployment..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "⚙️ Installing required packages..."
apt install -y curl git nginx

# Install Node.js (LTS version)
echo "📥 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs

# Install PM2 globally
echo "🔧 Installing PM2..."
npm install -g pm2

# Create project directory
echo "📁 Creating project directory..."
mkdir -p /var/www/html/techmapperz
chown -R www-data:www-data /var/www/html/techmapperz

# Create log directories
echo "📝 Creating log directories..."
mkdir -p /var/log/pm2
mkdir -p /var/backups/techmapperz

# Setup Nginx configuration
echo "🌐 Configuring Nginx..."
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
nginx -t && systemctl reload nginx

# Setup SSH key for GitHub (you'll need to add the public key to GitHub)
echo "🔑 Generating SSH key for GitHub..."
ssh-keygen -t rsa -b 4096 -C "your-email@example.com" -f /root/.ssh/id_rsa -N ""

# Setup PM2 to start on boot
echo "🔄 Setting up PM2 startup..."
pm2 startup
pm2 save

# Create a simple deployment webhook script
echo "🪝 Creating webhook script..."
cat > /usr/local/bin/deploy-webhook << 'EOF'
#!/bin/bash
cd /var/www/html/techmapperz
./deploy.sh
EOF

chmod +x /usr/local/bin/deploy-webhook

echo "✅ VPS setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Add the following public key to your GitHub repository's deploy keys:"
echo "   $(cat /root/.ssh/id_rsa.pub)"
echo ""
echo "2. Clone your repository:"
echo "   cd /var/www/html && git clone git@github.com:yourusername/techmapperz-website.git techmapperz"
echo ""
echo "3. Update the Nginx configuration with your actual domain name"
echo ""
echo "4. Set up SSL certificate (recommended):"
echo "   apt install certbot python3-certbot-nginx"
echo "   certbot --nginx -d your-domain.com"
echo ""
echo "5. Configure GitHub Actions secrets with your VPS details"
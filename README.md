# Techmapperz Website

This is the official website for Techmapperz, built with [Next.js](https://nextjs.org/) and deployed with automated CI/CD pipeline.

## 🚀 Auto-Deployment System

This project features a fully automated deployment system that deploys to a Hostinger VPS whenever code is pushed to the main branch.

### How Auto-Deployment Works

```
GitHub Push → GitHub Actions → Build → Deploy to VPS → Live Website
```

#### 1. **Trigger (GitHub Push)**
- Any push to `main` or `master` branch triggers the deployment
- Pull requests to these branches also trigger builds (but no deployment)

#### 2. **GitHub Actions Build Process** (`.github/workflows/deploy.yml`)
- **Environment Setup**: Ubuntu runner with Node.js 18
- **Dependency Installation**: `npm ci` for clean install
- **Build Generation**: `npm run build` with production environment variables
- **Artifact Preparation**: Packages `.next`, `package.json`, and `package-lock.json`

#### 3. **VPS Deployment Process**
- **File Transfer**: Built files uploaded to VPS via SCP
- **Code Sync**: Latest code pulled from GitHub repository
- **Environment Setup**: Environment variables configured on VPS
- **Dependency Installation**: Production dependencies installed
- **Process Management**: PM2 restarts the application
- **Health Check**: Deployment verification

### 🔧 VPS Configuration

| Component | Details |
|-----------|---------|
| **Server** | Hostinger VPS |
| **OS** | Ubuntu Linux |
| **Runtime** | Node.js 18 |
| **Process Manager** | PM2 |
| **Port** | 3000 |
| **Directory** | `/root/techmapperz-pord/` |

### 🔐 Required GitHub Secrets

The following secrets must be configured in GitHub repository settings:

```bash
VPS_HOST              # VPS IP address
VPS_USERNAME          # VPS username (usually 'root')
VPS_PASSWORD          # VPS password
VPS_PORT              # SSH port (usually 22)
NEXT_PUBLIC_BACKEND_BASE_URL  # API base URL
NEXT_PUBLIC_Site_URL  # Website URL
```

### 📋 Deployment Steps Breakdown

1. **Code Push**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **GitHub Actions Workflow**
   - Checkout code
   - Setup Node.js environment
   - Install dependencies
   - Build Next.js application
   - Upload build files to VPS
   - Execute deployment script on VPS

3. **VPS Deployment Script**
   - Pull latest code from GitHub
   - Create environment configuration
   - Install production dependencies
   - Verify build files
   - Restart PM2 process
   - Confirm deployment status

### 🎯 Deployment Features

- ✅ **Zero-Downtime Deployment**: PM2 gracefully restarts the application
- ✅ **Build Optimization**: Pre-built on GitHub Actions for faster deployment
- ✅ **Environment Management**: Automatic environment variable configuration
- ✅ **Error Recovery**: Automatic fallbacks and error handling
- ✅ **Health Monitoring**: Post-deployment verification
- ✅ **Process Management**: PM2 ensures application stays running

### 📊 Performance Optimizations

- **Build Caching**: npm cache for faster dependency installation
- **Memory Optimization**: `--max-old-space-size=1536` for Node.js
- **Production Build**: Optimized Next.js build with minification
- **Process Management**: PM2 cluster mode for better performance

## 🛠️ Local Development

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Setup

1. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

2. Update environment variables in `.env`:
   ```bash
   NEXT_PUBLIC_BACKEND_BASE_URL=your_api_url
   NEXT_PUBLIC_Site_URL=your_site_url
   ```

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── _Components/       # Reusable components
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── public/               # Static assets
├── lib/                  # Utility functions
├── .github/workflows/    # GitHub Actions
└── next.config.mjs      # Next.js configuration
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Hostinger VPS Guide](https://www.hostinger.com/tutorials/vps)

## 🔍 Monitoring & Troubleshooting

### Check Deployment Status
- **GitHub Actions**: Check the Actions tab in GitHub repository
- **VPS Status**: SSH into VPS and run `pm2 status`
- **Logs**: View PM2 logs with `pm2 logs techmapperz`

### Common Issues
- **Build Failures**: Check GitHub Actions logs
- **Deployment Errors**: Verify GitHub secrets configuration
- **VPS Issues**: Check PM2 process status and logs

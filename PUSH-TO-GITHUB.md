# 🚀 Push Your Code to GitHub

## Ready-to-Copy Commands for Your Repository

Copy and paste these commands **one by one** in your project terminal:

```bash
# 1. Initialize git repository
git init

# 2. Add all files to git
git add .

# 3. Create first commit
git commit -m "Initial commit: Techmapperz website with auto-deployment setup"

# 4. Set main branch
git branch -M main

# 5. Add your GitHub repository
git remote add origin https://github.com/Sahil-techmapperz/techmapperz-pord.git

# 6. Push code to GitHub
git push -u origin main
```

## ✅ After Pushing Successfully

1. **Go to your repository:** https://github.com/Sahil-techmapperz/techmapperz-pord
2. **Check if all files are there**, including:
   - `.github/workflows/deploy.yml`
   - `deploy.sh`
   - `ecosystem.config.js`
   - All your website files

## 🔑 Next Step: GitHub Secrets

After pushing your code, you'll need to add these secrets:

**Repository Settings → Secrets and variables → Actions**

Add these 6 secrets:
- `VPS_HOST` = Your VPS IP address
- `VPS_USERNAME` = `root`
- `VPS_PASSWORD` = Your VPS password
- `VPS_PORT` = `22`
- `NEXT_PUBLIC_BACKEND_BASE_URL` = `https://newbackend.techmapperz.com`
- `NEXT_PUBLIC_Site_URL` = `https://www.techmapperz.com`

📖 **Detailed setup guide**: See `GITHUB-SECRETS-SETUP.md` for step-by-step instructions

## 🚨 Common Issues & Solutions

**If you get "remote origin already exists":**
```bash
git remote remove origin
git remote add origin https://github.com/Sahil-techmapperz/techmapperz-pord.git
git push -u origin main
```

**If you get authentication errors:**
- Use GitHub Desktop app, OR
- Generate a Personal Access Token from GitHub settings

**If push is rejected:**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

Ready to push your code? Let me know if you need help with any step! 🎯
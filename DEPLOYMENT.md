# 🚀 Deployment Guide

## Quick Deploy to GitHub Pages

Your portfolio is now configured to deploy to:
**https://akshaydhabale.github.io/portfolio/**

### Option 1: Manual Deployment (Quick)

Run these commands in your terminal:

```bash
# If you haven't initialized git yet
git init
git add .
git commit -m "Initial commit: Portfolio setup"

# Connect to your GitHub repository
git remote add origin https://github.com/akshaydhabale/portfolio.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

After running `npm run deploy`, your site will be live at: https://akshaydhabale.github.io/portfolio/

### Option 2: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys on every push:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/akshaydhabale/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to: https://github.com/akshaydhabale/portfolio/settings/pages
   - Under "Build and deployment"
   - Set **Source** to: "GitHub Actions"
   - Click Save

3. **Done!** Your site will automatically deploy on every push to the main branch.

### Verify Deployment

After deployment, visit: https://akshaydhabale.github.io/portfolio/

### Updating Your Portfolio

To update your portfolio after the initial deployment:

```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio content"
git push

# For manual deployment, also run:
npm run deploy
```

### Troubleshooting

**Issue: Site shows 404**
- Make sure GitHub Pages is enabled in repository settings
- Check that the source is set to "gh-pages" branch or "GitHub Actions"
- Wait 2-3 minutes for deployment to complete

**Issue: Styles not loading**
- Verify `base: '/portfolio/'` is set in `vite.config.js`
- Clear your browser cache and refresh

**Issue: Deploy fails**
- Run `npm install` to ensure all dependencies are installed
- Check that you have push permissions to the repository

### Project Configuration

The following files have been configured for GitHub Pages deployment:

- ✅ `vite.config.js` - Base path set to `/portfolio/`
- ✅ `package.json` - Homepage and deploy scripts added
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `gh-pages` package installed

### Need Help?

Check the main README.md for full documentation or visit:
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)


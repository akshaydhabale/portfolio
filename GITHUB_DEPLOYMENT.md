# GitHub Pages Deployment with Environment Variables

## 🚀 Two Deployment Options

### Option 1: Using GitHub Actions (Automatic) ⭐ Recommended

This automatically deploys when you push to main branch.

#### Setup Steps:

**Step 1: Set GitHub Secrets**

1. Go to: `https://github.com/akshaydhabale/portfolio/settings/secrets/actions`
2. Click **"New repository secret"**
3. Add three secrets:
   - Name: `VITE_EMAILJS_SERVICE_ID` → Value: your service ID
   - Name: `VITE_EMAILJS_TEMPLATE_ID` → Value: your template ID
   - Name: `VITE_EMAILJS_PUBLIC_KEY` → Value: your public key

**Step 2: Configure GitHub Pages**

1. Go to: `https://github.com/akshaydhabale/portfolio/settings/pages`
2. Under "Build and deployment"
3. Set **Source** to: **"GitHub Actions"**
4. Save

**Step 3: Push Your Code**

```bash
git add .
git commit -m "Add EmailJS with GitHub Actions deployment"
git push origin main
```

**Step 4: Wait for Deployment**

- Go to: `https://github.com/akshaydhabale/portfolio/actions`
- Watch the workflow run
- Once complete, your site will be live with working contact form!

---

### Option 2: Manual Deployment with gh-pages

Use this if you prefer manual control.

#### Setup Steps:

**Step 1: Create .env file locally**

Create `.env` in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Step 2: Build and Deploy**

```bash
npm run build
npm run deploy
```

⚠️ **Note:** This embeds your credentials in the built files. The Public Key is safe to expose, but keep Service and Template IDs private if possible.

---

## 🔒 Security Considerations

### What's Safe to Expose?

✅ **Public Key** - Designed for frontend use, safe to expose
✅ **Service ID** - Can be exposed (rate-limited by EmailJS)
✅ **Template ID** - Can be exposed

### Best Practice

- Use GitHub Secrets (Option 1) for automatic deployments
- Never commit `.env` file to git (already in `.gitignore`)
- Public Key is specifically designed for client-side use

---

## 📊 Checking Deployment Status

### GitHub Actions (Option 1)

1. Go to: `https://github.com/akshaydhabale/portfolio/actions`
2. Click on the latest workflow run
3. See detailed logs and status
4. Green checkmark = successful deployment

### Manual Deployment (Option 2)

1. Go to: `https://github.com/akshaydhabale/portfolio/settings/pages`
2. Check "Your site is live at..." message
3. Visit: `https://akshaydhabale.github.io/portfolio/`

---

## 🐛 Troubleshooting

### Contact form not working after deployment?

**Check 1: Verify secrets are set**
```
Settings → Secrets and variables → Actions
```
Ensure all three secrets exist with correct names.

**Check 2: Check workflow logs**
```
Actions → Latest workflow → View logs
```
Look for any errors during build.

**Check 3: Verify .env file creation**
In workflow logs, you should see:
```
Create .env file
```

**Check 4: Test locally first**
```bash
npm run build
npm run preview
```
If it works locally, it should work on GitHub.

### "EmailJS credentials not configured" error?

- Double-check secret names (must start with `VITE_`)
- Verify values don't have extra spaces
- Re-run the GitHub Action workflow

### GitHub Actions not running?

- Check if Pages source is set to "GitHub Actions"
- Verify the workflow file is in `.github/workflows/`
- Check if workflows are enabled in repo settings

---

## 🔄 Updating Secrets

If you need to change your EmailJS credentials:

1. Go to: `https://github.com/akshaydhabale/portfolio/settings/secrets/actions`
2. Click on the secret name
3. Click **"Update secret"**
4. Enter new value
5. Save
6. Re-run the workflow or push a new commit

---

## 📝 Quick Reference

### GitHub Secrets Path:
```
Repository → Settings → Secrets and variables → Actions
```

### Secrets to Add:
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

### Deploy Commands:

**Automatic (GitHub Actions):**
```bash
git push origin main
```

**Manual:**
```bash
npm run deploy
```

---

## 🎯 Current Deployment Method

You have **two workflow files**:

1. `.github/workflows/deploy.yml` - Original (no environment variables)
2. `.github/workflows/deploy-with-env.yml` - New (with environment variables)

**To use the new one:**
- Delete or rename the old `deploy.yml`
- Or set GitHub Pages source to "GitHub Actions"
- The new workflow will handle everything automatically

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site is accessible: `https://akshaydhabale.github.io/portfolio/`
- [ ] Contact form loads without errors
- [ ] Fill out and submit test message
- [ ] Check browser console for errors
- [ ] Verify email arrives at akshaydhabale@gmail.com
- [ ] Success message appears after submission

---

**Need Help?** Check the GitHub Actions logs for detailed error messages!


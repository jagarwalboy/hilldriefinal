# Deployment Guide - Cloudflare Pages

## 🚀 Deploy HillDrive to Cloudflare Pages

### Prerequisites
- GitHub account
- Cloudflare account
- Repository pushed to GitHub

### Step 1: Push to GitHub
```bash
# If you haven't created a GitHub repository yet:
# 1. Go to https://github.com/new
# 2. Create a new repository named "hilldrive-rideshare"
# 3. Don't initialize with README (we already have one)

# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/hilldrive-rideshare.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Pages" in the sidebar

2. **Create New Project**
   - Click "Create a project"
   - Choose "Connect to Git"
   - Authorize GitHub access

3. **Select Repository**
   - Choose your `hilldrive-rideshare` repository
   - Click "Begin setup"

4. **Configure Build Settings**
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave blank)
   ```

5. **Environment Variables (if needed)**
   ```
   NODE_VERSION=18.17.0
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

6. **Deploy**
   - Click "Save and Deploy"
   - Wait for build to complete (usually 2-3 minutes)

### Step 3: Custom Domain (Optional)
1. In Cloudflare Pages dashboard
2. Go to your project
3. Click "Custom domains" tab
4. Add your domain (e.g., hilldrive.com)
5. Update DNS records as instructed

### 🔧 Build Configuration

The repository includes:
- `public/_redirects` - Handles client-side routing
- `wrangler.toml` - Cloudflare Pages configuration
- Optimized Vite build settings

### 📝 Deployment Features

✅ **Automatic Deployments**
- Deploys on every push to main branch
- Preview deployments for pull requests

✅ **Performance Optimized**
- Global CDN distribution
- Automatic compression
- Edge caching

✅ **Zero Configuration**
- Built-in SSL certificates
- Custom domains support
- Analytics included

### 🌐 Expected URLs

After deployment:
- **Production**: `https://hilldrive-rideshare.pages.dev`
- **Custom Domain**: `https://yourdomain.com` (if configured)

### 🔍 Troubleshooting

**Build Fails?**
- Check Node.js version (should be 18+)
- Verify all dependencies in package.json
- Check build logs in Cloudflare dashboard

**404 Errors on Refresh?**
- Ensure `_redirects` file is in public folder
- Check SPA redirect configuration

**Environment Variables?**
- Add them in Cloudflare Pages dashboard
- Prefix with `VITE_` for client-side access

### 📞 Support
- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/

---

**Your HillDrive application will be live globally in minutes!** 🚗✨
# Deployment Guide

This guide covers deploying the Abdul Aziz Bhat Memorial Website to Netlify and other platforms.

## 🚀 Netlify Deployment (Recommended)

### Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Manual Deployment

#### 1. Prerequisites
- GitHub, GitLab, or Bitbucket account
- Netlify account (free tier works great)

#### 2. Push to Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Abbaji memorial website"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

#### 3. Connect to Netlify

1. Log in to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `20`

#### 4. Deploy!

Click "Deploy site" - your site will be live in minutes!

### Configuration

The site is pre-configured in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### Custom Domain

1. In Netlify dashboard: **Domain settings** → **Add custom domain**
2. Follow DNS configuration steps
3. Enable HTTPS (automatic with Netlify)
4. Update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## 🌐 Alternative Platforms

### Vercel

```bash
npm install -g vercel
vercel
```

Build settings:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### GitHub Pages

1. Install adapter:
```bash
npm install @astrojs/github-pages
```

2. Update `astro.config.mjs`:
```js
import github from '@astrojs/github-pages';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name',
  integrations: [github()],
  // ...
});
```

3. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Cloudflare Pages

1. Push to Git repository
2. Go to Cloudflare Pages dashboard
3. Create new project
4. Connect repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

## 🔧 Environment Variables

If you need environment variables:

### Netlify

1. **Site settings** → **Environment variables**
2. Add variables
3. Redeploy

### Local Development

Create `.env` file:
```
PUBLIC_SITE_URL=http://localhost:4321
```

Access in code:
```js
const siteUrl = import.meta.env.PUBLIC_SITE_URL;
```

## 📊 Performance Optimization

### Image Optimization

Astro optimizes images automatically. For best results:

```astro
---
import { Image } from 'astro:assets';
import photo from '../assets/photo.jpg';
---

<Image src={photo} alt="Description" width={800} height={600} />
```

### Caching

Netlify automatically handles caching. Headers are configured in `netlify.toml`:

```toml
[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔍 SEO Setup

### Update Site URL

In `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://abdulazizabhat.com', // Your domain
  // ...
});
```

### Submit Sitemap

After deployment:
1. Site generates sitemap at `/sitemap.xml`
2. Submit to Google Search Console
3. Submit to Bing Webmaster Tools

### Meta Tags

All pages include:
- Open Graph tags
- Twitter Cards
- Structured data (Schema.org)

## 📈 Analytics (Optional)

### Google Analytics

Add to `BaseLayout.astro` before `</head>`:

```astro
{import.meta.env.PROD && (
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
)}
```

### Netlify Analytics

Enable in Netlify dashboard (paid feature, but very privacy-friendly)

## 🔒 Security

### HTTPS

- Netlify provides free SSL automatically
- Custom domains get Let's Encrypt certificates
- Always use HTTPS in production

### Headers

Security headers configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## 🐛 Troubleshooting

### Build Fails

**Check Node version**:
```bash
node --version  # Should be 20+
```

**Clear cache**:
```bash
rm -rf node_modules .astro dist
npm install
npm run build
```

### Broken Links After Deployment

- Check `site` in `astro.config.mjs`
- Verify `base` path if using subdirectory
- Test with `npm run preview` before deploying

### Images Not Loading

- Images must be in `public/` directory
- Reference with `/images/photo.jpg` (leading slash)
- Check file names (case-sensitive on servers)

### 404 Errors

Netlify handles this automatically with `_redirects`:
```
/* /index.html 200
```

## 📱 Testing Before Deploy

### Local Build

```bash
npm run build
npm run preview
```

Test on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes

### Lighthouse Score

1. Open DevTools
2. Run Lighthouse audit
3. Target scores:
   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100

## 🔄 Continuous Deployment

Once connected to Netlify:
- Every push to `main` triggers a build
- Preview deployments for pull requests
- Rollback capability
- Deploy previews for testing

## 📞 Support

- **Netlify Docs**: https://docs.netlify.com
- **Astro Docs**: https://docs.astro.build
- **This Project**: See README.md

---

Happy deploying! 🚀

**"From the rock, we built a university. From code, we build memory."**

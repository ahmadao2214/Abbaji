# Deployment Guide

This guide covers building and deploying the Abdul Aziz Butt Memorial Website.

## Build Settings

- **Framework:** Astro (static output)
- **Node version:** 20+
- **Build command:** `npm run build` (`astro check && astro build`)
- **Output directory:** `dist`

## Vercel (Current Live Host)

The live site is hosted at `https://abbaji.vercel.app` and builds automatically on pushes to the repository's default branch (`claude/kashmir-memorial-site-SEb3t`).

- `astro.config.mjs` sets `site: 'https://abbaji.vercel.app'` for canonical URLs and Open Graph metadata.
- `/legacy` redirects statically to `/biography#family` via Astro's built-in `redirects` config.

To test a deployment manually via the Vercel CLI:

```bash
vercel --prod
```

## Netlify (Supported)

`netlify.toml` is pre-configured with:

- Build command `npm run build` and publish directory `dist` on Node 20.
- Long-lived immutable cache headers for `/fonts/*`, `/images/*`, CSS, and JS.
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
- HTTP 301 redirects from `/legacy` and `/legacy/` to `/biography#family`.

## Custom Domain

If you attach a custom domain on Vercel or Netlify:

1. Configure DNS and HTTPS in your hosting dashboard.
2. Update `site` in `astro.config.mjs` to match the canonical domain so `<link rel="canonical">` and `og:url` stay accurate.
3. Rebuild and deploy.

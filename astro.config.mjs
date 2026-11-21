import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://abbaji.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  redirects: {
    '/legacy': '/biography#family',
  },
  image: {
    domains: [],
    remotePatterns: [],
  },
});

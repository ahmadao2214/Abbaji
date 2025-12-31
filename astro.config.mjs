import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdulazizabhat.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  image: {
    domains: [],
    remotePatterns: [],
  },
});

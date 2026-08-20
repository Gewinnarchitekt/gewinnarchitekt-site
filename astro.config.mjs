// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gewinnarchitekt.ch',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
    '/so-arbeite-ich': '/herangehensweise',
    '/leistungsseite': {
      status: 301,
      destination: '/angebot'
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  redirects: {
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
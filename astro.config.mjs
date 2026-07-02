// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
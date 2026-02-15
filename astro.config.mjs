import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://softprobe.ai', // Update this with your actual domain
  output: 'static',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});

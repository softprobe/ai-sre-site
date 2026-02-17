import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://softprobe.ai', // Update this with your actual domain
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});

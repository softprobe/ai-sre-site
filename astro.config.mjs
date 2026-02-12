import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://softprobe.ai', // Update this with your actual domain
  output: 'static',
  build: {
    assets: 'assets'
  }
});

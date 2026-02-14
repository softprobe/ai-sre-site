import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

let optionalSitemap = [];
try {
  const { default: sitemap } = await import('@astrojs/sitemap');
  optionalSitemap = [sitemap()];
} catch {
  optionalSitemap = [];
}

// https://astro.build/config
export default defineConfig({
  site: 'https://softprobe.ai', // Update this with your actual domain
  output: 'static',
  integrations: [tailwind(), ...optionalSitemap],
  build: {
    assets: 'assets'
  }
});

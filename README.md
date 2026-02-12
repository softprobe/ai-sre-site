# Softprobe AI SRE Architecture Site

A modern marketing website for Softprobe AI, built with [Astro](https://astro.build) for optimal performance and SEO.

## Overview

This site showcases Softprobe AI's SRE architecture and capabilities, including:
- Interactive hero diagram with SVG animations
- Case studies demonstrating Softprobe AI in action
- Debug page explaining the runtime workflow mapping

## Tech Stack

- **Astro** - Static site generator for optimal performance
- **HTML/CSS/JavaScript** - Vanilla web technologies for animations and interactivity
- **Static Site Generation (SSG)** - Pre-rendered pages for fast loading

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build the site for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
aisre-site/
├── public/              # Static assets (images, CSS, etc.)
│   ├── styles.css      # Global styles
│   └── [assets]        # Images and other static files
├── src/
│   ├── components/     # Astro components
│   │   ├── Hero.astro           # Hero section with SVG diagram
│   │   └── CaseStudies.astro    # Case studies section
│   ├── layouts/        # Page layouts
│   │   └── BaseLayout.astro     # Base HTML layout with SEO
│   └── pages/          # Pages (file-based routing)
│       ├── index.astro           # Home page
│       └── debug.astro           # Debug page
├── astro.config.mjs    # Astro configuration
└── package.json        # Dependencies and scripts
```

## Features

- **Component-based architecture** - Reusable Astro components
- **SEO optimized** - Meta tags, Open Graph, and Twitter Cards
- **Performance focused** - Minimal JavaScript, static generation
- **Interactive animations** - SVG-based diagram animations
- **Responsive design** - Mobile-friendly layouts

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Deploy the `dist/` folder contents
- **Any static host**: Upload the contents of `dist/` after building

### Environment Variables

Update the `site` URL in `astro.config.mjs` with your production domain:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## Development Notes

- SVG animations are handled by client-side JavaScript in the Hero component
- All styles are in `public/styles.css`
- Assets in `public/` are served at the root path (e.g., `/sp-logo-trans.png`)
- Components use Astro's component syntax with frontmatter for logic

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## License

Copyright © Softprobe AI

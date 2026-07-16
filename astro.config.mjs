// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages under /Mentors-group-website/ by default.
// When the real domain exists, set SITE=https://www.example.ie BASE_PATH=/
// in the build environment (or change these defaults).
const SITE = process.env.SITE ?? 'https://hirschmathew-jpg.github.io';
const BASE = process.env.BASE_PATH ?? '/Mentors-group-website';

export default defineConfig({
  site: SITE,
  base: BASE,
  build: {
    // Keep CSS in files so the relative font URLs in global.css always
    // resolve from /_astro/, independent of which page includes them.
    inlineStylesheets: 'never',
  },
  integrations: [sitemap()],
});

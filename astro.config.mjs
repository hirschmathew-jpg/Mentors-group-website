// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production domain when it's confirmed.
const SITE = 'https://www.mentoragroup.ie';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
});

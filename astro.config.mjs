import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://fryrvo.com',
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind(), compress(), sitemap(), icon()],
});
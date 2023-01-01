import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), vue(), tailwind()],
  // vite: {
  //   resolve: {
  //     alias: {
  //       '@': fileURLToPath(new URL('./src', import.meta.url)),
  //     },
  //   },
  // },
  server: {
    host: true,
  },
})

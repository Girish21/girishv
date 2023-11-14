import markdoc from '@astrojs/markdoc'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    partytown(),
    markdoc()
  ],
  site: 'https://girishv.com',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  }
})

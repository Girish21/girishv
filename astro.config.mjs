import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'poimandres',
  wrap: false
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    partytown()
  ],
  site: 'https://girishv.com',
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  markdown: {
    rehypePlugins: [['rehype-pretty-code', options]],
    syntaxHighlight: false,
    shikiConfig: {
      theme: 'poimandres',
      wrap: false
    }
  }
})

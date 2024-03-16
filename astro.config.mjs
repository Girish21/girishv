import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { visit } from 'unist-util-visit'

import InfoCircle from './src/assets/info-outline.svg'
import Warn from './src/assets/warn-outline.svg'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'poimandres',
  wrap: false
}

const iconMap = {
  note: { src: InfoCircle, alt: 'Info block' },
  warn: { src: Warn, alt: 'Warn block' }
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
  prefetch: true,
  markdown: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [
      ['rehype-pretty-code', options],
      function () {
        /**
         * @param {import('hast').Root} tree
         */
        return function transformer(tree) {
          visit(tree, 'element', (node) => {
            if (node.tagName === 'blockquote') {
              const firstParagraph = node.children.find(
                (child) => child.tagName === 'p'
              )
              if (firstParagraph && firstParagraph.children?.length > 0) {
                const firstChild = firstParagraph.children[0]
                if (firstChild.type === 'text') {
                  const text = firstChild.value
                  if (text.match(/^\[!(\w+)\]/)) {
                    firstChild.value = text.replace(/^\[!(\w+)\]/, '').trim()
                    const type = RegExp.$1.toLowerCase()
                    node.properties['data-type'] = type
                    node.children.unshift({
                      type: 'element',
                      tagName: 'span',
                      properties: {
                        className: 'icon'
                      },
                      children: [
                        {
                          type: 'element',
                          tagName: 'img',
                          properties: {
                            src: iconMap[type].src,
                            alt: iconMap[type].alt,
                            width: 32,
                            height: 32,
                            class:
                              'not-prose absolute top-0 -left-0.5 -translate-y-1/2 -translate-x-1/2 bg-background'
                          }
                        }
                      ]
                    })
                  }
                }
              }
            }
          })
        }
      }
    ],
    syntaxHighlight: false
  }
})

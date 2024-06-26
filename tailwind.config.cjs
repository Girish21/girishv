const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,mjs,jsx,md,mdx,svelte,ts,tsx,vue}',
    'astro.config.mjs'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        gray: colors.slate
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        '.text-title': {
          fontSize: '2.5rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'lowercase'
        },
        '.text-heading': {
          fontSize: '2rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'lowercase'
        },
        '.text-subheading': {
          fontSize: '1.25rem',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textTransform: 'lowercase'
        },
        '.text-body': {
          fontSize: '0.9375rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          textTransform: 'lowercase'
        }
      })
    }
  ]
}

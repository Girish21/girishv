import { extendTailwindMerge } from 'tailwind-merge'

export default extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['title', 'heading', 'subheading', 'body', ''] }]
  }
})

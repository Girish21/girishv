import { z, defineCollection } from 'astro:content'

const snippetCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string()),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    published: z.boolean()
  })
})

export const collections = {
  snippets: snippetCollection
}

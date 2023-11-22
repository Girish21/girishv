import { z, defineCollection } from 'astro:content'

const snippetCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string()),
    createdAt: z
      .string()
      .optional()
      .refine((d) => !d || !isNaN(Date.parse(d))),
    updatedAt: z
      .string()
      .optional()
      .refine((d) => !d || !isNaN(Date.parse(d))),
    published: z.boolean()
  })
})

export const collections = {
  snippets: snippetCollection
}

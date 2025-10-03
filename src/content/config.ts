// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publish: z.boolean().default(true),
    publishDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    author_email: z.string().email().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    excerpt: z.string().optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog };

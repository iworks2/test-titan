// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    author: z.string().optional(),
    author_email: z.string().email().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    excerpt: z.string().optional(),
    // keep anything else you use in frontmatter
  }),
});

export const collections = { blog };

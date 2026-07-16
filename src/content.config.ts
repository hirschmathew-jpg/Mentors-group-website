import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['News', 'Report', 'Cybersecurity', 'Advisory', 'Technology']),
    date: z.coerce.date(),
  }),
});

export const collections = { insights };

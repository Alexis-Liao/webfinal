import { defineCollection } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    pubDate: { type: 'date', required: false },
  },
});

export const collections = {
  writing,
};

import { getCollection } from 'astro:content';

// An empty Markdown collection is valid while articles are hosted externally.
const files = import.meta.glob('../content/writing/**/*.{md,mdx}');
export const getWritingPosts = () =>
  Object.keys(files).length ? getCollection('writing') : Promise.resolve([]);

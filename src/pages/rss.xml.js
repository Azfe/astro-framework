import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (context) => {
  const posts = await getCollection('tips');
  return rss({
    title: 'Astro Tips',
    description: 'Tips and tricks for building with Astro',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/tips/${post.slug}/`,
    })),
  });
};
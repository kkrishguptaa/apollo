import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { description, site, title } from '~shared';

export async function GET() {
  const blog = await getCollection('blog');

  return rss({
    title,
    description,
    site,
    items: blog.map((post) => {
      return {
        title: post.data.title,
        link: new URL(post.id, site).toString(),
        description: post.data.description,
        categories: post.data.tags,
        content: post.rendered?.html,
        pubDate: post.data.date,
        author: 'm.krishggupta@icloud.com (Krish Gupta)',
        source: {
          title,
          url: new URL('rss.xml', site).toString(),
        },
      };
    }),
  });
}

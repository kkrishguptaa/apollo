import { site as astroSite, base } from 'astro:config/server'

export const title = "Krish Gupta's Column";
export const description =
  'The Home of Krish Gupta on the Internet. Articles on Web Development, Programming, Tech and more.';
export const topics = ['Full Stack Development', 'DevOps', 'Frontend'];
export const site = new URL(base, astroSite) || new URL('https://blog.krishg.com')

export const config = {
  blogs: {
    priority: 4,
    chunks: {
      size: 12
    }
  }
}

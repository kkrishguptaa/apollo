# Apollo

Astro Blog built for Speed ⚡️

[![A screenshot of the Apollo Website](https://github.com/kkrishguptaa/apollo/raw/main/.github/screenshot.png)](https://blog.krishg.com)

## 👋 Introduction

Apollo is a tiny blog built with Astro. The goal is to have a small tiny bundle size, near zero javascript, and an elegant design. The blogs are stored as markdown files in the repository itself.


## 📦 Tech Stack

- [Astro](https://astro.build/) - Static site generator.
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework.
- [Vercel](https://vercel.com/) - Hosting platform.
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript.

### Astro

This uses Astro [content collections](https://docs.astro.build/en/guides/content-collections/) API to manage the blog articles. The articles are stored in as markdown in `src/content/blog`. There is frontmatter, but that is taken care of by Astro.

There are two types of SSG routes created:

| Route        | Description                                                        |
| ------------ | ------------------------------------------------------------------ |
| `/[number]`  | Paginated list of articles (12 per page). `/` is the same as `/1`. |
| `/[slug]`    | Individual article page.                                           |

It uses [Astro's RSS integration](https://docs.astro.build/en/recipes/rss/) to generate an RSS feed for the blog.

[Experimental API for fonts](https://docs.astro.build/en/reference/experimental-flags/fonts/) is used to load fonts from Google Fonts. It has `optimizedFallbacks` disabled, because it was switching fonts after load which was jarring.

![Homepage bundle size on Cloudflare Radar](https://github.com/user-attachments/assets/ee30e0c6-8f89-45d6-af94-2214b563bcfd)

### Vercel

This website is hosted on Vercel. If you want to deploy it yourself, you can use this handy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkkrishguptaa%2Fapollo&demo-title=Apollo&demo-description=Astro%20Blog%20built%20for%20Speed%20%E2%9A%A1%EF%B8%8F&demo-url=https%3A%2F%2Fblog.krishg.com&demo-image=https%3A%2F%2Fgithub.com%2Fkkrishguptaa%2Fapollo%2Fraw%2Fmain%2F.github%2Fscreenshot.png)

## ✌️ Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kkrishguptaa/apollo.git
   ```
2. Navigate to the project directory:

   ```bash
   cd apollo
    ```

3. Install dependencies:

    ```bash
    pnpm install
    ```

4. Create a `.env` file in the root directory and add the required environment variables.

5. Run the development server:

   ```bash
   pnpm dev
   ```

## 📜 License

This source code for this project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license. However, the blogs on the website/in the repository are my original work and are protected under copyright law. Please do not use or reproduce them without my permission.

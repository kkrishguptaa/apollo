// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://blog.krishg.com",
  output: "static",

  integrations: [sitemap(), mdx()],

  adapter: vercel({
    imageService: false,
    devImageService: "sharp",
  }),

  image: {
    layout: "constrained",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Space Grotesk",
        cssVariable: "--font-space-grotesk",
        fallbacks: ["Montserrat", "Poppins", "sans-serif"],
        weights: ["400 700"],
        styles: ["normal"],
        subsets: ["latin"],
        optimizedFallbacks: false,
        display: "swap",
      },
      {
        provider: fontProviders.google(),
        name: "Lexend",
        cssVariable: "--font-lexend",
        fallbacks: ["Inter", "sans-serif"],
        weights: ["400 700"],
        styles: ["normal", "italic"],
        subsets: ["latin"],
        display: "swap",
      },
    ],
    contentIntellisense: true,
  },
});

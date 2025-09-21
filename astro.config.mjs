// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://blog.krishg.com",
  integrations: [mdx(), sitemap(), react()],
  adapter: vercel(),
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
        weights: ["400", "500", "600", "700", "900"],
        display: "block",
      },
      {
        provider: fontProviders.google(),
        name: "Lexend",
        cssVariable: "--font-lexend",
        fallbacks: ["Inter", "Arial", "sans-serif"],
        weights: ["400", "500", "600", "700"],
        display: "swap",
      },
    ],
    contentIntellisense: true,
  },
});

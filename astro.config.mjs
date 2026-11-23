// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Netlify injects URL (primary site URL) at build time. SITE_URL lets you
// override it locally or in other environments.
const site =
  process.env.SITE_URL ?? process.env.URL ?? "https://fattahsamit.netlify.app";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Self-hosted fonts, read from the Fontsource npm packages at build time.
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      fallbacks: ["ui-monospace", "monospace"],
      options: {
        variants: [
          {
            src: ["@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["@fontsource/jetbrains-mono/files/jetbrains-mono-latin-500-normal.woff2"],
            weight: "500",
            style: "normal",
          },
        ],
      },
    },
  ],
});

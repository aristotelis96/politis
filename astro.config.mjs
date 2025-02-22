import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://aristotelis96.github.io/politis/",
  base: "/politis",
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  output: "static",
  outDir: "docs",
  build: {
    assets: "astro",
  },
});

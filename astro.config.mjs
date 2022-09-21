import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), image()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  }
});
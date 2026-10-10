import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zawa.ae",
  vite: {
    plugins: [tailwindcss()],
  },

  // Keep the 404 page out of the sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
});
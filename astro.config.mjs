import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Astro 6+: top-level `fonts`
  // Astro 5.7.x: wrap this in `experimental: { fonts: [...] }`
  fonts: [
    {
      provider: "local", // or "npm" if using the NPM provider on Astro 6
      name: "Sora Variable",
      cssVariable: "--font-sora",
      variants: [
        {
          weight: "100 800",
          style: "normal",
          src: ["./node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2"],
        },
      ],
    },
    {
      provider: "local",
      name: "Dosis Variable",
      cssVariable: "--font-dosis",
      variants: [
        {
          weight: "200 800",
          style: "normal",
          src: ["./node_modules/@fontsource-variable/dosis/files/dosis-latin-wght-normal.woff2"],
        },
      ],
    },
    {
      provider: "local",
      name: "Almendra",
      cssVariable: "--font-almendra",
      variants: [
        { weight: "400", style: "normal", src: ["./node_modules/@fontsource/almendra/files/almendra-latin-400-normal.woff2"] },
        { weight: "700", style: "normal", src: ["./node_modules/@fontsource/almendra/files/almendra-latin-700-normal.woff2"] },
      ],
    },
  ],
});
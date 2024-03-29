import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), pageInsight()],
  output: "static",
  adapter: vercelStatic()
});
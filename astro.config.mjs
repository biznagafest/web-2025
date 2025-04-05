import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), pageInsight()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  prefetch: {
    defaultStrategy: "viewport",
  },
});

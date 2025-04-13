import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import pageInsight from "astro-page-insight";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), pageInsight(), preact()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  prefetch: {
    defaultStrategy: "viewport",
  },
  experimental: {
    clientPrerender: true,
  },
  env: {
    schema: {
      USE_CMS: envField.boolean({
        default: false,
        optional: true,
        access: "public",
        context: "client",
      }),
      CMS_URL: envField.string({
        optional: true,
        access: "public",
        context: "client",
        url: true,
      }),
      GOOGLE_CLIENT_ID: envField.string({
        optional: false,
        access: "secret",
        context: "server",
      }),
      GOOGLE_CLIENT_SECRET: envField.string({
        optional: false,
        access: "secret",
        context: "server",
      }),
      GOOGLE_REFRESH_TOKEN: envField.string({
        optional: false,
        access: "secret",
        context: "server",
      }),
      MAIL_USERNAME: envField.string({
        optional: false,
        access: "secret",
        context: "server",
      }),
    },
  },
});

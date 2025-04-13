/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  USE_CMS: string;
  CMS_URL: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REFRESH_TOKEN: string;
  MAIL_USERNAME: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

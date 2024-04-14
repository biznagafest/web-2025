/// <reference types="astro/client" />

interface ImportMetaEnv {
  USE_CMS: string;
  CMS_URL: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

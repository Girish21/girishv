/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly GH_ACCESS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

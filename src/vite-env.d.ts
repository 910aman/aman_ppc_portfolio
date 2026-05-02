/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PAGES: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Другие переменные окружения можно добавлять сюда
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

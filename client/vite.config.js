import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "./node_modules/vite/index.cjs";
import vue from "./node_modules/@vitejs/plugin-vue/dist/index.cjs";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

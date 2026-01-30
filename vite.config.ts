import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
  },
  resolve: {
    alias: {
      "@/lib": resolve(__dirname, "./lib"),
      "@": resolve(__dirname, "./src"),
    },
  },
});

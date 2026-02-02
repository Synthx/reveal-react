import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dtsPlugin from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dtsPlugin({
      tsconfigPath: resolve(__dirname, "tsconfig.build.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      fileName: (format) => `main.${format}.js`,
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      external: ["clsx", "react", "react-dom", "react/jsx-runtime"],
    },
  },
  resolve: {
    alias: {
      "@/lib": resolve(__dirname, "./lib"),
      "@": resolve(__dirname, "./src"),
    },
  },
});

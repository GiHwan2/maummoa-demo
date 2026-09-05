import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-404-fallback",
      closeBundle() {
        // GitHub Pages serves 404.html for unknown paths; make it the SPA shell.
        copyFileSync(resolve(__dirname, "dist/index.html"), resolve(__dirname, "dist/404.html"));
      },
    },
  ],
});

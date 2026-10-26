// Static build for GitHub Pages: `bunx vite build --config vite.pages.config.ts`
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const QUANTA_ICONS_SHIM = fileURLToPath(new URL("./src/lib/quanta-icons.ts", import.meta.url));
const base = process.env.PAGES_BASE ?? "/lumen-world/";

export default defineConfig({
  base,
  resolve: {
    tsconfigPaths: true,
    alias: [{ find: /^@higgsfield-ai\/icons(\/.*)?$/, replacement: QUANTA_ICONS_SHIM }],
  },
  build: { outDir: "dist-pages" },
  plugins: [
    svgr({ svgrOptions: { icon: true, svgProps: { fill: "currentColor" } } }),
    tanstackStart({
      spa: { enabled: true, prerender: { outputPath: "/index.html", crawlLinks: false } },
    }),
    react(),
    tailwindcss(),
  ],
});

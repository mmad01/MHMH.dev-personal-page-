import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
 base: '/MHMH.dev-personal-page-/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 8585,
  },
});

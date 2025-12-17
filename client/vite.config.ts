import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  base: "/Christmas-Game/", // Required for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared/src"),
      "@christmas/shared": path.resolve(__dirname, "../shared/src")
    }
  }
});
// Force restart timestamp: 123456


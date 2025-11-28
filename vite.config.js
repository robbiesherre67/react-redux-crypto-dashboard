import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

// IMPORTANT:
// base must match your GitHub repo name when builing and deploying to GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/react-redux-crypto-dashboard/", // REQUIRED for GitHub Pages
  server: {
        port: 3000,
      }
});

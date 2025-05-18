import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#1DA57A", // Customize your theme color here
        },
        javascriptEnabled: true,
      },
    },
  },
});

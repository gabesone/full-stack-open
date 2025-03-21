import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:
      // eslint-disable-next-line no-undef
      process.env.NODE_ENV === "development"
        ? {
            "/api": {
              target: "http://localhost:3001",
              changeOrigin: true,
            },
          }
        : {},
  },
});

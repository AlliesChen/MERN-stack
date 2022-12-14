import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy: {
      "/api/workouts": {
        target: "http://localhost:4000/",
      },
      "/api/user": {
        target: "http://localhost:4000/",
      },
    },
  },
});

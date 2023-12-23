import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "https://portal-demo.onrender.com",
          changeOrigin: true,
        },
      },
    },
    define: {
      "process.env": env,
    },
  };
});

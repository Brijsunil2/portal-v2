// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//       },
//     },
//     define: {
//       'process.env': env
//     },
//   },
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
        },
      },
    },
    define: {
      "process.env": env,
    },
  };
});

import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      // include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      './runtimeConfig': './runtimeConfig.browser'
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  },
  define: {
    _global: ({})
  },
  server: {
    port: 3000
  }
})

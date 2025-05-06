import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:8000',
        target: 'http://192.168.43.205:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

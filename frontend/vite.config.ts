import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost', // nginx expõe o back na :80
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: { port: 5173 }
})

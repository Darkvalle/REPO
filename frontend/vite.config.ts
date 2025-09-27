import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // <-- Adicione esta linha
    port: 5173
  },
  preview: { port: 5173 }
})
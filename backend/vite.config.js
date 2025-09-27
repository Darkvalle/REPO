import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',    // Essencial para expor o servidor na rede do Docker
    port: 5173,         // Porta padrão do Vite
    watch: {
      usePolling: true, // Garante que o HMR (Hot Reload) funcione dentro do Docker
    },
  },
})

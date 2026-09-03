import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // O site é publicado em https://joaolucaslab.github.io/portfolio/,
  // então os assets precisam ser servidos a partir desse subcaminho.
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    fs: {
      // Allow serving files from the entire drive
      allow: ['..']
    }
  },
  resolve: {
    preserveSymlinks: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

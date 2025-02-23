import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures correct paths
  build: {
    outDir: 'dist', // Ensures correct build output
  }
});

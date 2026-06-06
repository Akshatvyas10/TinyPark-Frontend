import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Splitting vendor files into separate chunks for optimal caching and fast initial load
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@splinetool')) {
              return 'vendor-3d-spline'; // Isolates 3D engine completely
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            return 'vendor-utils';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
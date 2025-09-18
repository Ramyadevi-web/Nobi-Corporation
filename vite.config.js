import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    // make sure vite pre-bundles these heavy deps
    include: ['framer-motion', '@react-three/drei'],
    // but don't touch stats.js (we don't use it)
    exclude: ['stats.js'],
    force: true
  },
  build: {
    rollupOptions: {
      // keep stats.js out of the bundle
      external: ['stats.js'],
    },
  },
  resolve: {
    alias: {
      // if something still tries to import stats.js, point it to an empty shim
      'stats.js': '/src/shims/stats.js',
    },
  },
})

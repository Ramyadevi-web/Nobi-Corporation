import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { rotate } from 'three/tsl'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    // Force dependency optimization
    force: true,
    
    // Make sure vite pre-bundles these heavy deps
    include: [
      'framer-motion', 
      '@react-three/drei',
      '@react-three/fiber', // Add this explicitly
      'three', // Add three.js explicitly
      'three-stdlib' // Often used with drei
    ],
    
    // But don't touch stats.js (we don't use it)
    exclude: ['stats.js'],
    
    // Add esbuild options for better handling of drei
    esbuildOptions: {
      target: 'es2020',
      supported: {
        'dynamic-import': true,
        'import-meta': true
      }
    }
  },
  build: {
    // Add commonjs options for drei compatibility
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
      esmExternals: true
    },
    rollupOptions: {
      // Keep stats.js out of the bundle
      external: ['stats.js'],
    },
  },
  resolve: {
    alias: {
      // If something still tries to import stats.js, point it to an empty shim
      'stats.js': '/src/shims/stats.js',
    },
  },
  // Add server configuration for better HMR handling
  server: {
    hmr: {
      overlay: false // Disable error overlay if it's causing issues
    }
  }
})
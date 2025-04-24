import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Configure esbuild to ignore TypeScript errors during build
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
  build: {
    // Ignore TypeScript errors during build
    minify: true,
    sourcemap: false,
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore typescript errors during build
        if (warning.code === 'TS_ERROR') return;
        warn(warning);
      },
    },
  },
  server: {
    // Configure server to use correct MIME types
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  },
});

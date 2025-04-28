import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Custom middleware plugin for API routes
const expressMiddleware = (): Plugin => ({
  name: 'express-middleware',
  configureServer: async (server) => {
    // Import server module dynamically to avoid bundling Node.js dependencies
    const { default: app } = await import('./src/server');
    server.middlewares.use('/api', app);
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), expressMiddleware()],
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

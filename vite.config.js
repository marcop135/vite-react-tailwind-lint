import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    eslint(),
    stylelint(),
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  build: {
    // Production hides sourcemaps from the bundled JS; dev and analyze builds
    // emit referenced sourcemaps so DevTools and the visualizer can use them.
    sourcemap: mode === 'production' ? 'hidden' : true,
    rollupOptions: {
      output: {
        // Split all node_modules into a long-lived vendor chunk so app-code
        // changes do not bust the (large, stable) React/ReactDOM cache.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  esbuild: {
    // Strip console/debugger only in production; dev-guarded console.error in
    // ErrorBoundary is removed at build time anyway via import.meta.env.DEV.
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    watch: {
      ignored: ['**/.stylelintcache', '**/.eslintcache'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
}));

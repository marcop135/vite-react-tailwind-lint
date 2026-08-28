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
    rolldownOptions: {
      output: {
        // Strip console/debugger only in production. Vite 8 runs Rolldown, which
        // ignores the old `esbuild.drop`; the minifier owns it now. The dev-guarded
        // console.error in ErrorBoundary is removed by import.meta.env.DEV anyway.
        minify:
          mode === 'production'
            ? {
                compress: { dropConsole: true, dropDebugger: true },
                mangle: true,
                codegen: true,
              }
            : false,
        // Split all node_modules into a long-lived vendor chunk so app-code
        // changes do not bust the (large, stable) React/ReactDOM cache.
        codeSplitting: {
          groups: [
            {
              name: (id) => (id.includes('node_modules') ? 'vendor' : null),
            },
          ],
        },
      },
    },
  },
  server: {
    watch: {
      ignored: ['**/.stylelintcache', '**/.eslintcache'],
    },
  },
}));

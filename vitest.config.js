import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { stackVersions } from './scripts/stack-versions.mjs';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __STACK_VERSIONS__: JSON.stringify(stackVersions()),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});

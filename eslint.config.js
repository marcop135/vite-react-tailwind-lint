import globals from 'globals';
import { defineConfig } from 'eslint/config';
import parser from '@typescript-eslint/parser';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    ignores: ['node_modules/', 'src/assets/js/vendor/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'no-debugger': 'off',
        'no-undef': 'warn',
        'no-empty': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        eqeqeq: 'off',
        camelcase: 'off',
      },
    },
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'warn',
    },
  },
]);

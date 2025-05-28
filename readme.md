# vite-react-tailwind-starter

A robust and up-to-date starter for building [Tailwind CSS](https://tailwindcss.com/)-powered user interfaces in [React (v17)](https://react.dev/), leveraging the speed and simplicity of [Vite](https://vitejs.dev/).  
This setup streamlines development, linting, and formatting for Tailwind-based UIs, following best practices with a thoughtfully curated toolchain.

## Scripts

- `dev`: Start the development server (`vite`).
- `build`: Build the project for production (`vite build`).
- `preview`: Preview the production build (`vite preview`).

## Requirements

- Node.js (version as specified in `package.json`, e.g., `^18.0.0`)
- npm

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

- `vite.config.js`: Vite configuration file, includes Tailwind CSS plugin and sets up the development server.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration for Tailwind CSS.
- `src/`: Source code directory.

## Tooling

This project uses additional tools to enhance the development experience:

- **Tailwind CSS IntelliSense**: Provides advanced autocomplete, syntax highlighting, and linting for Tailwind classes in supported editors (e.g., VS Code).
- **Prettier (with Tailwind CSS plugin)**: Automatically orders Tailwind classes in your markup for consistency and readability.
- **ESLint**: Lints JavaScript and TypeScript code for code quality and consistency.
- **Stylelint**: Lints CSS (including SCSS) for style consistency.
- **HTMLHint**: Lints HTML files for best practices.
- **Vite Plugins**:
  - `@tailwindcss/vite`: Integrates Tailwind CSS with Vite.
  - `vite-plugin-eslint2`: Runs ESLint during Vite builds.
  - `vite-plugin-stylelint`: Runs Stylelint during Vite builds.

## Dependencies

- `vite`: Fast build tool and development server.
- `tailwindcss`: Utility-first CSS framework.
- `postcss`: CSS tool for transforming styles.
- `autoprefixer`: Adds vendor prefixes to CSS.
- `react` and `react-dom`: For building user interfaces.
- `@tailwindcss/vite`: Tailwind CSS integration for Vite.

### DevDependencies

- `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`: TypeScript support for ESLint.
- `eslint`: JavaScript/TypeScript linter.
- `htmlhint`: HTML linter.
- `prettier`: Code formatter.
- `prettier-plugin-tailwindcss`: Prettier plugin for sorting Tailwind classes.
- `stylelint` & `stylelint-config-standard-scss`: CSS/SCSS linter and standard config.
- `vite-plugin-eslint2`: ESLint integration for Vite.
- `vite-plugin-stylelint`: Stylelint integration for Vite.

## Documentation

- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [PostCSS Documentation](https://postcss.org/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Stylelint Documentation](https://stylelint.io/)
- [Prettier Documentation](https://prettier.io/)
- [HTMLHint Documentation](https://htmlhint.com/)

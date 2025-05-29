# vite-react-tailwind-lint

A robust and up-to-date starter for building [Tailwind CSS](https://tailwindcss.com/)-powered user interfaces in [React (v19)](https://react.dev/), leveraging the speed and simplicity of [Vite](https://vitejs.dev/).  
This setup streamlines development, linting, and formatting for Tailwind-based UIs, following best practices with a thoughtfully curated toolchain.

## Requirements

* [Node.js (v22+)](https://nodejs.org/en)
* [degit](https://github.com/Rich-Harris/degit)

## Getting Started

```bash
npx degit marcop135/vite-react-tailwind-lint my-app
cd my-app
npm install
npm run dev
```

## Scripts

* `dev`: Start the development server (`npm run dev`).
* `build`: Build the project for production (`npm run build`).
* `preview`: Preview the production build (`npm run preview`).

## Linting & Formatting

This project uses additional tools to enhance the development experience:

* **Prettier (with [Tailwind CSS plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss))**: Automatically orders Tailwind classes in your markup for consistency and readability.
* **HTMLHint**: Lints HTML files for best practices.
* **Stylelint**: Lints CSS (including SCSS) for style consistency.
* **ESLint**: Lints JavaScript and TypeScript code for code quality and consistency.

## Dependencies

* `vite`: Fast build tool and development server.
* `tailwindcss`: Utility-first CSS framework.
* `react` and `react-dom`: For building user interfaces..

## Documentation

* [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
* [Vite Documentation](https://vitejs.dev/guide/)
* [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
* [Prettier Documentation](https://prettier.io/)
* [HTMLHint Documentation](https://htmlhint.com/)
* [Stylelint Documentation](https://stylelint.io/)
* [ESLint Documentation](https://eslint.org/docs/latest/)

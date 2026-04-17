# 🚀 Vite + React + Tailwind CSS Starter

A modern, fast starter template using [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).
Includes built-in linting, formatting, and best practices for rapid development.

## 📦 Release Info

- Latest release: [`v1.4.3`](https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.3)
- Full release history: [GitHub Releases](https://github.com/marcop135/vite-react-tailwind-lint/releases)
- Detailed changes per version: [CHANGELOG.md](./CHANGELOG.md)
- Release operations and checklist: [RELEASE.md](./RELEASE.md)

## ✨ Features

- ⚡️ Instant dev server with Vite
- 🎨 Tailwind CSS with configuration
- ⚛️ React 19 with component-based architecture
- 🧼 HTMLHint, ESLint (with React plugins), Stylelint
- 🖌️ Prettier + Tailwind plugin
- 🧪 Vitest testing framework
- 🛡️ React Error Boundary
- ⚡️ Performance optimizations (React.memo, lazy loading)
- 🔍 Bundle analyzer for build optimization
- 🪝 Pre-commit hooks with Husky + lint-staged
- 🛠️ Ready-to-use scripts: `dev`, `build`, `preview`, `test`
- 📦 Minimal, production-ready config
- 🧩 Easily extendable toolchain

## 🧪 Project Structure

- `src/` – Source files
  - `components/` – React components
  - `test/` – Test setup and utilities
  - `main.jsx` – React entry point
  - `style.css` – Global styles
- `dist/` – Production build output (gitignored)
- `index.html` – Entry HTML file
- `vite.config.js` – Vite config
- `vitest.config.js` – Vitest config
- `tailwind.config.js` – Tailwind CSS config
- `eslint.config.js`, `.stylelintrc`, `.htmlhintrc` – Lint configs
- `prettier.config.mjs` – Formatting config
- `.lintstagedrc.js` – Lint-staged config
- `package.json` – Scripts & dependencies

---

## ⚙️ Requirements

- [Node.js](https://nodejs.org/en) (v18+)
- [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`)

## 🚀 Getting Started

```bash
npx degit marcop135/vite-react-tailwind-lint my-app
cd my-app
npm install
npm run dev
```

## 🧪 Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint JS, JSX, CSS, HTML files
npm run lint:fix     # Lint and auto-fix issues where possible
npm run format       # Format html, css, js, jsx, and MD files
npm test             # Run tests with Vitest
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
npm run analyze      # Build and analyze bundle size
```

Now edit the following files to start customizing:

- `index.html` – Main HTML file
- `src/main.jsx` – React entry point
- `src/components/` – React components

## 🧹 Linting & Formatting

Includes:

- `eslint` – Lint JavaScript/JSX (with React plugins)
- `stylelint` – Lint CSS
- `htmlhint` – Lint HTML
- `prettier` – Format code
- `husky` + `lint-staged` – Pre-commit hooks

### 📌 Run automatically:

```bash
npm run lint
npm run format
```

Pre-commit hooks will automatically run linting and formatting on staged files.

### 📌 Run manually:

Linting & Formatting Commands:

```bash
# Lint all JSX files in src/
npx eslint "src/**/*.{js,jsx}"

# Lint all CSS files in src/
npx stylelint "src/**/*.css"

# Lint all HTML files in the project
npx htmlhint "**/*.html"

# Check code formatting
npx prettier --check "src/**/*.{js,jsx,css,html,md}"
```

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for testing.

```bash
npm test              # Run tests once
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage
```

Test files should be placed alongside components or in a `__tests__` directory.

---

## 📚 Official Documentation

- [Tailwind CSS + Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind Config](https://tailwindcss.com/docs/configuration)
- [React](https://react.dev/)
- [Vitest](https://vitest.dev/)
- [HTMLHint](https://htmlhint.com/)
- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

---

## 🤝 Contributing

Contributions welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 👤 Author

[Marco Pontili](https://marcopontili.com)

## 📝 License

Licensed under the [MIT](./LICENSE) License.

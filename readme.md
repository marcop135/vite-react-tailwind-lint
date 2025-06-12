# 🚀 Vite + React + Tailwind CSS Starter

A modern, fast starter template using [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).
Includes built-in linting, formatting, and best practices for rapid development.

## ✨ Features

- ⚡️ Instant dev server with Vite
- 🎨 Tailwind CSS
- ⚛️ React
- 🧼 HTMLHint, ESLint, Stylelint
- 🖌️ Prettier + Tailwind plugin
- 🛠️ Ready-to-use scripts: `dev`, `build`, `preview`
- 📦 Minimal, production-ready config
- 🧩 Easily extendable toolchain

## 🧪 Project Structure

- `src/` – Source files (HTML, JS, SCSS, assets)
- `dist/` – Production build output
- `index.html` – Entry HTML file
- `vite.config.js` – Vite config
- `eslint.config.js`, `.stylelintrc`, `.htmlhintrc` – Lint configs
- `prettier.config.mjs` – Formatting config
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
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Lint JS, JSX, TS, TSX, CSS, SCSS, HTML, and MD files
npm run format    # Format html, css, js, jsx, jsx, ts, tsx, and MD files
```

Now edit the following files to start customizing:

- `index.html` – Main HTML file
- `src/main.jsx` – React entry point

## 🧹 Linting & Formatting

Includes:

- `eslint` – Lint JavaScript
- `stylelint` – Lint CSS/SCSS
- `htmlhint` – Lint HTML/JSX
- `prettier` – Format code

### 📌 Run automatically:

```bash
npm run lint
npm run format
```

### 📌 Run manually:

Linting & Formatting Commands:

```bash
# Lint all JSX files in src/
npx eslint "src/**/*.{js,jsx,ts,tsx}"

# Lint all CSS files in src/
npx stylelint "src/*.css"

# Lint all HTML files in the project (root, src/, dist/, etc.)
npx htmlhint "**/*.html"

# Check code formatting for all JS, JSX, TS, TSX, CSS, SCSS, HTML, and Markdown files in src/
npx prettier --check "src/**/*.{js,jsx,ts,tsx,css,scss,html,md}"
```

---

## 📚 Official Documentation

- [Tailwind CSS + Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind Config](https://tailwindcss.com/docs/configuration)
- [HTMLHint](https://htmlhint.com/)
- [Stylelint](https://stylelint.io/)
- [ESLint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/)

---

## 🤝 Contributing

Contributions welcome! Open issues or submit PRs.

## 👤 Author

[Marco Pontili](https://marcopontili.com)

## 📝 License

Licensed under the [MIT](./LICENSE) License.

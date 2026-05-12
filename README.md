<p align="center">
  <img src="public/og/hero.png" alt="vite-react-tailwind-lint hero" width="900" />
</p>

# Vite + React + Tailwind CSS Starter

[Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [Tailwind CSS v4](https://tailwindcss.com/), with lint/format/test/CI wired up so you can start building instead of configuring.

## Quick start

```bash
npx degit marcop135/vite-react-tailwind-lint my-app
cd my-app
npm install
npm run dev
```

## What's included

- Vite, `@vitejs/plugin-react`, Tailwind v4, Autoprefixer, bundle analyzer (`npm run analyze`)
- ESLint (react, react-hooks, react-refresh), Stylelint, HTMLHint, Prettier + Tailwind plugin
- Vitest + Testing Library, jsdom environment, coverage reporter
- Husky + lint-staged pre-commit
- GitHub Actions: CI, tag-driven release, biweekly patch release, Dependabot auto-merge

## Scripts

| Command                 | What it does                   |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Vite dev server                |
| `npm run build`         | Production build to `dist/`    |
| `npm run preview`       | Serve the production build     |
| `npm run lint`          | ESLint + Stylelint + HTMLHint  |
| `npm run lint:fix`      | Auto-fix what's fixable        |
| `npm run format`        | Prettier write                 |
| `npm run format:check`  | Prettier check                 |
| `npm run test`          | Vitest watch                   |
| `npm run test:ui`       | Vitest UI                      |
| `npm run test:coverage` | Vitest coverage                |
| `npm run analyze`       | Build + open `dist/stats.html` |
| `npm run release:check` | Same gates as CI               |
| `npm run clean`         | Remove `dist/` and `coverage/` |

## Project layout

```
src/        components, test setup, App.jsx, main.jsx, style.css
public/     copied as-is (favicons, OG image, webmanifest)
docs/og/    hero source + render scripts
scripts/    release helpers
```

Lint, format, test, build, and release config sit in the standard root files (`eslint.config.js`, `.stylelintrc`, `.htmlhintrc`, `prettier.config.mjs`, `postcss.config.js`, `vite.config.js`, `.github/workflows/`).

## Releases

Tag-driven: push `vX.Y.Z` and `release.yml` runs `release:check` and publishes the release with bullets from `CHANGELOG.md`. A biweekly workflow (`scheduled-patch-release.yml`) automates patch bumps. See [`CHANGELOG.md`](./CHANGELOG.md).

## Requirements

Node v22+ ([`.nvmrc`](./.nvmrc)) and [degit](https://github.com/Rich-Harris/degit) for scaffolding.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Issues and feature requests via [GitHub Issues](https://github.com/marcop135/vite-react-tailwind-lint/issues).

## License

[MIT](./LICENSE) © [Marco Pontili](https://marcopontili.com)

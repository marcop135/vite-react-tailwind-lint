<p align="center">
  <a href="https://vitereact.marcopontili.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/brand/readme-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/brand/readme.png" />
    <img src=".github/brand/readme.png" alt="Vite logo tile, the name Vite + React + Tailwind and the line React, Tailwind and Vite, already linted and tested, beside stacked Tailwind CSS, React and Vite planes" width="900" />
  </picture>
  </a>
</p>

# Vite + React + Tailwind CSS Starter

[![CI](https://github.com/marcop135/vite-react-tailwind-lint/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/marcop135/vite-react-tailwind-lint/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/marcop135/vite-react-tailwind-lint)](https://github.com/marcop135/vite-react-tailwind-lint/releases)
[![License: MIT](https://img.shields.io/github/license/marcop135/vite-react-tailwind-lint)](./LICENSE)

A [Vite](https://vitejs.dev/) starter for React + Tailwind CSS with linting, formatting, tests, and a tagged-release pipeline already wired up.

Use this when you want a small React app and you do not want to spend half a day configuring ESLint, Stylelint, HTMLHint, Prettier, Vitest, Testing Library, Husky, and a release workflow yourself.

**Website:** [vitereact.marcopontili.com](https://vitereact.marcopontili.com)

## Quick start

```bash
git clone https://github.com/marcop135/vite-react-tailwind-lint.git my-app
cd my-app && npm install
npm run dev
```

Dev server runs on `http://localhost:5173`.

## What's included

- **Build:** Vite, [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react), [Tailwind CSS v4](https://tailwindcss.com/) via [`@tailwindcss/vite`](https://tailwindcss.com/docs/installation/using-vite)
- **Quality:** [ESLint](https://eslint.org/) (with `eslint-plugin-react`, `react-hooks`, `react-refresh`), [Stylelint](https://stylelint.io/) + `stylelint-config-standard`, [HTMLHint](https://htmlhint.com/), [Prettier](https://prettier.io/) + `prettier-plugin-tailwindcss`
- **Tests:** [Vitest](https://vitest.dev/) with UI + coverage modes, `jsdom` environment, [Testing Library](https://testing-library.com/) for React
- **Vite plugins:** [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/), [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/), [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) (analyze)
- **Automation:** Husky + lint-staged pre-commit, GitHub Actions for CI, tag-driven releases, biweekly patch releases, auto-merge for Dependabot patch/minor and the biweekly in-range `npm update`

## Scripts

| Command                 | What it does                                              |
| ----------------------- | --------------------------------------------------------- |
| `npm run dev`           | Start Vite dev server                                     |
| `npm run build`         | Production build to `dist/`                               |
| `npm run preview`       | Serve the production build locally                        |
| `npm run lint`          | ESLint + Stylelint + HTMLHint                             |
| `npm run lint:fix`      | Same, auto-fixing what's fixable                          |
| `npm run format`        | Prettier write across `src/**`                            |
| `npm run format:check`  | Prettier check (no writes)                                |
| `npm run test`          | Vitest watch                                              |
| `npm run test:ci`       | Vitest single run                                         |
| `npm run test:ui`       | Vitest UI                                                 |
| `npm run test:coverage` | Vitest coverage report                                    |
| `npm run analyze`       | Build with bundle visualizer, opens `dist/stats.html`     |
| `npm run audit`         | `npm audit` across the full tree (dev included)           |
| `npm run audit:prod`    | `npm audit --omit=dev --audit-level=moderate`             |
| `npm run audit:fix`     | `npm audit fix`                                           |
| `npm run release:check` | Same gates as CI: lint, format, test, build, `audit:prod` |
| `npm run clean`         | Remove `dist/` and `coverage/`                            |

## Project layout

```
src/
  components/   React components (App scaffolding, Error Boundary, lazy route)
  test/         setup.js (testing-library jest-dom)
  App.jsx       root component
  main.jsx      entry, mounts <App />
  style.css     Tailwind directives
public/         copied as-is to dist/ (favicons, OG image, .htaccess, privacy and 404 pages, matomo.js)
.github/brand/  README, OG and social images (SVG sources, render script, fonts)
scripts/        release helpers and stack-versions.mjs (lockfile versions for the landing page)
index.html      Vite entry, references src/main.jsx
vite.config.js  build + test config + bundle analyzer toggle
```

## Configuration

| File                                | Purpose                               |
| ----------------------------------- | ------------------------------------- |
| `eslint.config.js`                  | ESLint flat config with React plugins |
| `.stylelintrc` + `.stylelintignore` | Stylelint                             |
| `.htmlhintrc`                       | HTMLHint                              |
| `prettier.config.mjs`               | Prettier + Tailwind plugin            |
| `vitest.config.js`                  | Vitest                                |
| `.editorconfig` + `.nvmrc`          | Editor + Node version pinning         |
| `.lintstagedrc.js`                  | lint-staged pre-commit config         |

Production builds set `build.sourcemap: 'hidden'`: maps are produced for crash-reporting tooling but never referenced from the built JS. `vite build --mode development` (or `--mode analyze`) emits full referenced sourcemaps for local debugging. `dist/` and `coverage/` are build output, untracked, and not published.

## Deployment

Pushes to `main` run `deploy.yml`: test, build, mirror `dist/` to Netsons over SFTP or FTPS, purge Cloudflare. `public/.htaccess` sets the SPA fallback, security headers and CSP. Analytics is cookieless self-hosted Matomo (`public/matomo.js`); drop that file and its `<script>` tag when you use the starter.

## Releases

Changes land on `develop`; a `chore(release): vX.Y.Z` commit is tagged and merged up to `main`, and `release.yml` publishes the GitHub Release from [`CHANGELOG.md`](./CHANGELOG.md). Scheduled workflows open an in-range `npm update` PR on the 1st and 15th and cut a patch release on the 3rd and 17th; only major bumps need a human. `release:check` gates on production dependencies only; the full-tree `npm audit` in CI is advisory.

## Requirements

- [Node.js](https://nodejs.org/en) v22.22.2+ (the 22 line is pinned in `.nvmrc`, run `nvm use`); Vite 8 sets that floor

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Bug reports and feature requests go through [issues](https://github.com/marcop135/vite-react-tailwind-lint/issues). Vulnerabilities go through [SECURITY.md](./SECURITY.md) instead, and participation is covered by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Author

[Marco Pontili](https://marcopontili.com)

## License

[MIT](./LICENSE)

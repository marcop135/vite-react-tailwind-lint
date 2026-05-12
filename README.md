<p align="center">
  <img src="public/og/hero.png" alt="vite-react-tailwind-lint hero" width="900" />
</p>

# Vite + React + Tailwind CSS Starter

A [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + [Tailwind CSS v4](https://tailwindcss.com/) starter with linting, formatting, Vitest + Testing Library, pre-commit hooks, a bundle analyzer, and a tagged-release pipeline already wired up.

Use this when you want a small React app and you do not want to spend half a day configuring ESLint, Stylelint, HTMLHint, Prettier, Vitest, Husky, and a release workflow yourself.

## Quick start

```bash
npx degit marcop135/vite-react-tailwind-lint my-app
cd my-app
npm install
npm run dev
```

## What's included

- **Build:** Vite, `@vitejs/plugin-react`, Tailwind CSS v4 via `@tailwindcss/vite`, Autoprefixer, [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) wired to `npm run analyze`
- **Quality:** [ESLint](https://eslint.org/) (with `eslint-plugin-react`, `react-hooks`, `react-refresh`), [Stylelint](https://stylelint.io/) + `stylelint-config-standard-scss`, [HTMLHint](https://htmlhint.com/), [Prettier](https://prettier.io/) + `prettier-plugin-tailwindcss`
- **Tests:** [Vitest](https://vitest.dev/) with UI and coverage modes, `jsdom` environment, [Testing Library](https://testing-library.com/) for React
- **Vite plugins:** [`vite-plugin-eslint2`](https://vite-plugin-eslint2.modyqyw.top/), [`vite-plugin-stylelint`](https://vite-plugin-stylelint.modyqyw.top/)
- **Automation:** Husky + lint-staged pre-commit, GitHub Actions for CI, tag-driven releases, biweekly patch releases, Dependabot auto-merge for patch/minor
- **App scaffolding:** React Error Boundary, lazy-loaded route example, `React.memo` examples in components

## Scripts

| Command                 | What it does                                          |
| ----------------------- | ----------------------------------------------------- |
| `npm run dev`           | Start Vite dev server                                 |
| `npm run build`         | Production build to `dist/`                           |
| `npm run preview`       | Serve the production build locally                    |
| `npm run lint`          | ESLint + Stylelint + HTMLHint                         |
| `npm run lint:fix`      | Same, auto-fixing what's fixable                      |
| `npm run format`        | Prettier write across `src/**`                        |
| `npm run format:check`  | Prettier check (no writes)                            |
| `npm run test`          | Vitest watch                                          |
| `npm run test:ui`       | Vitest UI                                             |
| `npm run test:coverage` | Vitest coverage report                                |
| `npm run analyze`       | Build with bundle visualizer, opens `dist/stats.html` |
| `npm run release:check` | Same gates as CI: lint, test, build, audit (moderate) |
| `npm run clean`         | Remove `dist/` and `coverage/`                        |

## Project layout

```
src/
  components/   React components
  test/         setup.js (testing-library jest-dom)
  App.jsx       root component
  main.jsx      entry, mounts <App />
  style.css     Tailwind directives
public/         copied as-is to dist/ (favicons, OG image, site.webmanifest)
docs/og/        hero source (SVG, render scripts, GitHub social preview PNG)
scripts/        release helpers (bump-patch-maintenance, release-notes-from-changelog)
index.html      Vite entry, references src/main.jsx
vite.config.js  build + test config, bundle analyzer toggle
```

## Configuration

| File                                | Purpose                               |
| ----------------------------------- | ------------------------------------- |
| `eslint.config.js`                  | ESLint flat config with React plugins |
| `.stylelintrc` + `.stylelintignore` | Stylelint                             |
| `.htmlhintrc`                       | HTMLHint                              |
| `prettier.config.mjs`               | Prettier + Tailwind plugin            |
| `postcss.config.js`                 | PostCSS (Autoprefixer)                |
| `.browserslistrc`                   | Targets for Autoprefixer              |
| `.editorconfig` + `.nvmrc`          | Editor + Node version pinning         |
| `.lintstagedrc.js`                  | lint-staged pre-commit config         |

Production builds emit hidden source maps (`build.sourcemap: 'hidden'`): maps are produced for crash-reporting tooling but never referenced from the built JS. Non-production builds (`vite build --mode development` or `--mode analyze`) emit full referenced sourcemaps for local debugging.

## Releases

Changes land on the working branch, a `chore(release): vX.Y.Z` commit bumps `package.json` and prepends `CHANGELOG.md`, then the commit is tagged `vX.Y.Z` and pushed. The `release.yml` workflow runs `release:check` against the tag and publishes a GitHub Release whose body is built from `CHANGELOG.md` by `scripts/release-notes-from-changelog.mjs`.

A scheduled workflow (`scheduled-patch-release.yml`) runs the bump, PR, merge, and tag flow biweekly. See [`CHANGELOG.md`](./CHANGELOG.md) for history.

## Requirements

- [Node.js](https://nodejs.org/en) v22+ (pinned in `.nvmrc`, run `nvm use`)
- [degit](https://github.com/Rich-Harris/degit) (`npm install -g degit`), only to scaffold

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Bug reports and feature requests go through [issues](https://github.com/marcop135/vite-react-tailwind-lint/issues).

## Author

[Marco Pontili](https://marcopontili.com)

## License

[MIT](./LICENSE)

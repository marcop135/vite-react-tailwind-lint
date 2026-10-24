# Project

## Scripts

| Command                 | What it does                                         |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Dev server on `http://localhost:5173`                |
| `npm run build`         | Production build to `dist/`                          |
| `npm run preview`       | Serve the production build                           |
| `npm run lint`          | ESLint + Stylelint + HTMLHint                        |
| `npm run lint:fix`      | Same, fixing what can be fixed                       |
| `npm run format`        | Prettier write                                       |
| `npm run format:check`  | Prettier check, no writes                            |
| `npm run test`          | Vitest watch                                         |
| `npm run test:ci`       | Vitest single run                                    |
| `npm run test:coverage` | Coverage report in `coverage/`                       |
| `npm run analyze`       | Build with the bundle visualizer (`dist/stats.html`) |
| `npm run release:check` | Lint, format check, tests, build and prod audit      |
| `npm run audit:prod`    | `npm audit --omit=dev --audit-level=moderate`        |
| `npm run clean`         | Remove `dist/` and `coverage/`                       |

## Layout

```
src/
  components/   React components
  hooks/        custom hooks
  test/         Vitest setup (jest-dom)
  App.jsx       root component, App.test.jsx next to it
  main.jsx      entry
  style.css     Tailwind, fonts and design tokens
public/         copied as-is to dist/
scripts/        build and release helpers
docs/           these docs
index.html      Vite entry, meta tags
vite.config.js  build config
```

## Configuration

| File                  | Purpose                                               |
| --------------------- | ----------------------------------------------------- |
| `vite.config.js`      | Plugins, `@/` alias, vendor chunk, minify, sourcemaps |
| `vitest.config.js`    | Vitest, jsdom, setup file                             |
| `eslint.config.js`    | ESLint flat config                                    |
| `.stylelintrc`        | Stylelint                                             |
| `.htmlhintrc`         | HTMLHint                                              |
| `prettier.config.mjs` | Prettier + Tailwind plugin                            |
| `.lintstagedrc.js`    | Pre-commit checks                                     |
| `jsconfig.json`       | `@/` alias for editors                                |
| `.env.example`        | Copy to `.env.local`, `VITE_*` vars                   |
| `.nvmrc`              | Node version                                          |

## Build output

`vite.config.js` puts all of `node_modules` in one `vendor` chunk, so a deploy that changes only app code leaves the cached React bundle valid. Production builds strip `console` and `debugger` and emit hidden sourcemaps. Sections below the fold load with `React.lazy`.

## Browser support

Vite's default build target: Chrome and Edge 111, Firefox 114, Safari 16.4. Tailwind CSS v4 raises Firefox to 128. Change `build.target` in `vite.config.js` to go lower; Tailwind v4 itself does not support older browsers.

## Accessibility

- A "Skip to main content" link is the first focusable element, targeting `#main-content` on `<main>`.
- Landmarks have names: `<nav aria-label="Primary">`, and sections are labelled by their headings with `aria-labelledby`.
- Interactive elements show a `focus-visible` outline (`focus-ring` utility); buttons declare `type="button"`.
- Text colours meet WCAG AA on their backgrounds in light and dark.
- `prefers-reduced-motion` turns off transitions and smooth scrolling.

## SEO

- `index.html` has a canonical URL, robots, Open Graph and Twitter Card tags with image alt text, and a JSON-LD `@graph` (`WebSite`, `SoftwareSourceCode`, `Person`).
- `public/` has `robots.txt`, `sitemap.xml`, `llms.txt` and `.well-known/security.txt`.
- Paths other than `/` render `NotFound` with `noindex`.

Replace the URLs and names with yours; see [Getting started](./getting-started.md#rename-the-project).

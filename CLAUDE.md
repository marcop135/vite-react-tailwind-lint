# CLAUDE.md

Guidance for working in this repository.

## Project

`vite-react-tailwind-lint` is a single-page React starter template. Stack: Vite 7, React 19, Tailwind CSS v4, with ESLint, Stylelint, HTMLHint, Prettier, and Vitest wired in. Deployed to Netlify (`https://vite-react-tailwind-lint.netlify.app/`). Node 22 (`.nvmrc`).

## Commands

- `npm run dev` — Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the production build (default port 4173).
- `npm run lint` / `npm run lint:fix` — ESLint (JS/JSX) + Stylelint (CSS) + HTMLHint (`index.html`).
- `npm run format` / `npm run format:check` — Prettier (class ordering via `prettier-plugin-tailwindcss`).
- `npm run test` / `npm run test:ci` — Vitest (jsdom).
- `npm run analyze` — build with `rollup-plugin-visualizer`, writes `dist/stats.html`.
- `npm run release:check` — lint + format check + tests + build + `npm audit`.

## Architecture

- Entry: `index.html` mounts `#app`; `src/main.jsx` renders `<App>` (no `StrictMode` wrapper).
- `src/App.jsx` composes `ErrorBoundary > Header > Navigation > WelcomeSection > MainContent > Footer`.
- `src/components/MainContent.jsx` lazy-loads `Sidebar` and `ContentArea` via `React.lazy` + `Suspense`.
- Styling is Tailwind utility classes inline in JSX. `src/style.css` is just `@import 'tailwindcss';` plus a `prefers-reduced-motion` reset.
- Dark mode is driven by `prefers-color-scheme` (Tailwind `dark:` variants); there is no manual toggle.
- JSX uses the automatic runtime (`@vitejs/plugin-react`); `react/react-in-jsx-scope` is off, so do not add `import React` solely to render JSX. Components that use `React.memo` / `React.lazy` / `React.Component` still import React.

## Conventions

- Functional components wrapped in `React.memo`; `ErrorBoundary` is the one class component.
- Keep comments minimal (explain WHY, not WHAT). Do not use em-dash characters.
- Run `npm run format` before committing; the pre-commit hook (`husky` + `lint-staged`) enforces lint/format on staged files.

## Build and performance

- `vite.config.js` splits all `node_modules` into a single long-lived `vendor` chunk via `build.rollupOptions.output.manualChunks`. App code lands in a small `index` chunk so deploys do not bust the React/ReactDOM cache on repeat visits.
- Production builds strip `console`/`debugger` via `esbuild.drop`. The dev-only `console.error` in `ErrorBoundary` is guarded by `import.meta.env.DEV` and is eliminated before that.
- Production sourcemaps are `hidden`; dev and `analyze` builds emit referenced sourcemaps.

## Accessibility

- A "Skip to main content" link is the first focusable element (`Header.jsx`), targeting `#main-content` on `<main>` (`MainContent.jsx`, `tabIndex={-1}`).
- Landmarks have accessible names: `<nav aria-label="Primary">`, `<aside aria-label="Sidebar">`, headingless `<section aria-label="Content">`.
- Interactive elements expose `focus-visible` outlines; buttons declare `type="button"`.
- Hover colors use the darker `*-700` shades for AA contrast over the light theme. `prefers-reduced-motion` neutralizes transitions in `src/style.css`.

## SEO

- `index.html` carries canonical, robots, Open Graph (incl. `og:image:alt`, `og:site_name`, `og:locale`), Twitter Card tags, and a `SoftwareApplication` JSON-LD block. JSON-LD is `application/ld+json` (a data block), so it is unaffected by the Netlify `script-src 'self'` CSP.
- `public/robots.txt` and `public/sitemap.xml` exist; update `sitemap.xml` `<lastmod>` when content changes meaningfully.

## Deployment

- Netlify builds with `npm run build`, publishes `dist/`, SPA-redirects `/*` to `/index.html`, and sets security headers (CSP, HSTS, X-Frame-Options, etc.) in `netlify.toml`. New inline scripts would violate the CSP `script-src 'self'`.

## Audit workflow

The `/audit-optimize` skill (`.claude/skills/audit-optimize/`) runs this repo's full performance/a11y/SEO/code-quality audit: baseline screenshots, parallel fix agents, verification, and before/after visual comparison across breakpoints.

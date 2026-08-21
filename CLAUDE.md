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
- `npm run release:check`: lint + format check + tests + build + `npm run audit:prod`.
- `npm run audit:prod`: `npm audit --omit=dev --audit-level=moderate`, the only audit that gates CI. Full-tree `npm audit` runs in CI as a non-blocking advisory step.

## Architecture

- Entry: `index.html` mounts `#app`; `src/main.jsx` renders `<App>` (no `StrictMode` wrapper).
- `src/App.jsx` composes `ErrorBoundary > Header > Hero > MainContent > Footer`.
- `src/components/MainContent.jsx` lazy-loads `FeatureGrid` and `ScriptsTable` via `React.lazy` + `Suspense`.
- The page is the starter's own pitch, kept deliberately short: `Hero` carries the `npx degit` command and the copy button (the only stateful component), `FeatureGrid` renders `#stack` as three cards, `ScriptsTable` renders `#scripts` as five rows. There is no in-page nav.
- The copy button degrades in three steps: Clipboard API, then `execCommand` over a selection, then leaving the command selected with a `press Ctrl+C` hint. Outcome is announced in a `role="status"` line whose height is reserved so it cannot shift the layout. All three paths are covered in `src/App.test.jsx`. Page copy is derived from `README.md`; keep the two in sync, and keep additions out unless they earn their space.
- The page carries no library version numbers: `package.json` is the single source of truth, so a dep bump can never make the page stale. The one version claim is `Node 22+`, a real compatibility floor that matches `.nvmrc`.
- Styling is Tailwind utility classes inline in JSX. `src/style.css` adds only a `prefers-reduced-motion` reset and two `@utility` definitions for the treatments repeated across components: `surface` (white/`slate-900` card with its border and shadow) and `text-link`. Add a utility only when a treatment appears in three or more places.
- Shared strings (repo, license, author URLs, the `npx degit` command) live in `src/constants.js`. Import them instead of retyping a URL.
- The look is taken from `public/og/hero.png`: a `sky-600 → sky-800` vertical gradient, white type, white content cards with `sky-700` accents. Content is capped at `max-w-[1000px]`. Dark mode follows `prefers-color-scheme` with no toggle: the same hue taken down to `sky-950 → slate-950`, cards on `slate-900` with `sky-400` accents, and the copy button on `sky-400` with `slate-950` text rather than white, which glared against the navy. Every white surface carries a `sky-300` border (`sky-900` in dark, kept subtle against the navy) so its edge reads against the gradient. Keep white body copy off anything lighter than `sky-600`, which is where it stops meeting AA.
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
- Landmarks have accessible names: `<nav aria-label="Primary">`; content sections are named by their own headings via `aria-labelledby`.
- Interactive elements expose `focus-visible` outlines; buttons declare `type="button"`.
- White text sits on `sky-600` or darker; card copy is `slate-800` on white, `slate-100` on `slate-900`. `prefers-reduced-motion` neutralizes transitions in `src/style.css`.

## SEO

- `index.html` carries canonical, robots, Open Graph (incl. `og:image:alt`, `og:site_name`, `og:locale`), Twitter Card tags, and a `SoftwareApplication` JSON-LD block. JSON-LD is `application/ld+json` (a data block), so it is unaffected by the Netlify `script-src 'self'` CSP.
- `public/robots.txt` and `public/sitemap.xml` exist; update `sitemap.xml` `<lastmod>` when content changes meaningfully.

## Deployment

- Netlify builds with `npm run build`, publishes `dist/`, SPA-redirects `/*` to `/index.html`, and sets security headers (CSP, HSTS, X-Frame-Options, etc.) in `netlify.toml`. New inline scripts would violate the CSP `script-src 'self'`.

## Audit workflow

The `/audit-optimize` skill (`.claude/skills/audit-optimize/`) runs this repo's full performance/a11y/SEO/code-quality audit: baseline screenshots, parallel fix agents, verification, and before/after visual comparison across breakpoints.

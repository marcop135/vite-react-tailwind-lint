# CLAUDE.md

Guidance for working in this repository.

## Project

`vite-react-tailwind-lint` is a single-page React starter template. Stack: Vite 8, React 19, Tailwind CSS v4, with ESLint, Stylelint, HTMLHint, Prettier, and Vitest wired in. Deployed to Netsons at `https://vitereact.marcopontili.com/`; the old Netlify host redirects there. Node 22 (`.nvmrc`); Vite 8 sets the real floor at 22.22.2.

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
- `src/App.jsx` composes `ErrorBoundary > Header > MainContent > Footer`; any path other than `/` renders `NotFound` (adds `noindex`).
- `src/components/MainContent.jsx` renders `Hero` and lazy-loads `Stack`, `Pipeline` and `ScriptsTable` via `React.lazy` + `Suspense`.
- The page is the starter's own pitch: `Hero` carries the value line, `Quickstart` (the `git clone` / `npm install` / `npm run dev` lines with per-line and copy-all buttons) and `StackIllustration`; `Stack` renders `#stack`, `Pipeline` renders `#pipeline` as a full-bleed dark band, `ScriptsTable` renders `#scripts`. The header nav links to the three anchors.
- Copying lives in `src/hooks/useCopy.js` and degrades in three steps: Clipboard API, then `execCommand` over a selection, then leaving the command selected with a `press Ctrl+C` hint. Outcome is announced in a `role="status"` line whose height is reserved so it cannot shift the layout. All three paths are covered in `src/App.test.jsx`. Page copy is derived from `README.md`; keep the two in sync, and keep additions out unless they earn their space.
- Version numbers are never typed into JSX: `scripts/stack-versions.mjs` reads them from `package-lock.json` (and `.nvmrc`), and `vite.config.js` / `vitest.config.js` inject them as `__STACK_VERSIONS__`, exposed as `VERSIONS` in `src/constants.js`. A dependency bump updates the page on the next build.
- Styling is Tailwind utility classes inline in JSX. `src/style.css` holds the self-hosted fonts (Catamaran display, Cabin body, Roboto Mono; OFL texts in `src/assets/fonts/`), the semantic colour tokens, the `prefers-reduced-motion` reset and four `@utility` definitions: `surface`, `text-link`, `focus-ring`, `iso-plane`.
- Shared strings (site, repo, license, author and privacy URLs, the quick start lines) live in `src/constants.js`. Import them instead of retyping a URL.
- The look is a refined neutral base with Vite purple and yellow and React cyan as accents. Tokens are CSS custom properties (`--canvas`, `--surface`, `--ink`, `--muted`, `--line`, `--vite`, `--react`, `--bolt`, `--term*`) mapped into Tailwind with `@theme inline`; dark mode swaps the values under `prefers-color-scheme`, so components need no `dark:` variants for colour. Accent text uses `text-vite` / `text-react`, tuned for AA in both themes; the raw brand hexes are for fills and decoration only.
- JSX uses the automatic runtime (`@vitejs/plugin-react`); `react/react-in-jsx-scope` is off, so do not add `import React` solely to render JSX. Components that use `React.memo` / `React.lazy` / `React.Component` still import React.

## Conventions

- Functional components wrapped in `React.memo`; `ErrorBoundary` is the one class component.
- Keep comments minimal (explain WHY, not WHAT). Do not use em-dash characters.
- Run `npm run format` before committing; the pre-commit hook (`husky` + `lint-staged`) enforces lint/format on staged files.

## Build and performance

- `vite.config.js` splits all `node_modules` into a single long-lived `vendor` chunk via `build.rolldownOptions.output.codeSplitting`. App code lands in a small `index` chunk so deploys do not bust the React/ReactDOM cache on repeat visits. Vite 8 deprecates `rollupOptions` and `manualChunks`; do not reintroduce either.
- Production builds strip `console`/`debugger` via `build.rolldownOptions.output.minify.compress`. Vite 8 runs Rolldown, which ignores the old `esbuild.drop` and warns when it is set. Unlike `esbuild.drop`, the minifier reaches `vendor` too, so React's `reportError` console fallback goes with it. The dev-only `console.error` in `ErrorBoundary` is guarded by `import.meta.env.DEV` and is eliminated before that.
- Production sourcemaps are `hidden`; dev and `analyze` builds emit referenced sourcemaps.

## Accessibility

- A "Skip to main content" link is the first focusable element (`Header.jsx`), targeting `#main-content` on `<main>` (`MainContent.jsx`, `tabIndex={-1}`).
- Landmarks have accessible names: `<nav aria-label="Primary">`; content sections are named by their own headings via `aria-labelledby`.
- Interactive elements expose `focus-visible` outlines; buttons declare `type="button"`.
- Body copy is `--ink` or `--muted` on `--canvas` / `--surface`, AA in light and dark. `prefers-reduced-motion` neutralizes transitions and smooth scrolling in `src/style.css`.

## SEO

- `index.html` carries canonical, robots, Open Graph (incl. `og:image:alt`, `og:site_name`, `og:locale`), Twitter Card tags, and a JSON-LD `@graph` (`WebSite`, `SoftwareSourceCode`, `Person`). JSON-LD is a data block, so the CSP does not apply to it.
- `public/` carries `robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/security.txt`, `privacy.html` and `404.html` (both styled by `public/static.css`). Update `sitemap.xml` `<lastmod>` when content changes meaningfully.

## Deployment

- `.github/workflows/deploy.yml` builds on push to `main` and mirrors `dist/` to the Netsons FTP root (SFTP with a pinned key, else FTPS), then purges Cloudflare for `vitereact.marcopontili.com`.
- `public/.htaccess` (copied into `dist/`) forces HTTPS, falls back extensionless paths to `index.html`, serves `404.html` for missing files, sets HSTS, nosniff, frame and referrer headers, and the CSP: `'self'` plus `self-hosted Matomo` for Matomo. New inline scripts would violate `script-src`.
- Matomo is `public/matomo.js`, an external file loaded from `index.html` and `privacy.html`: cookieless, Do Not Track honoured.

## Audit contract

Read by the user-level `site-audit` skill (performance, a11y, SEO, code quality).

- Server: `npm run build`, then `npm run preview > .audit/preview.log 2>&1 &`. Read the port from the log (4173, or 4174+ when taken); stop the preview by its PID before the next one.
- Screenshots: `node scripts/audit-screenshots.mjs http://localhost:<port>/ .audit/<label>` writes `<bp>-<theme>.png` for desktop, tablet, mobile in light and dark. `.audit/` is gitignored. At-rest output must be identical; a11y additions show only on focus or hover, so Tab once and capture to see the skip link.
- Checks: `npm run lint`, `npm run test:ci`, `npm run format:check` (`npm run format` fixes Tailwind class order), `npm run build`.

| Lane                | Owns                                                              | Goals                                                                                                                                                             |
| ------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Performance / build | `vite.config.js`                                                  | `manualChunks(id)` function for a `vendor` chunk (the object form leaves react-dom internals in the app chunk); `esbuild.drop` console and debugger in production |
| Accessibility       | `src/components/*.jsx`, `src/style.css`                           | Skip link to `#main-content`, landmark names, `focus-visible`, `type="button"`, AA hover colors, reduced motion                                                   |
| SEO / metadata      | `index.html`, `public/robots.txt`, `public/sitemap.xml`           | Only missing tags: canonical, robots, OG and Twitter alt text, `SoftwareApplication` JSON-LD                                                                      |
| Code quality        | `src/App.jsx`, `src/main.jsx`, `eslint.config.js`, `.stylelintrc` | Unused code; conservative config changes                                                                                                                          |

Pitfalls: the CSP is `script-src 'self' self-hosted Matomo`, so no executable inline scripts (JSON-LD is fine). Keep the existing Vite plugins, sourcemap logic, `server.watch`, and `test` config. Components use `React.memo` and `lazy`, so keep their React imports.

# Changelog

- **Format:** Based on [Keep a Changelog](https://keepachangelog.com).
- **Voice:** Use the imperative, like a commit message. Write add, fix, increase, force, not added, fixed, increased, forced.
- **Length:** Keep each bullet on one line, max 120 characters (link URLs do not count toward the cap, only the visible text does).
- **Links:** Add inline markdown links for related PRs, docs, and external references when they help the reader.

## [1.10.1] - 2026-10-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.10.0] - 2026-10-01

### Added

- Add [`.github/brand/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/) with SVG sources and `npm run brand:images` / `brand:images:check`.

### Changed

- Redraw the README, OG and social images in Catamaran, Cabin and Roboto Mono on the sky ramp.
- Point the README hero at [`.github/brand/readme.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/readme.png); add `og:image:type` to `index.html`.
- Add `playwright` and `sharp` as dev dependencies for the image render.

### Removed

- Delete `docs/og/`; the GitHub social preview is now [`.github/brand/social.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/social.png).

## [1.9.3] - 2026-09-25

### Changed

- Add a Contributor Covenant 2.1 code of conduct, linked from the README contributing section.
- Add CI, release, and license badges under the README title.
- Add [`.gitattributes`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.gitattributes) to normalize line endings to LF and mark binary assets.

## [1.9.2] - 2026-09-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.9.1] - 2026-09-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.9.0] - 2026-08-28

### Changed

- Migrate to Vite 8 on Rolldown with `@vitejs/plugin-react` 6 ([#168](https://github.com/marcop135/vite-react-tailwind-lint/pull/168)).
- Move the build to `rolldownOptions`; Vite 8 deprecates `rollupOptions` and `output.manualChunks`.
- Strip `console`/`debugger` through `output.minify.compress`; Rolldown ignores `esbuild.drop`.
- Rebuild the `vendor` chunk via `output.codeSplitting.groups`, holding it at 189 kB.
- Bump `jsdom` 30, `jest-dom` 7, `lint-staged` 17, `globals` 17, and `rollup-plugin-visualizer` 7.
- Bump `actions/checkout` 7.0.1, `actions/setup-node` 7.0.0, and `softprops/action-gh-release` 3.0.2.
- Auto-merge the biweekly `npm update` PR, so in-range bumps land unattended ([#167](https://github.com/marcop135/vite-react-tailwind-lint/pull/167)).
- Record the Vite 8 stack, the Node 22.22.2 floor it sets, and the auto-merged in-range dependency PR.

## [1.8.0] - 2026-08-21

### Added

- Replace the placeholder app shell with the starter's own pitch: hero, stack cards, and a scripts table.
- Add a copy button for the `npx degit` command, degrading to `execCommand` and then to select-to-copy.

### Changed

- Take the palette from [`public/og/hero.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/og/hero.png): `sky-600` to `sky-800` gradient, white cards, navy dark ramp.
- Cap the measure at 1000px; drop the in-page nav and both `min-h-lvh` placeholder panels.
- Rename the placeholder components to `Hero`, `FeatureGrid`, and `ScriptsTable`; drop `Navigation`.
- Move the repo, license, author, and scaffold-command strings into [`src/constants.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/constants.js).
- Grow `App.test.jsx` to five role-based tests, covering the clipboard path and the selection fallback.
- Define `surface` and `text-link` as `@utility` rules; both treatments repeat across three components.
- Rewrite the description, `og:title`, manifest, and JSON-LD around what the starter actually ships.

## [1.7.8] - 2026-08-18

### Changed

- Swap `stylelint-config-standard-scss` for `stylelint-config-standard`; the project has no Sass files.
- Untrack [`dist/vite.svg`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/dist/vite.svg) and delete `.browserslistrc`, whose only consumer was Autoprefixer.

### Removed

- Drop the unused `autoprefixer`, `postcss`, and `esbuild` dev deps; no PostCSS config, and Vite ships it.
- Delete `docs/og/render.mjs` and `docs/og/favicons.mjs`; both load Playwright from an unrelated repo.
- Remove the dead `test` block from [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js); [`vitest.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vitest.config.js) takes precedence for Vitest runs.

### Fixed

- Move `react` and `react-dom` to `dependencies`; as dev deps they left the `audit:prod` gate scanning nothing.

## [1.7.7] - 2026-08-18

### Changed

- Bump `@types/react` 19.2.18 ([#147](https://github.com/marcop135/vite-react-tailwind-lint/pull/147)), `postcss` 8.5.26 ([#154](https://github.com/marcop135/vite-react-tailwind-lint/pull/154)), `eslint-plugin-react-refresh` 0.5.4 ([#155](https://github.com/marcop135/vite-react-tailwind-lint/pull/155)).

### Fixed

- Run `npm ci` before `npm update` in the scheduled workflow; updating a bare checkout crashed npm's arborist.

## [1.7.6] - 2026-08-18

### Changed

- Scope the `release:check` audit gate to production deps; keep full-tree `npm audit` as a non-blocking step.
- Add an `audit:prod` script and drop the `brace-expansion`/`minimatch` overrides pinned at vulnerable versions.
- Open scheduled `npm update` PRs with `RELEASE_PAT` so `ci.yml` fires and the required check can report.
- Fill in [`AGENTS.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/AGENTS.md) and document the audit gate and release flow in [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md), [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md), [`CLAUDE.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CLAUDE.md).

### Fixed

- Merge `develop` into `main` in the release sync step so a diverged `main` cannot wedge the release job.

### Security

- Clear five high advisories via `npm audit fix`: `brace-expansion`, `fast-uri`, `js-yaml`, `nanoid`, `undici`.

## [1.7.5] - 2026-08-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.7.4] - 2026-07-28

### Changed

- Bump `react` and `react-dom` to 19.2.8, `stylelint` to 17.14.1, and `vite` to 7.3.6 ([#133](https://github.com/marcop135/vite-react-tailwind-lint/pull/133)).

### Security

- Bump `postcss` to 8.5.24, `esbuild` to 0.28.1, and transitive `fast-uri`/`js-yaml` via `npm audit fix`; add npm overrides for `brace-expansion`/`minimatch`; audit now clean at moderate ([#133](https://github.com/marcop135/vite-react-tailwind-lint/pull/133)).

## [1.7.3] - 2026-07-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.7.2] - 2026-07-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.7.1] - 2026-06-23

### Changed

- Bump `tailwindcss` and `@tailwindcss/vite` to 4.3.1; `vitest` and `@vitest/coverage-v8` to 4.1.9.
- Bump `@types/react` to 19.2.17 and `eslint-plugin-react-refresh` to 0.5.3.

### Security

- Bump `vite` to 7.3.5, `undici` to 7.28.0, and `js-yaml` via `npm audit fix`; audit now clean at moderate.

## [1.7.0] - 2026-06-04

### Added

- Add canonical/robots/OG meta + `SoftwareApplication` JSON-LD, [`public/robots.txt`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/robots.txt), and [`public/sitemap.xml`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/sitemap.xml) ([#70](https://github.com/marcop135/vite-react-tailwind-lint/pull/70)).

### Changed

- Split deps into a long-lived `vendor` chunk and drop `console`/`debugger` in production builds ([#70](https://github.com/marcop135/vite-react-tailwind-lint/pull/70)).
- Add skip-to-main link, named landmarks, `focus-visible` rings, AA hover contrast, reduced-motion reset ([#70](https://github.com/marcop135/vite-react-tailwind-lint/pull/70)).

### Removed

- Drop unused `React` import in `App.jsx`; add [`CLAUDE.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CLAUDE.md); ignore throwaway [`.audit/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.audit/) artifacts ([#70](https://github.com/marcop135/vite-react-tailwind-lint/pull/70)).

## [1.6.14] - 2026-06-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.6.13] - 2026-06-03

### Changed

- Add a Keep a Changelog header documenting Format, Voice, Length, Links, and Label conventions.
- Rewrite generic maintenance entries (1.6.12, 1.6.11, 1.6.2, 1.4.5) with their shipped changes and PR links.

## [1.6.12] - 2026-06-02

### Fixed

- Bump [`.nvmrc`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.nvmrc) to Node 22 so Netlify cloud builds match the toolchain; stale 18 broke prod builds ([#66](https://github.com/marcop135/vite-react-tailwind-lint/pull/66)).

## [1.6.11] - 2026-06-02

### Removed

- Remove orphaned `tailwind.config.js`; dead under Tailwind v4 CSS-first (`@import`, no `@config`) ([#64](https://github.com/marcop135/vite-react-tailwind-lint/pull/64)).

### Security

- Bump `brace-expansion` via `npm audit fix` to clear [GHSA-jxxr-4gwj-5jf2](https://github.com/advisories/[GHSA-jxxr-4gwj-5jf2](https://github.com/advisories/GHSA-jxxr-4gwj-5jf2)); audit now clean ([#64](https://github.com/marcop135/vite-react-tailwind-lint/pull/64)).

## [1.6.10] - 2026-05-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.6.9] - 2026-05-12

### Changed

- Realign [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) style and verbosity to the sibling `vite-vanilla-sass-lint` (intro paragraph + "Use this when…", Quick start with dev-server URL, **bold:** category prefixes in What's included, Configuration table, full Releases paragraph, separate Author and License sections).
- Add `test:ci`, `audit`, `audit:fix` scripts; switch `release:check` to `npm run test:ci`.

### Fixed

- Silence the `no-console` warning in [`src/components/ErrorBoundary.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/components/ErrorBoundary.jsx) (dev-only logging is intentional).

## [1.6.8] - 2026-05-12

### Changed

- Tighten [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) (drop redundant prose, flatten What's included, condense Releases + Configuration).

## [1.6.7] - 2026-05-12

### Changed

- Rewrite [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) purpose-first; Quick start near top; scripts and config tables; drop emoji feature block and Run manually snippets.
- Trim [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md); drop manual Release Workflow steps covered by workflows.
- Add [`SECURITY.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/SECURITY.md), PR template, and bug/feature issue templates.
- [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js) sets `build.sourcemap: 'hidden'` in production, `true` otherwise.
- Add `.prettierignore`, `format:check`, `clean`; wire `format:check` into `release:check`.
- JSDoc on `scripts/*.mjs` helpers; add [`IMPROVEMENTS.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/IMPROVEMENTS.md).

### Fixed

- Scope HTMLHint to `index.html` so coverage/dist HTML doesn't fail the lint.

## [1.6.6] - 2026-05-10

### Fixed

- Sync [`vitest.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vitest.config.js) with [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js) so `setupFiles` is loaded under both runners and `@testing-library/jest-dom` matchers are available.
- Add `@vitest/coverage-v8` so `npm run test:coverage` runs out of the box; gitignore the generated [`coverage/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/coverage/) dir.

## [1.6.5] - 2026-05-08

### Changed

- Redesign OG hero as three-icon row (Vite, React, Tailwind) over a sky-400 -> 700 gradient that aligns with the deployed `bg-sky-300` light theme; widen `soft` filter region so the Tailwind shadow no longer clips.
- Tighten changelog prose (~50% shorter per release); drop the `[vX.Y.Z]:` tag-link footer; remove the Release Info section from README.
- Stop the scheduled patch bumper from re-appending changelog footer links.

## [1.6.4] - 2026-05-08

### Added

- Add [`public/og/hero.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/og/hero.png) (1200x630) + og/twitter meta for share previews.
- Generate full favicon set (.ico, 96/180/192/512, webmanifest) from [`public/vite.svg`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/vite.svg); wire `link rel` + dual `theme-color`.
- Add `docs/og/hero-github.png` (1280x640) for GitHub Social preview.

### Changed

- New README hero (logo trio, OG/WhatsApp safe); source moves to `docs/og/`.
- Add `docs/og/{render,favicons}.mjs` (Playwright via sibling `draw` repo, no new deps).

## [1.6.3] - 2026-05-08

### Changed

- Rename [`readme.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/readme.md) to [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md); add hero image at top.

### Removed

- Drop stale `RELEASE.md` links from [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) and [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md).
- Remove `RELEASE.md`; release flow lives in [`CHANGELOG.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CHANGELOG.md) + [`.github/workflows/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/workflows/).

## [1.6.2] - 2026-05-08

### Changed

- Adopt the PR-based release workflow ported from the vanilla repo: auto-merge patch bumps, tag-triggered Release ([#39](https://github.com/marcop135/vite-react-tailwind-lint/pull/39)).

## [1.6.1] - 2026-05-02

### Added

- Scheduled patch workflow bumps semver, updates changelog, pushes `develop` + `v*` tag.

### Changed

- `release:check` = lint + Vitest + build + `npm audit` (moderate).
- `release.yml` runs `release:check`, publishes GitHub Release on `v*` tag.
- Run on push/PR for `main`, `master`, `develop`.

## [1.6.0] - 2026-05-02

### Changed

- Add `ci.yml` (lint + Vitest + build + audit) on push/PR for `main`, `master`, `develop`.
- Require `lint-and-test (22.x)` on `develop`; auto-merge waits for green CI.

## [1.5.0] - 2026-05-02

### Added

- Dependabot auto-merge for patch/minor; majors stay manual.

### Changed

- Biweekly `npm update` PR after lint + Vitest + build + audit.
- Dependabot for npm + github-actions, targeting `develop`.
- Adopt `develop` as integration branch; promote to `master` via tag.

## [1.4.5] - 2026-04-28

### Changed

- Tighten `no-console`, `no-debugger`, `no-empty` ESLint rules from off to warn ([#10](https://github.com/marcop135/vite-react-tailwind-lint/pull/10)).

### Security

- Add Netlify security headers (CSP, HSTS, X-Frame-Options, etc.); guard `ErrorBoundary` logging behind DEV ([#10](https://github.com/marcop135/vite-react-tailwind-lint/pull/10)).

## [1.4.4] - 2026-04-17

### Changed

- Add [`netlify.toml`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/netlify.toml) pinning build/publish to stop asset drift.
- Split `App` out of [`src/main.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/main.jsx) into [`src/App.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/App.jsx).
- Fix Vitest wiring for consistent local + CI runs.

### Fixed

- Restore Netlify prod by deploying complete `dist` with matching hashed assets.

## [1.4.3] - 2026-04-17

### Changed

- Close open PRs; clear security queue.

### Removed

- Delete non-`master` branches (local + remote).

## [1.4.2] - 2026-04-17

### Changed

- Refresh [`package-lock.json`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/package-lock.json).
- Refresh deps (`npm install` + `update`).

## [1.4.0] - 2026-02-09

### Added

- Add Vitest, Husky + lint-staged pre-commit hooks, React error boundary.
- Split into components; lazy-load main content with `React.memo`.

### Changed

- Proper `<a>` tags + ARIA labels in nav.
- Add [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md) and [`CHANGELOG.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CHANGELOG.md).
- ESLint react + hooks plugins, Tailwind config, bundle analyzer.
- Add `@types/react{,-dom}` for editor TS support.
- Tighten ESLint (`eqeqeq`, camelcase, strict `no-undef`); ignore [`dist/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/dist/).

### Removed

- Remove TS ESLint parser/plugin (no TS files).

### Fixed

- README inconsistencies, nav semantic HTML, ESLint parser config.

## [1.3.0] - Previous Release

### Added

- Initial release with Vite + React + Tailwind scaffolding.

# Changelog

**Labels:** Build, Chore, CI, Docs, Enhance, Feat, Fix, Perf, Revert, Sec, Style. Suffix `(WIP)` for in-progress.

## [1.6.8] - 2026-05-12

- **Docs:** Tighten `README.md` (drop redundant prose, flatten What's included, condense Releases + Configuration).
- **Build:** Lift `MAX_BULLETS` cap in `scripts/release-notes-from-changelog.mjs` from 6 to 20 so curated bullets aren't truncated with `…`.

## [1.6.7] - 2026-05-12

- **Docs:** Rewrite `README.md` purpose-first; Quick start near top; scripts and config tables; drop emoji feature block and Run manually snippets.
- **Docs:** Trim `CONTRIBUTING.md`; drop manual Release Workflow steps covered by workflows.
- **Docs:** Add `SECURITY.md`, PR template, and bug/feature issue templates.
- **Build:** `vite.config.js` sets `build.sourcemap: 'hidden'` in production, `true` otherwise.
- **Build:** Add `.prettierignore`, `format:check`, `clean`; wire `format:check` into `release:check`.
- **Fix:** Scope HTMLHint to `index.html` so coverage/dist HTML doesn't fail the lint.
- **Docs:** JSDoc on `scripts/*.mjs` helpers; add `IMPROVEMENTS.md`.

## [1.6.6] - 2026-05-10

- **Fix:** Sync `vitest.config.js` with `vite.config.js` so `setupFiles` is loaded under both runners and `@testing-library/jest-dom` matchers are available.
- **Fix:** Add `@vitest/coverage-v8` so `npm run test:coverage` runs out of the box; gitignore the generated `coverage/` dir.

## [1.6.5] - 2026-05-08

- **Style:** Redesign OG hero as three-icon row (Vite, React, Tailwind) over a sky-400 -> 700 gradient that aligns with the deployed `bg-sky-300` light theme; widen `soft` filter region so the Tailwind shadow no longer clips.
- **Docs:** Tighten changelog prose (~50% shorter per release); drop the `[vX.Y.Z]:` tag-link footer; remove the Release Info section from README.
- **Chore:** Stop the scheduled patch bumper from re-appending changelog footer links.

## [1.6.4] - 2026-05-08

- **Docs:** New README hero (logo trio, OG/WhatsApp safe); source moves to `docs/og/`.
- **Feat:** Add `public/og/hero.png` (1200x630) + og/twitter meta for share previews.
- **Feat:** Generate full favicon set (.ico, 96/180/192/512, webmanifest) from `public/vite.svg`; wire `link rel` + dual `theme-color`.
- **Feat:** Add `docs/og/hero-github.png` (1280x640) for GitHub Social preview.
- **Chore:** Add `docs/og/{render,favicons}.mjs` (Playwright via sibling `draw` repo, no new deps).

## [1.6.3] - 2026-05-08

- **Docs:** Rename `readme.md` to `README.md`; add hero image at top.
- **Docs:** Drop stale `RELEASE.md` links from `README.md` and `CONTRIBUTING.md`.
- **Chore:** Remove `RELEASE.md`; release flow lives in `CHANGELOG.md` + `.github/workflows/`.

## [1.6.2] - 2026-05-08

- **Chore:** Automated maintenance patch via scheduled workflow; tag triggers GitHub Release.

## [1.6.1] - 2026-05-02

- **Feat:** Scheduled patch workflow bumps semver, updates changelog, pushes `develop` + `v*` tag.
- **Build:** `release:check` = lint + Vitest + build + `npm audit` (moderate).
- **CI:** `release.yml` runs `release:check`, publishes GitHub Release on `v*` tag.
- **CI:** Run on push/PR for `main`, `master`, `develop`.

## [1.6.0] - 2026-05-02

- **CI:** Add `ci.yml` (lint + Vitest + build + audit) on push/PR for `main`, `master`, `develop`.
- **Chore:** Require `lint-and-test (22.x)` on `develop`; auto-merge waits for green CI.

## [1.5.0] - 2026-05-02

- **Feat:** Dependabot auto-merge for patch/minor; majors stay manual.
- **CI:** Biweekly `npm update` PR after lint + Vitest + build + audit.
- **CI:** Dependabot for npm + github-actions, targeting `develop`.
- **Chore:** Adopt `develop` as integration branch; promote to `master` via tag.

## [1.4.5] - 2026-04-28

- **Chore:** Maintenance tag, no code change.

## [1.4.4] - 2026-04-17

- **Fix:** Restore Netlify prod by deploying complete `dist` with matching hashed assets.
- **Build:** Add `netlify.toml` pinning build/publish to stop asset drift.
- **Chore:** Split `App` out of `src/main.jsx` into `src/App.jsx`.
- **Chore:** Fix Vitest wiring for consistent local + CI runs.

## [1.4.3] - 2026-04-17

- **Chore:** Close open PRs; clear security queue.
- **Chore:** Delete non-`master` branches (local + remote).

## [1.4.2] - 2026-04-17

- **Build:** Refresh `package-lock.json`.
- **Chore:** Refresh deps (`npm install` + `update`).

## [1.4.0] - 2026-02-09

- **Feat:** Add Vitest, Husky + lint-staged pre-commit hooks, React error boundary.
- **Feat:** Split into components; lazy-load main content with `React.memo`.
- **Fix:** README inconsistencies, nav semantic HTML, ESLint parser config.
- **Style:** Proper `<a>` tags + ARIA labels in nav.
- **Docs:** Add `CONTRIBUTING.md` and `CHANGELOG.md`.
- **Build:** ESLint react + hooks plugins, Tailwind config, bundle analyzer.
- **Build:** Add `@types/react{,-dom}` for editor TS support.
- **Chore:** Tighten ESLint (`eqeqeq`, camelcase, strict `no-undef`); ignore `dist/`.
- **Chore:** Remove TS ESLint parser/plugin (no TS files).

## [1.3.0] - Previous Release

- **Feat:** Initial release with Vite + React + Tailwind scaffolding.

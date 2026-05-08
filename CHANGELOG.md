# Changelog

**Labels:** **Build**, **Chore**, **CI**, **Docs**, **Enhance**, **Feat**, **Fix**, **Perf**, **Revert**, **Sec**, **Style**; add **(WIP)** for incomplete work.

## [1.6.4] - 2026-05-08

- **Docs:** Rework README hero into a Vite, React, Tailwind logo trio on a light-gray background that holds up at OG and WhatsApp thumbnail sizes; replace `docs/proposals/` with `docs/og/` as the canonical hero source.
- **Feat:** Serve `public/og/hero.png` (1200x630) plus `og:` and `twitter:` card meta in `index.html` so Netlify deploy shares render the hero on Slack, WhatsApp, iMessage, and Twitter.
- **Feat:** Generate a cross-browser favicon set (`favicon.ico` 16/32/48 multi-res, `favicon-96x96.png`, `apple-touch-icon.png` 180x180, `web-app-manifest-192/512.png`, `site.webmanifest`) from `public/vite.svg`; `index.html` ships the full `link rel` set plus dual `theme-color` hints.
- **Feat:** Add `docs/og/hero-github.png` (1280x640, ~84 KB) for the GitHub repo Social preview upload.
- **Chore:** New `docs/og/render.mjs` and `docs/og/favicons.mjs` regenerate the asset set from source SVGs via the neighbouring `draw` repo's Playwright, no new dev deps.

## [1.6.3] - 2026-05-08

- **Docs:** Rename `readme.md` to `README.md` and add a hero image at the top.
- **Docs:** Prune stale `RELEASE.md` links from `README.md` and `CONTRIBUTING.md`.
- **Chore:** Remove `RELEASE.md`; release flow lives in `CHANGELOG.md` and `.github/workflows/`.

## [1.6.2] - 2026-05-08

- **Chore:** Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release.

## [1.6.1] - 2026-05-02

- **Feat:** Scheduled patch workflow bumps semver, updates changelog, and pushes `develop` plus the `v*` tag.
- **Build:** `release:check` aggregates lint, Vitest, build, and `npm audit --audit-level=moderate`.
- **CI:** New `release.yml` runs `release:check` and publishes the GitHub Release on `v*` tag push.
- **CI:** Run CI on push and pull_request for `main`, `master`, and `develop`.

## [1.6.0] - 2026-05-02

- **CI:** Add `ci.yml` running lint, Vitest, build, and audit on push and PR for `main`, `master`, and `develop`.
- **Chore:** Require `lint-and-test (22.x)` on `develop`; Dependabot auto-merge waits for CI green.

## [1.5.0] - 2026-05-02

- **Feat:** Dependabot auto-merge workflow squash-merges patch and minor updates; majors stay manual.
- **CI:** Biweekly `npm update` workflow opens a PR after lint, Vitest, build, and audit.
- **CI:** Configure Dependabot for npm and github-actions ecosystems against `develop`.
- **Chore:** Adopt `develop` as the integration branch; bumps soak before tagged promotion to `master`.

## [1.4.5] - 2026-04-28

- **Chore:** Stamp the 1.4.5 tag as a maintenance snapshot; no code change.

## [1.4.4] - 2026-04-17

- **Fix:** Restore Netlify production rendering by deploying a complete `dist` with matching hashed assets.
- **Build:** Add `netlify.toml` pinning build to `npm run build` and publish to `dist` to stop asset drift.
- **Chore:** Split `App` from `src/main.jsx` into `src/App.jsx` to keep the entrypoint minimal.
- **Chore:** Update Vitest wiring so app tests run consistently locally and in CI.

## [1.4.3] - 2026-04-17

- **Chore:** Close all open PRs and clear the security request queue.
- **Chore:** Delete non-`master` branches locally and on remote to centralize release flow.

## [1.4.2] - 2026-04-17

- **Build:** Update `package-lock.json` with the latest resolved npm package versions.
- **Chore:** Refresh the dependency tree via `npm install` and `npm update`.

## [1.4.0] - 2026-02-09

- **Feat:** Add Vitest with setup, Husky plus lint-staged pre-commit hooks, and a React error boundary.
- **Feat:** Adopt component-based architecture; split `main.jsx` and lazy-load main content with `React.memo`.
- **Fix:** Fix README inconsistencies, semantic-HTML issues in navigation, and ESLint parser config.
- **Style:** Improve accessibility with proper `<a>` tags and ARIA labels in navigation.
- **Docs:** Add `CONTRIBUTING.md` and `CHANGELOG.md`.
- **Build:** Add ESLint React and hooks plugins, Tailwind config, and a bundle analyzer plugin.
- **Build:** Add `@types/react` and `@types/react-dom` for editor TypeScript support.
- **Chore:** Tighten ESLint rules (`eqeqeq`, camelcase warnings, strict `no-undef`) and ignore `dist/`.
- **Chore:** Remove TypeScript ESLint parser and plugin since no TypeScript files exist.

## [1.3.0] - Previous Release

- **Feat:** Initial release with Vite, React, and Tailwind CSS scaffolding.

[1.6.3]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.3
[1.6.2]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.2
[1.6.1]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.1
[1.6.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.0
[1.5.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.5.0
[1.4.5]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.5
[1.4.4]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.4
[1.4.3]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.3
[1.4.2]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.2
[1.4.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.0
[1.3.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.3.0

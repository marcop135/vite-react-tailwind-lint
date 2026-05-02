# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.1] - 2026-05-02

### Added

- Scheduled patch release workflow (`scheduled-patch-release.yml`, 3rd & 17th UTC) bumps semver patch via `scripts/bump-patch-maintenance.mjs`, prepends a changelog section on `develop`, commits/pushes **develop**, and pushes the **tag** (`v*`). It does **not** merge `develop` → `master` (avoid branch-protection pitfalls with `GITHUB_TOKEN`).
- `release.yml`: on `push` of `v*` tags (plus `workflow_dispatch` with tag input), runs `npm run release:check`, then publishes a GitHub Release with `generate_release_notes` (`softprops/action-gh-release`).

### Changed

- `release:check` aggregates lint + vitest + build + npm audit (`moderate`); CI (`ci.yml`) and scheduled npm workflow use it.
- CI runs on `main`, `master`, and `develop` for push and pull_request.

## [1.6.0] - 2026-05-02

### Added

- CI workflow (`.github/workflows/ci.yml`) that runs lint, vitest, build, and audit on push and pull_request to `main`, `master`, and `develop`. Provides the required `lint-and-test (22.x)` status check that gates Dependabot auto-merge.

### Changed

- Enabled branch protection on `develop` requiring the `lint-and-test (22.x)` check to pass before merge. Patch and minor Dependabot PRs now wait for CI green before auto-merging.

## [1.5.0] - 2026-05-02

### Added

- Dependabot auto-merge workflow that enables squash auto-merge for patch and minor updates; major updates remain manual.
- Scheduled biweekly `npm update` workflow that runs on the 1st and 15th of each month (plus `workflow_dispatch`), verifies via lint + vitest + build + audit, and opens a PR with the lockfile diff.
- `.github/dependabot.yml` configuration for npm and github-actions ecosystems, targeting `develop` as the integration branch.

### Changed

- Adopted `develop` as the integration branch where bumps soak before promoting to `master` via tagged release.

## [1.4.5] - 2026-04-28

### Changed

- Bumped package version to 1.4.5 for tagged release; no functional changes.

## [1.4.4] - 2026-04-17

### Fixed

- Restored Netlify production rendering by deploying a complete `dist` publish with matching hashed assets.
- Added `netlify.toml` with explicit build (`npm run build`) and publish (`dist`) settings to prevent stale index/asset mismatches.

### Changed

- Split `App` from `src/main.jsx` into `src/App.jsx` to keep entrypoint rendering minimal and stable.
- Updated Vitest test wiring and app tests for consistent local and CI execution.

## [1.4.3] - 2026-04-17

### Changed

- Closed all open pull requests and cleaned security-related request queues.
- Removed all non-`master` branches locally and on remote to keep release flow centralized on `master`.

## [1.4.2] - 2026-04-17

### Changed

- Ran `npm install` and `npm update` to refresh the dependency tree.
- Updated `package-lock.json` with the latest resolved npm package versions.

## [1.4.0] - 2026-02-09

### Added

- React ESLint plugin and hooks plugin for better React linting
- Vitest testing framework with test setup
- Husky and lint-staged for pre-commit hooks
- React error boundary component
- Bundle analyzer plugin for build optimization
- Component-based architecture (split main.jsx into separate components)
- React.memo for performance optimization
- Lazy loading for main content components
- Tailwind config file
- CONTRIBUTING.md and CHANGELOG.md documentation
- @types/react and @types/react-dom for better TypeScript support

### Changed

- Improved accessibility: navigation now uses proper `<a>` tags with ARIA labels
- Enhanced ESLint rules: enabled eqeqeq, camelcase warnings, and strict no-undef
- Updated .gitignore to properly ignore dist folder
- Refactored code into modular components for better maintainability

### Removed

- TypeScript ESLint parser and plugin (no TypeScript files in project)

### Fixed

- Fixed README inconsistencies
- Fixed semantic HTML issues in navigation
- Fixed ESLint configuration to use standard JavaScript parser

## [1.3.0] - Previous Release

Initial release with basic Vite + React + Tailwind CSS setup.

[1.6.1]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.1
[1.6.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.0
[1.5.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.5.0
[1.4.5]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.5
[1.4.4]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.4
[1.4.3]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.3
[1.4.2]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.2
[1.4.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.0
[1.3.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.3.0

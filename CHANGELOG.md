# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.4.3]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.3
[1.4.4]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.4
[1.4.2]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.2
[1.4.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.0
[1.3.0]: https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.3.0

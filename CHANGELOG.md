# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

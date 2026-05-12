# Contributing

## Getting started

1. Fork and clone the repo.
2. `npm install`.
3. Branch for your work: `git checkout -b feature/your-feature`.

See [README.md](./README.md#quick-start) for the Quick start path.

## Prerequisites

- Node.js v22+ (pinned in `.nvmrc`; `nvm use`).
- npm (bundled with Node).

## Workflow

Before opening a PR, run `npm run release:check`. It runs the same gates as CI: lint, test, build, and `npm audit` at the moderate threshold.

Pre-commit hooks (Husky + lint-staged) run ESLint, Stylelint, and Prettier on staged files. If they fail, fix the reported issues and commit again.

## Code style

- **JavaScript / JSX:** ES2020+, single quotes, camelCase, JSDoc on non-trivial functions. Rules live in `eslint.config.js`.
- **CSS:** rules live in `.stylelintrc`. Tailwind utility classes are linted via `prettier-plugin-tailwindcss` and Stylelint defaults.
- **HTML:** semantic elements, lowercase tags, double-quoted attribute values, alt text on images. Rules live in `.htmlhintrc`.

## Commit messages

Imperative mood, first line under 72 characters, optional body for the why.

## Pull requests

The repository has a PR template with the checklist. Issues use the bug and feature templates under `.github/ISSUE_TEMPLATE/`.

## Releases

User-facing change history is tracked in [`CHANGELOG.md`](./CHANGELOG.md). Published tags and release notes live in [GitHub Releases](https://github.com/marcop135/vite-react-tailwind-lint/releases). The release flow is automated through `.github/workflows/release.yml` (tag-triggered) and `.github/workflows/scheduled-patch-release.yml` (biweekly).

## License

By contributing you agree that your contributions are licensed under the [MIT License](./LICENSE).

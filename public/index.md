---
title: 'Revitail: React, Tailwind and Vite starter, linted and tested'
canonical: https://vitereact.marcopontili.com/
description: A starter template for React 19, Vite 8 and Tailwind CSS 4, with linters, tests and CI already wired up and passing.
dateModified: 2026-10-24
---

# Revitail

Start fresh. Revitalize your next React project.

**Revitail** is a free, open-source starter template: React 19, Vite 8 and Tailwind CSS 4, with linters, tests and CI already wired up and passing.

## Quick start

Needs Node.js 22 (pinned in `.nvmrc`).

```bash
git clone https://github.com/marcop135/revitail.git my-app
cd my-app && npm install
npm run dev
```

## What is wired in

| Area            | Tools                                                                    |
| --------------- | ------------------------------------------------------------------------ |
| Build           | Vite, React, Tailwind CSS, `@vitejs/plugin-react`, `@tailwindcss/vite`   |
| Lint and format | ESLint, Stylelint, HTMLHint, Prettier with `prettier-plugin-tailwindcss` |
| Test            | Vitest, Testing Library, jsdom, `@vitest/coverage-v8`                    |
| Automation      | Husky, lint-staged, Node.js 22 pinned in `.nvmrc`                        |

## From save to release

Every check runs as early as it can, and CI runs them all again before a merge.

1. **While you type** (`npm run dev`): vite-plugin-eslint2 and vite-plugin-stylelint report problems in the terminal as you save.
2. **On commit** (Husky + lint-staged): the pre-commit hook runs `eslint --fix`, `stylelint --fix` and `prettier --write` on staged files only.
3. **On pull request** (GitHub Actions, Node 22): CI runs `npm run release:check`, the same command you can run locally: lint, format check, tests, build and production audit.
4. **On tag** (`release.yml`): a `vX.Y.Z` tag re-runs the gates and publishes a GitHub Release with notes taken from `CHANGELOG.md`.

Dependabot and a biweekly `npm update` merge patch and minor bumps once CI passes, and a scheduled patch release ships them.

## Scripts

| Command                 | What it does                  |
| ----------------------- | ----------------------------- |
| `npm run dev`           | Dev server on port 5173       |
| `npm run build`         | Production build to `dist/`   |
| `npm run lint`          | ESLint + Stylelint + HTMLHint |
| `npm run test:ci`       | Vitest, single run            |
| `npm run release:check` | Every CI gate in one command  |

The [docs](https://github.com/marcop135/revitail/blob/main/docs/README.md) list the rest.

## Get it

Free and open source under the [MIT License](https://github.com/marcop135/revitail/blob/main/LICENSE). Source on [GitHub](https://github.com/marcop135/revitail). Built and maintained by [Marco Pontili](https://marcopontili.com).

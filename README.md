<p align="center">
  <a href="https://vitereact.marcopontili.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/brand/readme-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/brand/readme.png" />
    <img src=".github/brand/readme.png" alt="Vite logo tile, the name Revitail with the line Start fresh, revitalize your next React project, a terminal running npm run release:check with lint, format, test, build and audit passing, and stacked Tailwind CSS, React and Vite planes" width="900" />
  </picture>
  </a>
</p>

# Revitail: React, Vite and Tailwind starter

[![CI](https://github.com/marcop135/revitail/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/marcop135/revitail/actions/workflows/ci.yml)
[![Deploy](https://github.com/marcop135/revitail/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/marcop135/revitail/actions/workflows/deploy.yml)
[![Release](https://img.shields.io/github/v/release/marcop135/revitail)](https://github.com/marcop135/revitail/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/marcop135/revitail/develop)](https://github.com/marcop135/revitail/commits/develop)
[![Node](https://img.shields.io/badge/node-22-339933?logo=nodedotjs&logoColor=white)](./.nvmrc)
[![React](https://img.shields.io/github/package-json/dependency-version/marcop135/revitail/react?logo=react&label=react)](https://react.dev/)
[![Vite](https://img.shields.io/github/package-json/dependency-version/marcop135/revitail/dev/vite?logo=vite&label=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/github/package-json/dependency-version/marcop135/revitail/dev/tailwindcss?logo=tailwindcss&label=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/github/package-json/dependency-version/marcop135/revitail/dev/vitest?logo=vitest&label=vitest)](https://vitest.dev/)

Every React project starts with the same chore: wiring linters, formatters, tests and CI, then checking it all works.
Revitail comes with all of it wired up and passing, on React 19, Vite 8 and Tailwind CSS v4.

Start fresh. Revitalize your next React project.

[Check the website](https://vitereact.marcopontili.com) · [Read the docs](./docs/README.md)

## What you get

- React 19, Vite 8 and Tailwind CSS v4
- ESLint, Stylelint, HTMLHint and Prettier with Tailwind class sorting
- Vitest and Testing Library, with coverage
- Husky pre-commit hook running lint-staged
- GitHub Actions for CI, tagged releases and Dependabot auto-merge
- `@/` import alias and `.env.example`
- Light and dark theme from CSS variables

## Quick start

You need Node.js 22 (pinned in `.nvmrc`).

```bash
git clone https://github.com/marcop135/revitail.git my-app
cd my-app && npm install
npm run dev
```

The dev server runs at `http://localhost:5173`. Next: [rename the project and remove the demo](docs/getting-started.md).

## Docs

| Doc                                        | Covers                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| [Getting started](docs/getting-started.md) | Clean history, renaming, removing the demo, `@/`, env vars    |
| [Guides](docs/guides.md)                   | Routes, components with tests, TypeScript, upstream updates   |
| [Workflow](docs/workflow.md)               | Checks on save, commit and CI, tests, releases                |
| [Styling](docs/styling.md)                 | Tailwind v4, tokens, dark mode, fonts, utilities              |
| [Project](docs/project.md)                 | Scripts, layout, config, build output, browsers, a11y and SEO |
| [Deploy](docs/deploy.md)                   | Static hosting, SPA fallback, CSP, deploy workflow            |
| [Troubleshooting](docs/troubleshooting.md) | Common errors and their fixes                                 |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Report vulnerabilities through [SECURITY.md](./SECURITY.md).

## Author

[Marco Pontili](https://marcopontili.com)

## License

[MIT](./LICENSE)

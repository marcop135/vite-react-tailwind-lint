# Codebase Improvement Opportunities

Open items only. Shipped items are recorded in `CHANGELOG.md`.

## Tooling

- **Accessibility linting**: add `eslint-plugin-jsx-a11y` (React-aware, lint-time) and/or `@axe-core/cli` against `npm run preview` in CI.
- **Lighthouse CI**: automated performance + accessibility budgets on PRs (`@lhci/cli` + `lighthouserc.json` + a workflow running against `dist/` after build).
- **React Testing setup**: only one example test (`App.test.jsx`); add coverage for the Error Boundary path and a lazy-loaded route.

## Build / Config

- **Audit gate**: `release:check` runs `npm audit --audit-level=moderate`. Tightening to `--audit-level=high` would fail loudly on high/critical without churning on moderate noise.
- **Sourcemap inspection in `analyze` mode**: visualizer already uses the build output; confirm that `--mode analyze` sourcemaps surface original source paths in the treemap.

## Release

- **Merge tag info into Release notes**: combine the GitHub auto-generated tag notes with the changelog excerpt in `release.yml` so contributors and watchers see commit-level detail alongside the curated bullets.

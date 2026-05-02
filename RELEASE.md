# Release Information

This file centralizes release metadata for `vite-react-tailwind-lint`.

## Latest Release

- Version: `1.6.1`
- Tag: [`v1.6.1`](https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.1)
- Date: `2026-05-02`
- Branch: `master` (production); scheduled maintenance tags are created from `develop` first.

## Release Links

- Release history: [GitHub Releases](https://github.com/marcop135/vite-react-tailwind-lint/releases)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## 1.6.1 Highlights

Automation around tagged releases and patch bumps on `develop`, without auto-merging to `master` from Actions.

### Added

- **Scheduled patch release**: `.github/workflows/scheduled-patch-release.yml` (3rd & 17th UTC) bumps patch via [`scripts/bump-patch-maintenance.mjs`](./scripts/bump-patch-maintenance.mjs): updates `package.json`/lockfile, prepends **[CHANGELOG.md](./CHANGELOG.md)** on `develop`, commits and pushes `develop`, pushes tag `v*`. Does **not** merge into `master` (avoids branch-protection pitfalls with default `GITHUB_TOKEN`).
- **Tag-driven GitHub Release**: [.github/workflows/release.yml](./.github/workflows/release.yml) on `push` of `v*` (or `workflow_dispatch` with a tag input) runs `npm run release:check`, then creates/updates the GitHub Release (`softprops/action-gh-release`) with generated contributor notes.

### Changed

- **`release:check`**: lint + Vitest + `vite build` + `npm audit --audit-level=moderate`; reused by CI and scheduled npm workflows.
- **CI branch filters**: push and `pull_request` workflows run for `main`, `master`, and `develop`.

See **[CHANGELOG.md — 1.6.1](./CHANGELOG.md#161---2026-05-02)** and the [v1.6.1 GitHub Release](https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.6.1).

## Quick Release Commands

```bash
npm version patch --no-git-tag-version
git add CHANGELOG.md RELEASE.md package.json package-lock.json
git commit -m "X.Y.Z"
git tag -a vX.Y.Z -m "X.Y.Z"
git push origin master
git push origin refs/tags/vX.Y.Z
```

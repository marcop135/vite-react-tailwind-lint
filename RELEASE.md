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

- **`release.yml`** — on `v*` tag: runs `release:check`, publishes the GitHub Release.
- **`scheduled-patch-release.yml`** — periodic patch bump on `develop` via [`bump-patch-maintenance.mjs`](./scripts/bump-patch-maintenance.mjs); pushes tag only (workflow does not merge into `master`).
- **`release:check`** covers lint, tests, prod build, and `npm audit` (`moderate`); CI/schedules reuse it for `main`, `master`, and `develop`.

## Quick Release Commands

```bash
npm version patch --no-git-tag-version
git add CHANGELOG.md RELEASE.md package.json package-lock.json
git commit -m "X.Y.Z"
git tag -a vX.Y.Z -m "X.Y.Z"
git push origin master
git push origin refs/tags/vX.Y.Z
```

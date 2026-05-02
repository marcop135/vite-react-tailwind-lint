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

- GitHub Actions: `release:check`, tag-driven `release.yml`, scheduled patch bumps on `develop`, and biweekly `npm update` PRs (see [CHANGELOG.md](./CHANGELOG.md)).

## Quick Release Commands

```bash
npm version patch --no-git-tag-version
git add CHANGELOG.md RELEASE.md package.json package-lock.json
git commit -m "X.Y.Z"
git tag -a vX.Y.Z -m "X.Y.Z"
git push origin master
git push origin refs/tags/vX.Y.Z
```

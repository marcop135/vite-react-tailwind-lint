# Release Information

This file centralizes release metadata for `vite-react-tailwind-lint`.

## Latest Release

- Version: `1.4.4`
- Tag: [`v1.4.4`](https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.4)
- Date: `2026-04-17`
- Branch: `master`

## Release Links

- Release history: [GitHub Releases](https://github.com/marcop135/vite-react-tailwind-lint/releases)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## 1.4.4 Highlights

- Fixed blank Netlify production rendering caused by missing hashed JS/CSS assets.
- Added `netlify.toml` build and publish configuration to keep deploy output consistent.
- Refined app entry and tests (`src/App.jsx`, Vitest wiring) for reliable validation and deploy confidence.

## Quick Release Commands

```bash
npm version patch --no-git-tag-version
git add CHANGELOG.md RELEASE.md package.json package-lock.json
git commit -m "X.Y.Z"
git tag -a vX.Y.Z -m "X.Y.Z"
git push origin master
git push origin refs/tags/vX.Y.Z
```

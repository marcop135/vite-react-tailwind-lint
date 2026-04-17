# Release Information

This file centralizes release metadata for `vite-react-tailwind-lint`.

## Latest Release

- Version: `1.4.3`
- Tag: [`v1.4.3`](https://github.com/marcop135/vite-react-tailwind-lint/releases/tag/v1.4.3)
- Date: `2026-04-17`
- Branch: `master`

## Release Links

- Release history: [GitHub Releases](https://github.com/marcop135/vite-react-tailwind-lint/releases)
- Changelog: [CHANGELOG.md](./CHANGELOG.md)

## 1.4.3 Highlights

- Closed all open pull requests and cleaned security-related request queues.
- Removed all non-`master` branches locally and on remote.

## Quick Release Commands

```bash
npm version patch --no-git-tag-version
git add CHANGELOG.md RELEASE.md package.json package-lock.json
git commit -m "X.Y.Z"
git tag -a vX.Y.Z -m "X.Y.Z"
git push origin master
git push origin refs/tags/vX.Y.Z
```

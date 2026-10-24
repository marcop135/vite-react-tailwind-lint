# Workflow

Every check runs at the earliest point it can catch a problem, and CI runs all of them again.

| When                                         | What runs                                                             | Configured in                           |
| -------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------- |
| You save a file                              | ESLint and Stylelint, errors shown in the dev server terminal         | `vite.config.js`                        |
| You commit                                   | ESLint `--fix`, Stylelint `--fix`, Prettier `--write` on staged files | `.husky/pre-commit`, `.lintstagedrc.js` |
| You push or open a PR to `main` or `develop` | `npm run release:check`                                               | `.github/workflows/ci.yml`              |
| You push a `v*` tag                          | GitHub Release with notes from `CHANGELOG.md`                         | `.github/workflows/release.yml`         |

## The one gate

```bash
npm run release:check
```

Runs lint, format check, tests, build and `npm audit --omit=dev --audit-level=moderate`. CI runs exactly this, so a green local run means a green CI run. CI also prints a full-tree `npm audit` that never blocks.

## Tests

Vitest with jsdom and Testing Library. Tests sit next to the code (`src/App.test.jsx`); `src/test/setup.js` loads the jest-dom matchers.

| Command                 | Mode                          |
| ----------------------- | ----------------------------- |
| `npm run test`          | Watch                         |
| `npm run test:ci`       | Single run                    |
| `npm run test:coverage` | Coverage report (`coverage/`) |

## Releases

1. Add a `## [X.Y.Z] - YYYY-MM-DD` section to `CHANGELOG.md` (Keep a Changelog format) and bump `version` in `package.json`.
2. Commit, then tag and push:

   ```bash
   git tag vX.Y.Z
   git push origin vX.Y.Z
   ```

3. `release.yml` publishes the GitHub Release, titled and filled from that changelog section.

## Dependency upkeep

- Dependabot opens PRs for updates; `dependabot-auto-merge.yml` merges patch and minor bumps once CI passes.
- `scheduled-npm-update.yml` opens an in-range `npm update` PR on the 1st and 15th and merges it once CI passes.
- `scheduled-patch-release.yml` cuts a patch release from those updates.
- Major bumps need a human.

Drop the scheduled workflows if you do not want automatic releases.

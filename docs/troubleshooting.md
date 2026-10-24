# Troubleshooting

| Symptom                                                             | Cause and fix                                                                                                                             |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `npm install` or `npm run dev` fails with an engine or syntax error | Node is too old. Vite 8 needs Node 22.22.2 or later: `nvm install 22 && nvm use`.                                                         |
| The dev server opens on `5174`, not `5173`                          | Port 5173 is taken. Vite moves to the next free port and prints it; stop the other process to get 5173 back.                              |
| The pre-commit hook does not run                                    | Husky installs on `npm install` (`prepare` script) and needs a Git repo. Run `git init` before `npm install`, or run `npm install` again. |
| A commit is rejected                                                | lint-staged found an error it cannot fix. Fix what it prints and commit again; `npm run lint` shows the same errors.                      |
| `npm run format:check` fails in CI                                  | A file was committed without Prettier. Run `npm run format` and commit.                                                                   |
| `npm run release:check` fails on audit                              | A production dependency has a moderate or higher advisory. Run `npm audit --omit=dev` to see it, then update the package.                 |
| A script or style is blocked in production, not in dev              | The CSP in `public/.htaccess` allows only `'self'`. Move inline scripts to files, or add the host to the policy.                          |
| A deep link returns 404 in production                               | The host has no SPA fallback. See [Deploy](./deploy.md#spa-fallback).                                                                     |
| `import.meta.env.VITE_*` is `undefined`                             | The variable lacks the `VITE_` prefix, sits in the wrong `.env` file, or the dev server was not restarted after adding it.                |

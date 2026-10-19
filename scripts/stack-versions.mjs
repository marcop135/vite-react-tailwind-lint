import { readFileSync } from 'node:fs';

const ROOT = new URL('../', import.meta.url);

function readJson(file) {
  return JSON.parse(readFileSync(new URL(file, ROOT), 'utf8'));
}

/**
 * Exact versions of every direct dependency, read from package-lock.json so the
 * page shows what `npm install` resolves, not the semver range. Falls back to
 * the range without its operator when the lockfile has no entry.
 *
 * @returns {Record<string, string>} Package name to version, plus `node` from .nvmrc.
 */
export function stackVersions() {
  const pkg = readJson('package.json');
  const lock = readJson('package-lock.json');
  const ranges = { ...pkg.dependencies, ...pkg.devDependencies };
  const versions = {};

  for (const [name, range] of Object.entries(ranges)) {
    versions[name] =
      lock.packages?.[`node_modules/${name}`]?.version ??
      range.replace(/^[^\d]*/u, '');
  }

  versions.node = readFileSync(new URL('.nvmrc', ROOT), 'utf8').trim();
  return versions;
}

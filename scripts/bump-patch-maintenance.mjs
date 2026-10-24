import { appendFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import process from 'process';
import url from 'url';

const ROOT = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..');

/**
 * Increment the patch component of a `Major.Minor.Patch` semver string.
 *
 * @param {string} semver - Existing semver (no prerelease or build suffix).
 * @returns {string} Version with `Patch + 1`.
 * @throws {Error} When `semver` does not match `Major.Minor.Patch`.
 */
function bumpPatch(semver) {
  const m = semver.trim().match(/^(\d+)\.(\d+)\.(\d+)/u);
  if (!m) throw new Error(`Invalid semver patch base: "${semver}"`);
  const [, major, minor, patch] = m;
  return `${major}.${minor}.${Number.parseInt(patch, 10) + 1}`;
}

/**
 * Insert a new `section` block before the first released `## [x.y.z]` heading,
 * collapsing surrounding blank lines so spacing stays consistent.
 *
 * @param {string} changelogBody - Full CHANGELOG.md contents.
 * @param {string} section - New section text (without surrounding blank lines).
 * @returns {string} Updated CHANGELOG.md contents.
 */
function prependChangelogBlock(changelogBody, section) {
  const idx = changelogBody.search(/^## \[\d/mu);
  if (idx === -1) return `${changelogBody.trimEnd()}\n\n${section}\n`;
  const before = changelogBody.slice(0, idx);
  const after = changelogBody.slice(idx);
  return `${before.trimEnd()}\n\n${section.trim()}\n\n${after}`;
}

const pkgPath = path.join(ROOT, 'package.json');
const lockPath = path.join(ROOT, 'package-lock.json');
const changelogPath = path.join(ROOT, 'CHANGELOG.md');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const previousVersion = pkg.version;
const newVersion = bumpPatch(previousVersion);

pkg.version = newVersion;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

// Keep the lockfile's own version in step, as `npm version` would.
const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
lock.version = newVersion;
if (lock.packages?.['']) lock.packages[''].version = newVersion;
writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`);

const changelog = readFileSync(changelogPath, 'utf8');
const isoDate =
  process.env.CHANGELOG_DATE ?? new Date().toISOString().slice(0, 10);
const heading = `## [${newVersion}] - ${isoDate}`;
const unreleased = /^## \[Unreleased\][^\n]*$/mu;

// Pending notes ship with this patch: date the Unreleased heading instead of
// stacking a maintenance section above it.
const updated = unreleased.test(changelog)
  ? changelog.replace(unreleased, heading)
  : prependChangelogBlock(
      changelog,
      [
        heading,
        '',
        '### Changed',
        '',
        '- Update dependencies within their semver ranges.',
      ].join('\n')
    );

writeFileSync(changelogPath, updated);

const outPath = process.env.GITHUB_OUTPUT;
if (outPath) {
  appendFileSync(
    outPath,
    `version=${newVersion}\nprevious_version=${previousVersion}\n`
  );
}

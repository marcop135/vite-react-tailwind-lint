import { appendFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import process from 'process';
import url from 'url';

const ROOT = path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..');

function resolveGhRepoSlug() {
  const fromEnv = process.env.GITHUB_REPOSITORY;
  if (fromEnv) return fromEnv;
  const changelog = readFileSync(path.join(ROOT, 'CHANGELOG.md'), 'utf8');
  const m = changelog.match(/\[[^\]]+\]:\s*https:\/\/github\.com\/([^/\s]+\/[^/\s]+)\//u);
  if (m?.[1]) return m[1];
  throw new Error('Set GITHUB_REPOSITORY or add a github.com link in CHANGELOG.md');
}

function bumpPatch(semver) {
  const m = semver.trim().match(/^(\d+)\.(\d+)\.(\d+)/u);
  if (!m) throw new Error(`Invalid semver patch base: "${semver}"`);
  const [, major, minor, patch] = m;
  return `${major}.${minor}.${Number.parseInt(patch, 10) + 1}`;
}

function prependChangelogBlock(changelogBody, section) {
  const idx = changelogBody.search(/^## \[/mu);
  if (idx === -1) return `${changelogBody.trimEnd()}\n\n${section}\n`;
  const before = changelogBody.slice(0, idx);
  const after = changelogBody.slice(idx);
  return `${before.trimEnd()}\n\n${section.trim()}\n\n${after}`;
}

function insertFooterLink(markdown, newVersion, repoSlug) {
  const line = `[${newVersion}]: https://github.com/${repoSlug}/releases/tag/v${newVersion}`;
  const re = /\n\[[^\]]+\]:\s*https:\/\/github\.com\/[^\n]+\n/u;
  const match = re.exec(markdown);
  if (match) {
    const insertPos = match.index + 1;
    return `${markdown.slice(0, insertPos)}${line}\n${markdown.slice(insertPos)}`;
  }
  return `${markdown.trimEnd()}\n\n${line}\n`;
}

const pkgPath = path.join(ROOT, 'package.json');
const changelogPath = path.join(ROOT, 'CHANGELOG.md');

const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const previousVersion = pkg.version;
const newVersion = bumpPatch(previousVersion);

pkg.version = newVersion;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

const changelog = readFileSync(changelogPath, 'utf8');
const repoSlug = resolveGhRepoSlug();
const isoDate = process.env.CHANGELOG_DATE ?? new Date().toISOString().slice(0, 10);

const section = [
  `## [${newVersion}] - ${isoDate}`,
  '',
  '### Changed',
  '',
  '- Automated maintenance patch (scheduled workflow). Tag triggers GitHub Release (generated notes); production deploy follows the branch configured in Netlify (often `master`).',
].join('\n');

let next = prependChangelogBlock(changelog, section);
next = insertFooterLink(next, newVersion, repoSlug);
writeFileSync(changelogPath, next);

const outPath = process.env.GITHUB_OUTPUT;
if (outPath) {
  appendFileSync(outPath, `version=${newVersion}\nprevious_version=${previousVersion}\n`);
}

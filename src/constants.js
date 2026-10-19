export const SITE_URL = 'https://vitereact.marcopontili.com';
export const REPO_URL = 'https://github.com/marcop135/vite-react-tailwind-lint';
export const LICENSE_URL = `${REPO_URL}/blob/main/LICENSE`;
export const AUTHOR_URL = 'https://marcopontili.com';
export const PRIVACY_URL = '/privacy.html';

export const QUICKSTART = [
  `git clone ${REPO_URL}.git my-app`,
  'cd my-app && npm install',
  'npm run dev',
];

// Injected by vite.config.js and vitest.config.js from package-lock.json.
export const VERSIONS = __STACK_VERSIONS__;

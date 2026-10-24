# Getting started

## Install

Requires Node.js 22 (`nvm use` reads `.nvmrc`).

```bash
git clone https://github.com/marcop135/revitail.git my-app
cd my-app
rm -rf .git && git init
npm install
npm run dev
```

`rm -rf .git && git init` drops this repo's history so your project starts at its own first commit. The dev server opens on `http://localhost:5173`.

## Rename the project

| File                      | Change                                                               |
| ------------------------- | -------------------------------------------------------------------- |
| `package.json`            | `name`, `version`                                                    |
| `index.html`              | `<title>`, description, canonical, Open Graph, Twitter Card, JSON-LD |
| `public/site.webmanifest` | `name`, `short_name`                                                 |
| `src/constants.js`        | site, repo and author URLs                                           |

## Remove the demo

The page you see is the starter's own landing page. For a new app, delete or replace:

- `src/components/` except `ErrorBoundary.jsx` and `NotFound.jsx`
- `src/constants.js` and `src/hooks/useCopy.js`
- The tests in `src/App.test.jsx` that cover the demo
- `public/matomo.js` and its `<script>` tag in `index.html` and `public/privacy.html`
- `public/sitemap.xml`, `robots.txt`, `llms.txt`, `.well-known/security.txt` and `privacy.html`, or update them for your domain
- `.github/brand/` and the `brand:images` scripts in `package.json`
- `.github/workflows/deploy.yml` if you do not deploy over FTP (see [Deploy](./deploy.md))

`src/App.jsx` composes `ErrorBoundary > Header > MainContent > Footer`; start there.

## Imports

`@/` points to `src/` in Vite, Vitest and editors (`jsconfig.json`):

```js
import Header from '@/components/Header';
```

## Environment variables

Copy `.env.example` to `.env.local`. Only `VITE_`-prefixed variables reach client code, through `import.meta.env`, and they end up in the public bundle, so never put secrets there.

```js
const title = import.meta.env.VITE_APP_TITLE;
```

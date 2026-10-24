# Guides

## Add a component with a test

Components are function components wrapped in `React.memo`:

```jsx
// src/components/Greeting.jsx
import React from 'react';

function Greeting({ name }) {
  return <p className='text-ink'>Hello, {name}</p>;
}

export default React.memo(Greeting);
```

Put the test next to it. Vitest globals and the jest-dom matchers are already set up; the `/* global */` comment tells ESLint about them, as in `src/App.test.jsx`:

```jsx
// src/components/Greeting.test.jsx
/* global describe, it, expect */
import { render, screen } from '@testing-library/react';
import Greeting from '@/components/Greeting';

describe('Greeting', () => {
  it('greets by name', () => {
    render(<Greeting name='Ada' />);
    expect(screen.getByText('Hello, Ada')).toBeInTheDocument();
  });
});
```

Run `npm run test` to watch it.

## Add routes

The starter has one route: `src/App.jsx` renders the page on `/` and `NotFound` (with `noindex`) on any other path. For more pages, add a router:

```bash
npm install react-router
```

Wrap the app in `BrowserRouter`, declare a `Route` per page and keep `NotFound` as the `path='*'` route. The SPA fallback in [Deploy](./deploy.md#spa-fallback) already sends every path to `index.html`.

Load heavy pages with `React.lazy` and `Suspense`, as `src/components/MainContent.jsx` does for the sections below the fold.

## Use TypeScript

Vite and Vitest compile `.ts` and `.tsx` without extra config, and lint-staged already formats them. To type-check and lint them too:

1. `npm install -D typescript typescript-eslint @types/react @types/react-dom`
2. Add a `tsconfig.json` with `"jsx": "react-jsx"`, `"strict": true` and the `@/*` path from `jsconfig.json`, then delete `jsconfig.json`.
3. Add the `typescript-eslint` configs to `eslint.config.js`; its `files` glob covers `js` and `jsx` only.
4. Add `tsc --noEmit` to `release:check`.

## Pull updates from upstream

If you started from a clean history, merge Revitail's later changes like this:

```bash
git remote add upstream https://github.com/marcop135/revitail.git
git fetch upstream
git merge upstream/main --allow-unrelated-histories
```

The first merge conflicts wherever you changed a file; later merges only touch what changed since. Check `CHANGELOG.md` for what each release changed.

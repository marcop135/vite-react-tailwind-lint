import React from 'react';
import { REPO_URL } from '../constants';

function Header() {
  return (
    <header className='mb-10 flex flex-wrap items-center justify-between gap-3'>
      <a
        href='#main-content'
        className='sr-only rounded bg-white px-4 py-2 text-sky-700 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2'
      >
        Skip to main content
      </a>
      <h1 className='text-xl font-bold tracking-tight'>
        vite-react-tailwind-lint
      </h1>
      <a
        href={REPO_URL}
        className='text-link text-sm'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='View vite-react-tailwind-lint on GitHub'
      >
        GitHub
      </a>
    </header>
  );
}

export default React.memo(Header);

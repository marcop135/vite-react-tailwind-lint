import React from 'react';
import { REPO_URL } from '../constants';
import { ViteLogo } from './Logos';

const NAV = [
  { href: '/#stack', label: 'Stack' },
  { href: '/#pipeline', label: 'Pipeline' },
  { href: '/#scripts', label: 'Scripts' },
];

function Header() {
  return (
    <header className='flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6'>
      <a
        href='#main-content'
        className='focus-ring bg-bolt text-on-bolt sr-only rounded-md px-4 py-2 font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50'
      >
        Skip to main content
      </a>
      <a
        href='/'
        className='focus-ring flex min-h-11 items-center gap-2.5 rounded-md font-mono text-sm font-bold tracking-tight'
      >
        <ViteLogo className='size-6' />
        Revitail
      </a>
      <nav aria-label='Primary'>
        <ul className='flex flex-wrap items-center gap-x-1 text-sm' role='list'>
          {NAV.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className='focus-ring text-muted hover:text-ink inline-flex min-h-11 items-center rounded-md px-3 transition-colors'
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={REPO_URL}
              className='focus-ring border-line hover:border-ink ml-1 inline-flex min-h-11 items-center rounded-md border px-3 font-semibold transition-colors'
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);

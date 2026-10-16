import React from 'react';
import { AUTHOR_URL, LICENSE_URL, PRIVACY_URL, REPO_URL } from '../constants';

const LINKS = [
  { href: REPO_URL, label: 'Source on GitHub' },
  { href: LICENSE_URL, label: 'MIT License' },
  { href: PRIVACY_URL, label: 'Privacy' },
  { href: '/llms.txt', label: 'llms.txt' },
];

function Footer() {
  return (
    <footer className='border-line text-muted flex flex-col gap-4 border-t py-8 text-sm sm:flex-row sm:items-center sm:justify-between'>
      <p>
        Built and maintained by{' '}
        <a href={AUTHOR_URL} className='focus-ring text-link text-ink rounded'>
          Marco Pontili
        </a>
      </p>
      <nav aria-label='Footer'>
        <ul className='flex flex-wrap gap-x-5 gap-y-1' role='list'>
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className='focus-ring text-link inline-flex min-h-11 items-center rounded'
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default React.memo(Footer);

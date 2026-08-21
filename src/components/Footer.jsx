import React, { Fragment } from 'react';
import { AUTHOR_URL, LICENSE_URL, REPO_URL } from '../constants';

const LINKS = [
  { href: REPO_URL, label: 'GitHub' },
  { href: LICENSE_URL, label: 'MIT' },
  { href: AUTHOR_URL, label: 'Marco Pontili' },
];

function Footer() {
  return (
    <footer className='mt-12 text-center text-xs'>
      {LINKS.map(({ href, label }, index) => (
        <Fragment key={href}>
          {index > 0 && <span aria-hidden='true'> · </span>}
          <a
            href={href}
            className='text-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            {label}
          </a>
        </Fragment>
      ))}
    </footer>
  );
}

export default React.memo(Footer);

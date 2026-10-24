import React from 'react';
import { REPO_URL } from '../constants';

function Closing() {
  return (
    <section
      id='get-started'
      aria-labelledby='closing-heading'
      className='border-line border-t py-16 lg:py-24'
    >
      <div className='surface p-6 sm:p-10'>
        <h2
          id='closing-heading'
          className='font-display text-4xl leading-none font-bold tracking-[-0.02em] sm:text-5xl'
        >
          Start your next app on Revitail
        </h2>
        <p className='text-muted mt-4 max-w-2xl'>
          Free and open source under MIT. Clone it, run npm install, and the dev
          server, linters, tests and CI already work. Delete the demo page and
          build yours.
        </p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href={REPO_URL}
            className='focus-ring bg-react text-canvas inline-flex min-h-14 items-center rounded-lg px-7 text-lg font-semibold transition-opacity hover:opacity-90'
          >
            Get it on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Closing);

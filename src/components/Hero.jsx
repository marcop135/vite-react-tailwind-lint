import React from 'react';
import { VERSIONS } from '../constants';
import Quickstart from './Quickstart';
import StackIllustration from './StackIllustration';

const major = (version = '') => version.split('.')[0];

function Hero() {
  return (
    <section
      aria-labelledby='hero-heading'
      className='grid grid-cols-[minmax(0,1fr)] items-center gap-x-12 gap-y-10 pt-6 pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:pb-24'
    >
      <div className='flex min-w-0 flex-col items-start'>
        <p className='border-line bg-surface text-muted mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border px-3 py-1 font-mono text-xs'>
          <span className='bg-bolt size-1.5 rounded-full' aria-hidden='true' />
          React {major(VERSIONS.react)} · Tailwind CSS{' '}
          {major(VERSIONS.tailwindcss)} · Vite {major(VERSIONS.vite)} · MIT
        </p>
        <h1
          id='hero-heading'
          className='font-display text-[2.75rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl'
        >
          React and Tailwind on Vite, lint and CI already green.
        </h1>
        <p className='text-muted mt-6 max-w-xl text-lg text-pretty'>
          A Vite starter for React and Tailwind CSS with ESLint, Stylelint,
          HTMLHint, Prettier, Vitest and a tagged-release pipeline wired in and
          passing.
        </p>
      </div>
      <div className='w-full lg:col-span-2 lg:row-start-2'>
        <Quickstart />
      </div>
      <div className='lg:col-start-2 lg:row-start-1'>
        <StackIllustration />
      </div>
    </section>
  );
}

export default React.memo(Hero);

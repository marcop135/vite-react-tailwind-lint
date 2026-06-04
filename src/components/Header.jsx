import React from 'react';

function Header() {
  return (
    <header className='mb-6'>
      <a
        href='#main-content'
        className='sr-only rounded bg-white px-4 py-2 text-blue-700 focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2'
      >
        Skip to main content
      </a>
      <h1 className='text-3xl font-semibold transition hover:text-red-700'>
        App Interface
      </h1>
    </header>
  );
}

export default React.memo(Header);

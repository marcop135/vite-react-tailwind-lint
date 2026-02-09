import React from 'react';

function Header() {
  return (
    <header className='mb-6'>
      <h1 className='text-3xl font-semibold transition hover:text-red-500'>
        App Interface
      </h1>
    </header>
  );
}

export default React.memo(Header);

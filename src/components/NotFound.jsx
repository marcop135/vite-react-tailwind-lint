import React, { useEffect } from 'react';

function NotFound() {
  // A client-rendered miss still answers 200, so keep it out of the index.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.append(meta);
    return () => meta.remove();
  }, []);

  return (
    <section aria-labelledby='not-found-heading' className='py-24'>
      <p className='text-muted font-mono text-sm'>404</p>
      <h1
        id='not-found-heading'
        className='font-display mt-2 text-5xl leading-none font-extrabold tracking-[-0.02em]'
      >
        Nothing at this address.
      </h1>
      <p className='text-muted mt-4 max-w-md'>
        The starter has one page. Head back to it for the quick start and the
        stack.
      </p>
      <a
        href='/'
        className='focus-ring bg-bolt text-on-bolt mt-8 inline-flex min-h-11 items-center rounded-md px-5 font-semibold'
      >
        Back to the home page
      </a>
    </section>
  );
}

export default React.memo(NotFound);

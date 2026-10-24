import React, { useEffect } from 'react';

function NotFound() {
  // A client-rendered miss still answers 200, so keep it out of the index.
  // index.html ships its own robots tag; override it rather than adding a
  // second, conflicting one, and restore it on the way out.
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    const previous = meta?.content;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.append(meta);
    }
    meta.content = 'noindex';
    return () => {
      if (previous === undefined) meta.remove();
      else meta.content = previous;
    };
  }, []);

  return (
    <section aria-labelledby='not-found-heading' className='py-24'>
      <p className='text-muted font-mono text-sm'>404</p>
      <h1
        id='not-found-heading'
        className='font-display mt-2 text-5xl leading-none font-bold tracking-[-0.02em]'
      >
        Nothing at this address.
      </h1>
      <p className='text-muted mt-4 max-w-md'>
        The starter has one page. Head back to it for the quick start and the
        stack.
      </p>
      <a
        href='/'
        className='focus-ring bg-react text-canvas mt-8 inline-flex min-h-11 items-center rounded-md px-5 font-semibold transition-opacity hover:opacity-90'
      >
        Back to the home page
      </a>
    </section>
  );
}

export default React.memo(NotFound);

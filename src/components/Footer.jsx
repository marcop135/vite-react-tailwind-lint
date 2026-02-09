import React from 'react';

function Footer() {
  return (
    <footer className='mt-6 text-center dark:text-white'>
      <div className='text-base font-semibold'>App Interface</div>
      <small className='text-xs'>
        This project uses the{' '}
        <a
          href='https://github.com/marcop135/vite-react-tailwind-lint'
          className='underline hover:text-blue-500'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Visit vite-react-tailwind-lint on GitHub'
        >
          vite-react-tailwind-lint
        </a>
        .
      </small>
    </footer>
  );
}

export default React.memo(Footer);

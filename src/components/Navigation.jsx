import React from 'react';

function Navigation() {
  return (
    <nav className='mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-900'>
      <span className='font-semibold'>Brand</span>
      <ul className='flex gap-4' role='list'>
        <li>
          <a
            href='#dashboard'
            className='cursor-pointer hover:underline'
            aria-label='Navigate to Dashboard'
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href='#info'
            className='cursor-pointer hover:underline'
            aria-label='Navigate to Info'
          >
            Info
          </a>
        </li>
        <li>
          <a
            href='#actions'
            className='cursor-pointer hover:underline'
            aria-label='Navigate to Actions'
          >
            Actions
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Navigation);

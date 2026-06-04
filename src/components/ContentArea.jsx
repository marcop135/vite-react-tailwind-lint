import React from 'react';

function ContentArea() {
  return (
    <section
      aria-label='Content'
      className='min-h-lvh rounded-lg bg-white p-4 shadow md:w-3/4 dark:bg-gray-900 dark:text-gray-100'
    >
      <p>Content Area</p>
      <button
        type='button'
        className='mt-4 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2'
      >
        Primary Action
      </button>
    </section>
  );
}

export default React.memo(ContentArea);

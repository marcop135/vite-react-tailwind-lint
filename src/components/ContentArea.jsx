import React from 'react';

function ContentArea() {
  return (
    <section className='min-h-lvh rounded-lg bg-white p-4 shadow md:w-3/4 dark:bg-gray-900 dark:text-gray-100'>
      <p>Content Area</p>
      <button className='mt-4 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'>
        Primary Action
      </button>
    </section>
  );
}

export default React.memo(ContentArea);

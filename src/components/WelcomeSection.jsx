import React from 'react';

function WelcomeSection() {
  return (
    <section className='mb-4 rounded-lg bg-sky-200 p-6 text-center dark:bg-gray-700 dark:text-white'>
      <h2 className='mb-3 text-2xl font-medium'>Welcome.</h2>
      <p className='mx-auto text-base'>
        This is a fast, modern React starter template with Tailwind CSS and
        Vite, focused on linting and best practices.
      </p>
    </section>
  );
}

export default React.memo(WelcomeSection);

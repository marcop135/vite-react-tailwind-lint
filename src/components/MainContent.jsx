import React, { lazy, Suspense } from 'react';

const Sidebar = lazy(() => import('./Sidebar'));
const ContentArea = lazy(() => import('./ContentArea'));

function MainContent() {
  return (
    <main className='flex flex-col gap-4 md:flex-row'>
      <Suspense
        fallback={
          <div className='min-h-lvh rounded-lg bg-gray-100 p-4 shadow md:w-1/4 dark:bg-gray-900 dark:text-gray-100'>
            Loading...
          </div>
        }
      >
        <Sidebar />
      </Suspense>
      <Suspense
        fallback={
          <div className='min-h-lvh rounded-lg bg-white p-4 shadow md:w-3/4 dark:bg-gray-900 dark:text-gray-100'>
            Loading...
          </div>
        }
      >
        <ContentArea />
      </Suspense>
    </main>
  );
}

export default React.memo(MainContent);

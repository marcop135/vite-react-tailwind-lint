import React, { lazy, Suspense } from 'react';

const FeatureGrid = lazy(() => import('./FeatureGrid'));
const ScriptsTable = lazy(() => import('./ScriptsTable'));

function Skeleton({ label }) {
  return <p className='surface p-4'>{label}</p>;
}

function MainContent() {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='flex flex-col gap-10 focus-visible:outline-2 focus-visible:outline-offset-2'
    >
      <Suspense fallback={<Skeleton label='Loading the stack...' />}>
        <FeatureGrid />
      </Suspense>
      <Suspense fallback={<Skeleton label='Loading scripts...' />}>
        <ScriptsTable />
      </Suspense>
    </main>
  );
}

export default React.memo(MainContent);

import React, { lazy, Suspense } from 'react';
import Hero from './Hero';
import NotFound from './NotFound';
import Closing from './Closing';

const Stack = lazy(() => import('./Stack'));
const Pipeline = lazy(() => import('./Pipeline'));
const ScriptsTable = lazy(() => import('./ScriptsTable'));

function Skeleton({ label }) {
  return (
    <p className='surface text-muted my-16 grid min-h-64 place-items-center p-4'>
      {label}
    </p>
  );
}

function MainContent({ notFound = false }) {
  return (
    <main
      id='main-content'
      tabIndex={-1}
      className='focus-visible:outline-2 focus-visible:outline-offset-2'
    >
      {notFound ? (
        <NotFound />
      ) : (
        <>
          <Hero />
          <Suspense fallback={<Skeleton label='Loading the stack...' />}>
            <Stack />
          </Suspense>
          <Suspense fallback={<Skeleton label='Loading the pipeline...' />}>
            <Pipeline />
          </Suspense>
          <Suspense fallback={<Skeleton label='Loading scripts...' />}>
            <ScriptsTable />
          </Suspense>
          <Closing />
        </>
      )}
    </main>
  );
}

export default React.memo(MainContent);

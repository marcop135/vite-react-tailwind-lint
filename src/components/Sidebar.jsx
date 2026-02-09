import React from 'react';

function Sidebar() {
  return (
    <aside className='min-h-lvh rounded-lg bg-gray-100 p-4 shadow md:w-1/4 dark:bg-gray-900 dark:text-gray-100'>
      Panel A
    </aside>
  );
}

export default React.memo(Sidebar);

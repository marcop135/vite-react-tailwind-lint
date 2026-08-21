import React from 'react';

// No library versions here: package.json is the single source of truth, and a
// dep bump must not be able to make this page lie. Node 22+ stays because it is
// a real compatibility floor.
const FEATURES = [
  {
    title: 'Build',
    items: ['Vite', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Quality',
    items: [
      'ESLint, Stylelint, HTMLHint',
      'Prettier with Tailwind ordering',
      'Vitest and Testing Library',
    ],
  },
  {
    title: 'Automation',
    items: [
      'Husky pre-commit lint and format',
      'CI on Node 22+',
      'Tag-driven releases',
    ],
  },
];

function FeatureGrid() {
  return (
    <section id='stack' aria-labelledby='stack-heading'>
      <h2 id='stack-heading' className='mb-4 text-xl font-bold tracking-tight'>
        Stack
      </h2>
      <ul className='grid gap-4 sm:grid-cols-3' role='list'>
        {FEATURES.map(({ title, items }) => (
          <li key={title} className='surface p-4'>
            <h3 className='mb-2 font-semibold text-sky-700 dark:text-sky-400'>
              {title}
            </h3>
            <ul className='space-y-1 text-sm' role='list'>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default React.memo(FeatureGrid);

import React from 'react';
import { VERSIONS } from '../constants';

// Every version below comes from package-lock.json at build time, so a
// dependency bump updates this list on the next build.
const GROUPS = [
  {
    title: 'Build',
    accent: 'bg-vite',
    items: [
      { name: 'Vite', pkg: 'vite', role: 'Dev server and bundler' },
      { name: 'React', pkg: 'react', role: 'UI library' },
      { name: 'Tailwind CSS', pkg: 'tailwindcss', role: 'Utility CSS' },
      { name: '@vitejs/plugin-react', pkg: '@vitejs/plugin-react' },
      { name: '@tailwindcss/vite', pkg: '@tailwindcss/vite' },
    ],
  },
  {
    title: 'Lint and format',
    accent: 'bg-bolt',
    items: [
      { name: 'ESLint', pkg: 'eslint', role: 'JS and JSX, React rules' },
      { name: 'Stylelint', pkg: 'stylelint', role: 'CSS' },
      { name: 'HTMLHint', pkg: 'htmlhint', role: 'index.html' },
      { name: 'Prettier', pkg: 'prettier', role: 'Formatting' },
      {
        name: 'prettier-plugin-tailwindcss',
        pkg: 'prettier-plugin-tailwindcss',
      },
    ],
  },
  {
    title: 'Test',
    accent: 'bg-react',
    items: [
      { name: 'Vitest', pkg: 'vitest', role: 'Test runner' },
      {
        name: 'Testing Library',
        pkg: '@testing-library/react',
        role: 'React queries',
      },
      { name: 'jsdom', pkg: 'jsdom', role: 'Browser environment' },
      { name: '@vitest/coverage-v8', pkg: '@vitest/coverage-v8' },
    ],
  },
  {
    title: 'Automation',
    accent: 'bg-ink',
    items: [
      { name: 'Husky', pkg: 'husky', role: 'Git hooks' },
      { name: 'lint-staged', pkg: 'lint-staged', role: 'Staged files only' },
      { name: 'Node.js', pkg: 'node', role: 'Pinned in .nvmrc' },
    ],
  },
];

const slug = (title) => `stack-${title.toLowerCase().replace(/\W+/g, '-')}`;

function Stack() {
  return (
    <section
      id='stack'
      aria-labelledby='stack-heading'
      className='border-line border-t py-16 lg:py-24'
    >
      <div className='mb-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-end'>
        <h2
          id='stack-heading'
          className='font-display text-4xl leading-none font-extrabold tracking-[-0.02em] sm:text-5xl'
        >
          What is wired in
        </h2>
        <p className='text-muted max-w-xl lg:justify-self-end'>
          Versions are read from{' '}
          <code className='font-mono'>package-lock.json</code> when the site
          builds, so this list matches what{' '}
          <code className='font-mono'>npm install</code> gives you.
        </p>
      </div>
      <div className='border-line bg-line grid gap-px overflow-hidden rounded-md border sm:grid-cols-2 lg:grid-cols-4'>
        {GROUPS.map(({ title, accent, items }) => (
          <section
            key={title}
            aria-labelledby={slug(title)}
            className='bg-surface p-5'
          >
            <h3
              id={slug(title)}
              className='text-muted mb-4 flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase'
            >
              <span
                className={`size-2 rounded-sm ${accent}`}
                aria-hidden='true'
              />
              {title}
            </h3>
            <dl className='space-y-3'>
              {items.map(({ name, pkg, role }) => (
                <div
                  key={pkg}
                  className='flex items-baseline justify-between gap-3'
                >
                  <dt className='min-w-0'>
                    <span
                      className={
                        role
                          ? 'font-semibold'
                          : 'text-muted font-mono text-xs break-all'
                      }
                    >
                      {name}
                    </span>
                    {role && (
                      <span className='text-muted block text-sm'>{role}</span>
                    )}
                  </dt>
                  <dd className='shrink-0 font-mono text-xs tabular-nums'>
                    {VERSIONS[pkg]}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Stack);

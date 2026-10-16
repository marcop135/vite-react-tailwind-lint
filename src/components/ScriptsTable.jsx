import React from 'react';

const SCRIPTS = [
  { command: 'npm run dev', description: 'Dev server on port 5173' },
  { command: 'npm run build', description: 'Production build to dist/' },
  { command: 'npm run lint', description: 'ESLint + Stylelint + HTMLHint' },
  { command: 'npm run test:ci', description: 'Vitest, single run' },
  {
    command: 'npm run release:check',
    description: 'Every CI gate in one command',
  },
];

function ScriptsTable() {
  return (
    <section
      id='scripts'
      aria-labelledby='scripts-heading'
      className='border-line grid gap-8 border-t py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:py-24'
    >
      <div>
        <h2
          id='scripts-heading'
          className='font-display text-4xl leading-none font-extrabold tracking-[-0.02em] sm:text-5xl'
        >
          Scripts
        </h2>
        <p className='text-muted mt-4 max-w-sm'>
          The five you will run most. The README lists the rest.
        </p>
      </div>
      <div className='surface overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <caption className='sr-only'>npm scripts in this starter</caption>
          <thead className='sr-only'>
            <tr>
              <th scope='col'>Command</th>
              <th scope='col'>What it does</th>
            </tr>
          </thead>
          <tbody>
            {SCRIPTS.map(({ command, description }) => (
              <tr key={command} className='border-line border-b last:border-0'>
                <th
                  scope='row'
                  className='text-vite px-4 py-3 font-mono font-normal whitespace-nowrap'
                >
                  {command}
                </th>
                <td className='text-muted px-4 py-3'>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default React.memo(ScriptsTable);

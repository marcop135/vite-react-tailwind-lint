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
    <section id='scripts' aria-labelledby='scripts-heading'>
      <h2
        id='scripts-heading'
        className='mb-4 text-xl font-bold tracking-tight'
      >
        Scripts
      </h2>
      <div className='surface overflow-x-auto'>
        <table className='w-full text-left text-sm'>
          <caption className='sr-only'>npm scripts in this starter</caption>
          <tbody>
            {SCRIPTS.map(({ command, description }) => (
              <tr
                key={command}
                className='border-b border-slate-100 last:border-0 dark:border-slate-800'
              >
                <th
                  scope='row'
                  className='p-3 font-mono font-normal whitespace-nowrap text-sky-700 dark:text-sky-400'
                >
                  {command}
                </th>
                <td className='p-3'>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default React.memo(ScriptsTable);

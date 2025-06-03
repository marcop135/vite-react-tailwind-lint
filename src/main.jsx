import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    <div className='bg-sky-300 p-4 text-center font-sans dark:bg-gray-800 dark:text-white'>
      <div className='container mx-auto p-4'>
        <header className='mb-6'>
          <h1 className='text-3xl font-semibold transition hover:text-red-500'>
            App Interface
          </h1>
        </header>

        <nav className='mb-4 flex items-center justify-between rounded-lg bg-white p-4 shadow dark:bg-gray-900'>
          <span className='font-semibold'>Brand</span>
          <ul className='flex gap-4'>
            <li className='cursor-pointer hover:underline'>Dashboard</li>
            <li className='cursor-pointer hover:underline'>Info</li>
            <li className='cursor-pointer hover:underline'>Actions</li>
          </ul>
        </nav>

        <section className='mb-4 rounded-lg bg-sky-200 p-6 text-center dark:bg-gray-700 dark:text-white'>
          <h2 className='mb-3 text-2xl font-medium'>Welcome.</h2>
          <p className='mx-auto text-base'>
            This is a fast, modern React starter template with Tailwind CSS and
            Vite, focused on linting and best practices.
          </p>
        </section>

        <main className='flex flex-col gap-4 md:flex-row'>
          <aside className='min-h-lvh rounded-lg bg-gray-100 p-4 shadow md:w-1/4 dark:bg-gray-900 dark:text-gray-100'>
            Panel A
          </aside>

          <section className='min-h-lvh rounded-lg bg-white p-4 shadow md:w-3/4 dark:bg-gray-900 dark:text-gray-100'>
            <p>Content Area</p>
            <button className='mt-4 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'>
              Primary Action
            </button>
          </section>
        </main>

        <footer className='mt-6 text-center dark:text-white'>
          <div className='text-base font-semibold'>App Interface</div>
          <small className='text-xs'>
            This project uses the{' '}
            <a
              href='https://github.com/marcop135/vite-react-tailwind-lint'
              className='underline hover:text-blue-500'
            >
              vite-react-tailwind-lint
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

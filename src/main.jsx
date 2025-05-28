import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    /* htmlhint */
    <div className='bg-sky-300 p-4 text-center font-serif dark:bg-gray-800 dark:text-white'>
      <div className='container mx-auto p-4'>
        <header className='mb-6'>
          <h1 className='text-3xl font-bold transition hover:text-red-500'>
            My Website
          </h1>
        </header>

        <nav className='mb-4 flex items-center justify-between rounded-lg border bg-white p-4 shadow dark:bg-gray-900'>
          <span className='font-bold'>Logo</span>
          <ul className='flex gap-4'>
            <li className='cursor-pointer hover:underline'>Home</li>
            <li className='cursor-pointer hover:underline'>About</li>
            <li className='cursor-pointer hover:underline'>Contact</li>
          </ul>
        </nav>

        <section className='mb-4 rounded-lg border bg-sky-200 py-12 text-center dark:bg-sky-900'>
          <h2 className='mb-4 text-4xl font-bold'>Welcome</h2>
          <p className='text-lg'>This is a beautiful, responsive layout.</p>
        </section>

        <main className='flex flex-col gap-4 md:flex-row'>
          <aside className='min-h-lvh rounded-lg border border-gray-300 bg-gray-100 p-4 md:w-1/4 dark:text-black'>
            Sidebar content
          </aside>

          <section className='min-h-lvh rounded-lg border border-gray-300 bg-white p-4 shadow md:w-3/4 dark:text-black'>
            <p>Main content area</p>
            <button className='mt-4 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'>
              Click me
            </button>
          </section>
        </main>

        <footer className='mt-6 text-center text-sm dark:text-white'>
          © 2025 My Website
        </footer>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App() {
  return (
    /* htmlhint */
    <div className='bg-sky-300 p-4 text-center font-serif dark:bg-gray-800'>
      <h1 className='font text-3xl font-bold dark:text-white'>Hello World!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

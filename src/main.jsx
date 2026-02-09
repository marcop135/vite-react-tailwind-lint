import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Navigation from './components/Navigation';
import WelcomeSection from './components/WelcomeSection';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <ErrorBoundary>
      <div className='bg-sky-300 p-4 text-center font-sans dark:bg-gray-800 dark:text-white'>
        <div className='container mx-auto p-4'>
          <Header />
          <Navigation />
          <WelcomeSection />
          <MainContent />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

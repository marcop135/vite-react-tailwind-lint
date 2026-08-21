import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './style.css';

function App() {
  return (
    <ErrorBoundary>
      {/* Sky ramp and white type mirror public/og/hero.png; the dark ramp is
          the same hue taken down to navy. */}
      <div className='min-h-lvh bg-linear-to-b from-sky-600 to-sky-800 p-4 font-sans text-white dark:from-sky-950 dark:to-slate-950'>
        <div className='mx-auto max-w-[1000px] p-4'>
          <Header />
          <Hero />
          <MainContent />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

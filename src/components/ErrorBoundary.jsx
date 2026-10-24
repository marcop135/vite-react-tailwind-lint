import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='bg-canvas text-ink flex min-h-lvh items-center justify-center p-4 font-sans'>
          <div className='surface p-8'>
            <h1 className='font-display mb-4 text-2xl font-bold'>
              Something went wrong
            </h1>
            <p className='text-muted mb-4'>
              An error occurred while rendering this page.
            </p>
            <button
              type='button'
              onClick={() => window.location.reload()}
              className='focus-ring bg-react text-canvas inline-flex min-h-11 items-center rounded-md px-4 font-semibold transition-opacity hover:opacity-90'
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

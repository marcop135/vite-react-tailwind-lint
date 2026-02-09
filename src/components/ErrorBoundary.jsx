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
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
          <div className='rounded-lg bg-white p-8 shadow-lg'>
            <h1 className='mb-4 text-2xl font-bold text-red-600'>
              Something went wrong
            </h1>
            <p className='mb-4 text-gray-700'>
              An error occurred while rendering this page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className='rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700'
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

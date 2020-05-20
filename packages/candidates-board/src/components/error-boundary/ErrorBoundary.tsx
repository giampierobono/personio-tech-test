import './ErrorBoundary.scss';
import React from 'react';

class ErrorBoundary extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-function-return-type
  static getDerivedStateFromError(error: any) {
    console.error(error);
    return { hasError: true };
  }

  render(): React.ReactNode {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((this.state as any).hasError) {
      return (
        <div className="container">
          <h1>If you see this...something really bad happened</h1>
        </div>
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,react/prop-types
    return (this.props as any).children;
  }
}

export default ErrorBoundary;

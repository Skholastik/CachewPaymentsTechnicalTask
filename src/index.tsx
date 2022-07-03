import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ErrorFallback } from '@/app/components/ErrorFallback';
import { AppRoutes } from '@/app/routes';
import { Store } from '@/app/store';
import { Notification } from '@/features/Notifications';
import { ThemeProvider } from '@/features/Theme';
import { Spinner } from '@/shared';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={Spinner}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider>
          <CssBaseline />
          <StoreProvider store={Store}>
            <Notification />
            <Router>
              <AppRoutes />
            </Router>
          </StoreProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

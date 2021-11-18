import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Baseline from '@material-ui/core/CssBaseline';

import { Notification } from './components/Notification';
import { AuthProvider } from './context/auth.context';
import { NotificationProvider } from './context/notification.context';
import { ThemeProvider } from './context/theme.context';
import { Routes } from './pages';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeProvider>
        <NotificationProvider>
          <AuthProvider>
            <Baseline />
            <Notification />
            <Routes />
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

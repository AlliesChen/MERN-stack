// @ts-check

import { render } from 'preact';
import { App } from './app';
import './index.css';
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { AuthContextProvider } from './context/AuthContext';

render(
  <AuthContextProvider>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </AuthContextProvider>,
  document.getElementById('app'),
);

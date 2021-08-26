import React from 'react';
import ReactDOM from 'react-dom';
import App from './core/components/App';
import { reportWebVitals } from './core';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

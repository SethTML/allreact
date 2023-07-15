import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio3 from './portfolio3/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector(".portfolio"));
root.render(
  <React.StrictMode>
    <Portfolio3 />
  </React.StrictMode>
);

reportWebVitals();

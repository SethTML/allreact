import React from 'react';
import ReactDOM from 'react-dom/client';
import Immerfit from './immerfit/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector(".immerfit"));
root.render(
  <React.StrictMode>
    <Immerfit />
  </React.StrictMode>
);

reportWebVitals();

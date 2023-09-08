import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.js creates a root variable which contains what the
// app returns and renders it to the index page to the rood div with id=root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './app.css'; // adaugă și aici css-ul dacă nu l-ai adăugat

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';

const container = document.querySelector('#root');
const appRoot = ReactDom.createRoot(container);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

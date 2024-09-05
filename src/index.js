import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Make sure this import is correct
import './styles/main.scss';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('Rendering App component:', App);  // Add this line for debugging
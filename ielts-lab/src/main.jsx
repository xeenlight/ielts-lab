import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/variables.css';
import './i18n';
import FacebookPixel from './components/FacebookPixel/FacebookPixel.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FacebookPixel />
    <App />
  </React.StrictMode>
);

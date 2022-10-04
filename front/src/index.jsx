import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp()
}
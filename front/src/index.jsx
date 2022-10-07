import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const startApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (window.cordova) {
  localStorage.setItem("platform", "mobile")
  document.addEventListener('deviceready', startApp, false)
} else {
  localStorage.setItem("url", "http://0.0.0.0:8080")
  localStorage.setItem("platform", "web")
  startApp()
}

reportWebVitals();

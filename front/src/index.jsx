import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './css/colors.css' 
import './css/index.css'

const startApp = () => {
    console.log(localStorage.getItem('url'))
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<App />)
}

if (window.cordova) {
    localStorage.setItem("platform", "mobile")
    document.addEventListener('deviceready', startApp, false)
} else {
    localStorage.setItem("url", "http://0.0.0.0:8080")
    localStorage.setItem("platform", "web")
    startApp()
}

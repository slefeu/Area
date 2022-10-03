import './App.css';
import Login from './Authentification/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react'
import Register from './Authentification/Register.jsx'
import Login from './Authentification/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/app.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
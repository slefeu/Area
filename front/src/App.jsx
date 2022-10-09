import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from "./Authentification/Register.jsx"
import Login from "./Authentification/Login.jsx"
import LogoutUser from "./Authentification/LogOut.jsx"
import Home from "./Home"

function checkAuth(path) {
  if (localStorage.getItem("token") != null)
    return (<Home />)
  if (path === "login")
    return (<Login />);
  if (path === "register")
    return (<Register />);
  return (<LogoutUser />);
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={checkAuth("login")} />
          <Route path="/login" element={checkAuth("login")} />
          <Route path="/register" element={checkAuth("register")} />
          <Route path="/home" element={checkAuth("home")} />
          <Route path="/logout" element={<LogoutUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
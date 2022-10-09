import { HashRouter, Routes, Route } from "react-router-dom"

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
      <HashRouter>
        <Routes>
          <Route path="/" element={checkAuth("login")} />
          <Route path="/login" element={checkAuth("login")} />
          <Route path="/register" element={checkAuth("register")} />
          <Route path="/home" element={checkAuth("home")} />
          <Route path="/logout" element={<LogoutUser />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
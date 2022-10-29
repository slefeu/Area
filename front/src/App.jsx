import { HashRouter, Routes, Route } from "react-router-dom"

import Register from "./Authentification/Register.jsx"
import Login from "./Authentification/Login.jsx"
import LogoutUser from "./Authentification/LogOut.jsx"
import Home from "./Pages/Home.jsx"
import Create from "./Pages/Create.jsx"
import Edit from "./Pages/Edit.jsx"

function App() {
    return (
        <>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logout" element={<LogoutUser />} />
                <Route path='/create' element={<Create/>} />
                <Route path='/edit/:id' element={<Edit/>} />
            </Routes>
        </HashRouter>
        </>
    );
}

export default App;
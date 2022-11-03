import { HashRouter, Routes, Route } from "react-router-dom"

import Register from "./Authentification/Register"
import Login from "./Authentification/Login"
import LogoutUser from "./Authentification/LogOut"
import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Edit from "./Pages/Edit"
import UserProfil from "./Settings/UserProfil"
import Appearance from "./Settings/Appearance"
import Identification from "./Settings/Identification"
import APIPage from "./Settings/KeyManagement"
import Admin from "./Pages/Admin"

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
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/profil' element={<UserProfil />} />
                    <Route path='/identification' element={<Identification />} />
                    <Route path='/appearance' element={<Appearance />} />
                    <Route path='/keys' element={<APIPage />} />
                    <Route path='/admin' element={<Admin />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
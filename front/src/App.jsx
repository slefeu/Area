import { HashRouter, Routes, Route, Link } from "react-router-dom"

import Register from "./Authentification/Register"
import Login from "./Authentification/Login"
import LogoutUser from "./Authentification/LogOut"
import Home from "./Pages/Home"
import Create from "./Pages/Create"
import UserProfil from "./Settings/UserProfil"
import Appearance from "./Settings/Appearance"
import Identification from "./Settings/Identification"
import APIPage from "./Settings/KeyManagement"
import Admin from "./Pages/Admin"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
    if (window.location.href.includes("code")) {
        var url = new URL(window.location.href)
        var access_token = url.searchParams.get("code")
        localStorage.setItem("spotifyToken", access_token)
     }

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_PUBLIC}>
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
        </GoogleOAuthProvider>
    );
}

export default App;


// import { Link } from "react-router-dom"

// export function NavItem({icon, name, link, classes}) {
//     return (
//         <Link to={link} className={`navItem ${classes}`}>
//             <div className="navIcon">{icon}</div>
//             <div className="navText">{name}</div>
//         </Link>
//     )
// }
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

function App() {
    if (window.location.href.includes("code")) {
        var url = new URL(window.location.href)
        var access_token = url.searchParams.get("code")
        localStorage.setItem("spotifyToken", access_token)
     }

    return (
        <>
        <HashRouter>
            <Link id="toHome" to="/Home" tabIndex="1">
                Return to Home
            </Link>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/home" exact element={<Home />} />
                <Route path="/logout" exact element={<LogoutUser />} />
                <Route path='/create' exact element={<Create />} />
                <Route path='/profil' exact element={<UserProfil />} />
                <Route path='/identification' exact element={<Identification />} />
                <Route path='/appearance' exact element={<Appearance />} />
                <Route path='/keys' exact element={<APIPage />} />
                <Route path='/admin' exact element={<Admin />} />
            </Routes>
        </HashRouter>
        </>
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
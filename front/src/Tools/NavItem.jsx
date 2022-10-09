import '../css/navbar.css'
import '../css/colors.css'

import { Link } from "react-router-dom"

function NavItem({icon, name, link, classes}) {
    return (
        <Link to={link} className={`navItem ${classes}`}>
            <div className="navIcon">{icon}</div>
            <div className="navText">{name}</div>
        </Link>
    )
}

export default NavItem
import './css/navbar.css'
import './css/colors.css'

function NavItem({icon, name, link}) {
    return (
        <a href={link} className="navItem">
            <div className="navIcon">{icon}</div>
            <div className="navText">{name}</div>
        </a>
    )
}

export default NavItem
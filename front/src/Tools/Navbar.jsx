import '../css/navbar.css'
import '../css/colors.css'

import {NavItem, NavButton} from './NavItem'
import SwitchTheme from './SwitchTheme'

import { AiFillHome, AiOutlinePlus, AiFillBook, AiFillSetting, AiOutlineUser, AiOutlineLogout, AiFillEdit } from "react-icons/ai"

function Navbar({ currentPage }) {
    SwitchTheme()

    return (
        <div className="navbar">
            <div className="navbarTop">
                <h1 className="navbarTitle">AREA</h1>
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiFillHome />} name="Home" classes={`${currentPage === "Home" ? "active" : ""}`} link="/home" />
                <NavItem icon={<AiOutlinePlus />} name="Create" classes={`cornerBtn ${currentPage === "Create" ? "active" : ""}`} link="/create"/>

                <div className="line"></div>

                <NavItem icon={<AiFillBook />} name="Documentation" classes={`wip ${currentPage === "Documentation" ? "active" : ""}`} />
                <NavItem icon={<AiFillSetting />} name="Settings" classes={`wip ${currentPage === "Settings" ? "active" : ""}`}/>

                <NavItem icon={<AiOutlineUser />} name="Profil" classes={`right wip ${currentPage === "Profil" ? "active" : ""}`} />
                <NavItem icon={<AiOutlineLogout />} classes={`right`} link="/logout"/>
            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiOutlineUser />} name="Profil" classes={`wip ${currentPage === "Profil" ? "active" : ""}`} />
                <NavItem icon={<AiOutlineLogout />} classes={`fixedRight`} link="/logout"/>
                <NavButton icon={<AiFillEdit />} fun={SwitchTheme}>theme</NavButton>
            </div>
        </div>
    )
}

export default Navbar
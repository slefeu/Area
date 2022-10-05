import './css/navbar.css'
import './css/colors.css'

import NavItem from './navItem'

import { AiFillHome, AiOutlinePlus, AiFillBook, AiFillSetting, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'

function Navbar() {
    return (
        <div className="navbar">
        
            <div className="navbarTop">
                <h1 className="navbarTitle">AREA</h1>
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiFillHome />} name="Home" link="/" />
                <NavItem icon={<AiOutlinePlus />} name="Create" classes="add"/>

                <div className="line"></div>

                <NavItem icon={<AiFillBook />} name="Documentation" />
                <NavItem icon={<AiFillSetting />} name="Settings" />

                <NavItem icon={<AiOutlineUser />} name="Profil" classes="right" />
                <NavItem icon={<AiOutlineLogout />} name="" classes="right"/>
            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiOutlineUser />} name="Profil" />
                <NavItem icon={<AiOutlineLogout />} name="" classes="fixedRight"/>
            </div>
        </div>
    )
}

export default Navbar
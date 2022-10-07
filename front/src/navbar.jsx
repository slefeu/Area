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
                <NavItem icon={<AiOutlinePlus />} name="Create" link="/" classes="add"/>

                <div className="line"></div>

                <NavItem icon={<AiFillBook />} name="Documentation" link="/" />
                <NavItem icon={<AiFillSetting />} name="Settings" link="/" />

                <NavItem icon={<AiOutlineUser />} name="Profil" link="/" classes="right" />
                <NavItem icon={<AiOutlineLogout />} name="" link="/" classes="right"/>
            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiOutlineUser />} name="Profil" link="/" />
                <NavItem icon={<AiOutlineLogout />} name="" link="/" classes="fixedRight"/>
            </div>
        </div>
    )
}

export default Navbar
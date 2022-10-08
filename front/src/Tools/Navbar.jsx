import '../css/navbar.css'
import '../css/colors.css'

import NavItem from './NavItem'

import { AiFillHome, AiOutlinePlus, AiFillBook, AiFillSetting, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'

function Navbar() {
    return (
        <div className="navbar">
        
            <div className="navbarTop">
                <h1 className="navbarTitle">AREA</h1>
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiFillHome />} name="Home" link="/home" />
                <NavItem icon={<AiOutlinePlus />} name="Create" classes="add" link="/create"/>

                <div className="line"></div>

                <NavItem icon={<AiFillBook />} name="Documentation" classes="wip" />
                <NavItem icon={<AiFillSetting />} name="Settings" classes="wip"/>

                <NavItem icon={<AiOutlineUser />} name="Profil" classes="right wip" />
                <NavItem icon={<AiOutlineLogout />} classes="right wip"/>
            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiOutlineUser />} name="Profil" classes="wip" />
                <NavItem icon={<AiOutlineLogout />} classes="fixedRight wip"/>
            </div>
        </div>
    )
}

export default Navbar
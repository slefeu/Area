import './css/navbar.css'
import './css/colors.css'

import NavItem from './navItem'

import { AiFillHome, AiOutlinePlus, AiFillBook, AiFillSetting, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'

function Navbar() {
    return (
        <div className="navbar">
        
            <div className="navbarTop">
                <h1 className="navbarTitle">AREA</h1>
                <input type="text" className="navbarSearch" placeholder="🔍 Search" />
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiFillHome />} name="Home" link="/" />
                <NavItem icon={<AiOutlinePlus />} name="Create" link="/" />

                <div className="line"></div>

                <NavItem icon={<AiFillBook />} name="Documentation" link="/" />
                <NavItem icon={<AiFillSetting />} name="Settings" link="/" />
            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiOutlineUser />} name="Profile" link="/" />
                <a href="/" className="navItem">
                    <div className="navIcon fixedRight"><AiOutlineLogout /></div>
                </a>
            </div>
        </div>
    )
}

export default Navbar
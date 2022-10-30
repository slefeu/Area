
import React from "react"
import { NavItem } from "../Tools/NavItem"
import SwitchTheme from "../Tools/SwitchTheme"

import { AiFillHome, AiOutlineUser, AiOutlineLogout, AiFillEdit, AiOutlineKey } from "react-icons/ai"

import "../css/navbar.css"

function SettingsNavBar({ currentPage }) {
    SwitchTheme()
    return (
        <div className="navbar">
            <div className="navbarTop">
                <h1 className="navbarTitle">Settings</h1>
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiOutlineUser />} name="Profil" classes={`cornerBtn ${currentPage === "UserProfil" ? "active" : ""}`} link="/profil" />
                <NavItem icon={<AiOutlineUser />} name="Identification" classes={`cornerBtn ${currentPage === "Identification" ? "active" : ""}`} link="/identification" />
                <NavItem icon={<AiOutlineKey />} name="Handle Your Keys" classes={`cornerBtn ${currentPage === "API" ? "active" : ""}`} link="/keys" />
                <NavItem icon={<AiFillEdit />} name="Appearance" classes={`cornerBtn ${currentPage === "Appearance" ? "active" : ""}`} link="/appearance" />
            </div>

            <div className="line"></div>

            <div className="navbarBottom">
                <NavItem icon={<AiFillHome />} classes={`${currentPage === "Home" ? "active" : ""}`} link="/home" />
                <NavItem icon={<AiOutlineLogout />} classes={`fixedRight`} link="/logout" />
            </div>
        </div>

    );
}

export default SettingsNavBar;
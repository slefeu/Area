
import React from "react"
import { NavItem } from "../Tools/NavItem"

import { AiFillHome, AiOutlineUser, AiOutlineLogout, AiFillEdit, AiOutlineKey, AiOutlineCloudUpload } from "react-icons/ai"

import "../css/navbar.css"

function SettingsNavBar({ currentPage }) {
    return (
        <div className="navbar">

            <div className="navbarTop">
                <h1 className="navbarTitle">Settings</h1>
            </div>

            <div className="navbarMiddle">
                <NavItem icon={<AiOutlineUser />} name="Profil" classes={`${currentPage === "UserProfil" ? "active" : ""}`} link="/profil" />
                <NavItem icon={<AiOutlineCloudUpload />} name="Identification" classes={`${currentPage === "Identification" ? "active" : ""}`} link="/identification" />
                <NavItem icon={<AiOutlineKey />} name="Handle Your Keys" classes={`${currentPage === "API" ? "active" : ""}`} link="/keys" />
                <NavItem icon={<AiFillEdit />} name="Appearance" classes={`${currentPage === "Appearance" ? "active" : ""}`} link="/appearance" />
                <NavItem icon={<AiFillHome />} classes={`right ${currentPage === "Home" ? "active" : ""}`} link="/home" />
                <NavItem icon={<AiOutlineLogout />} classes={`right`} link="/logout" />

                <div className="line"></div>

            </div>

            <div className="navbarBottom">
                <NavItem icon={<AiFillHome />} classes={`${currentPage === "Home" ? "active" : ""}`} link="/home" />
                <NavItem icon={<AiOutlineLogout />} classes={`fixedRight`} link="/logout" />
            </div>
        </div>

    );
}

export default SettingsNavBar;
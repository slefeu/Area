import React, { setElement } from "react"
import { Navigate } from "react-router-dom"
import SettingsNavBar from "../Settings/SettingsNavBar"

function Settings() {
    if (!localStorage.getItem("token")) { setElement(<Navigate to="/login" />) }
    return (
        <SettingsNavBar currentPage="Profil" />
    );
}

export default Settings;
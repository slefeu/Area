import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

import SwitchTheme from "../Tools/SwitchTheme"
import Load from "../Tools/Load"
import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"

function ChangeTheme() {
    const SelectTheme = (selected) => {
        if (localStorage.getItem("theme") !== selected) {
            localStorage.setItem("theme", selected)
            document.documentElement.className = localStorage.getItem("theme")
        }
    }

    return (
        <Container>
            <div className="pageTitle">Select your Theme</div>
            <button
                onClick={() => SelectTheme("theme-light")}
                className="navItem">
                <div className="txt">{"Light theme"}</div>
            </button>
            <button
                onClick={() => SelectTheme("theme-dark")}
                className="navItem">
                <div className="txt">{"Dark theme"}</div>
            </button>

        </Container>
    );
}

function Appearance() {
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }
        else { setElement(<ChangeTheme />) }
    }, []);
    SwitchTheme()

    return (
        <>
            <SettingsNavBar currentPage="Appearance" />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default Appearance
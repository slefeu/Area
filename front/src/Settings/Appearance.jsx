import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AiOutlineCheck } from "react-icons/ai"

import SwitchTheme from "../Tools/SwitchTheme"
import Load from "../Tools/Load"
import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"

function ChangeTheme() {

    const [picked, setPicked] = useState("Light");

    const handlePickChange = (picked) => {
        setPicked(picked);
    }

    const SelectTheme = () => {
        let selected = picked === "Light" ? "theme-light" : "theme-dark";

        if (localStorage.getItem("theme") !== selected) {
            localStorage.setItem("theme", selected)
            document.documentElement.className = localStorage.getItem("theme")
        }
    }

    return (
        <Container>
            <div className="pageTitle">Select your Theme</div>

            <select name="selection" value={picked} onChange={event => handlePickChange(event.target.value)}>
                <option>Light</option>
                <option>Dark</option>
            </select>
            <button onClick={SelectTheme} className="btnBig cornerBtn"><AiOutlineCheck /></button>
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
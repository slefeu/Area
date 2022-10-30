import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { AiOutlineSave } from "react-icons/ai"

import Load from "../Tools/Load"
import SwitchTheme from "../Tools/SwitchTheme"
import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"
import AXIOS from "../Tools/Client"

function HandleKey() {

    const [picked, setPicked] = useState("");

    const handleKeyChange = (picked) => {
        setPicked(picked);
    }

    async function SetKeyValues(evt) {
        evt.preventDefault();

        const informations = {
            "service": picked,
            "key": document.getElementById("key_value").value,
        };

        await AXIOS.patch(localStorage.getItem("url") + "/users/setkey", informations)      // wrong path
            .then(res => { Error({ "title": "Success", "msg": "Key added" }) })
            .catch(error => { Error({ "res": error }) });
    }

    return (
        <Container>
            <div className="pageTitle">Want to add a new service ?</div>
            <div className="column border padding">
                <div>Select the service</div>
                <select name="selection" value={picked} onChange={event => handleKeyChange(event.target.value)}>
                    <option>Google</option>
                    <option>Twitter</option>
                </select>

                <input type="text" id="key_value" placeholder="Enter your API key" />
                <button onClick={SetKeyValues} className="btnBig cornerBtn"><AiOutlineSave /></button>
            </div>
        </Container>
    );
}

function APIPage() {
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }
        else { setElement(<HandleKey />) }
    }, []);
    SwitchTheme()

    return (
        <>
            <SettingsNavBar currentPage="API" />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default APIPage;
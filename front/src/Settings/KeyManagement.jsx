import { useState } from "react"
import { AiOutlineSave } from "react-icons/ai"

import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"
import AXIOS from "../Tools/Client"
import SwitchTheme from "../Tools/SwitchTheme"

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
            <div className="pageTitle">Add a service</div>
            <div className="column row-2 border padding">
                <div>Select</div>
                <select name="selection" value={picked} onChange={event => handleKeyChange(event.target.value)}>
                    <option>Google</option>
                    <option>Twitter</option>
                </select>

                <input type="text" id="key_value" placeholder="Enter your API key" />
            </div>
            <button onClick={SetKeyValues} className="btnBig cornerBtn"><AiOutlineSave /></button>
        </Container>
    );
}

function APIPage() {
    const token = "Bearer " + localStorage.getItem("token");

    SwitchTheme();
    AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
        .then()
        .catch(err => { Error({ "res": err }) });

    return (
        <>
            <SettingsNavBar currentPage="API" />
            <div className="content">
                <HandleKey />
            </div>
        </>
    );
}

export default APIPage;
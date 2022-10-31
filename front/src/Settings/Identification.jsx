import { useState, useEffect } from "react"
import { AiOutlineCheck } from "react-icons/ai";

import Container from '../Tools/Container'
import AXIOS from "../Tools/Client"
import Load from "../Tools/Load"
import Error from "../Tools/Notif"
import SettingsNavBar from "./SettingsNavBar"
import SwitchTheme from "../Tools/SwitchTheme";

function UserIdentification({ data }) {

    async function SetLoginValues(evt) {
        evt.preventDefault();

        const infos = {
            "password": document.getElementById("password").value,
            "password_reset": document.getElementById("password_reset").value,
            "password_reset_confirm": document.getElementById("confirm").value
        };

        await AXIOS.patch(localStorage.getItem("url") + "/users/password/edit", infos)      //wrong path
            .then(res => { Error({ "title": "Success", "msg": "Password changed" }) })
            .catch(error => { Error({ "res": error }) });
    }

    return (
        <Container>
            <div className="pageTitle">
                {data.first_name + "'s Login"}
            </div>
            <div className="column row-2 border margin">
                <div>Email address</div>
                <input type="text" readOnly="readonly" placeholder={data.email} />
            </div>
            <div className="column row-2 border padding">
                <div> Want to change Password ? </div>
                <input type="password" id="password" placeholder="Your old Password" />
                <input type="password" id="password_reset" placeholder="Enter new Password" />
                <input type="password" id="confirm" placeholder="Confirm new Password" />
            </div>
            <button onClick={SetLoginValues} className="btnBig cornerBtn"><AiOutlineCheck /></button>
        </Container>
    );
}

function Identification() {
    SwitchTheme();
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        const token = "Bearer " + localStorage.getItem("token");

        AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
            .then(res => { setElement(<UserIdentification data={res.data} />) })
            .catch(error => { Error({ "res": error }) });
    }, []);

    return (
        <>
            <SettingsNavBar currentPage="Identification" />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default Identification;
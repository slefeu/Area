import { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';

import Container from '../Tools/Container'
import AXIOS from "../Tools/Client"
import Load from "../Tools/Load"
import Error from "../Tools/Notif"
import SettingsNavBar from "./SettingsNavBar"

function UserIndentification({ data }) {
    const [element, setElement] = useState(<Form data={data} />)

    function Form({ data }) {
        return (
            <Container>
                <div className="pageTitle">
                    {data.first_name + "'s Login information"}
                </div>
                <div className="column border">
                    <div>Email address</div>
                    <input type="text" readOnly="readonly" className="disabledInput" placeholder={data.email} />
                </div>
                <div className="border">
                    <div> Want to change your Password ? </div>
                    <div className="column">
                        <input type="password" id="password" className="disabledInput" placeholder="Your old Password" />
                        <input type="password" id="password_reset" className="disabledInput" placeholder="Enter new Password" />
                        <input type="password" id="confirm" className="disabledInput" placeholder="Confirm new Password" />
                    </div>
                    <button onClick={SetLoginValues} className="btn">Save</button>
                </div>
            </Container>
        );
    }

    async function SetLoginValues(evt) {
        evt.preventDefault();

        const infos = {
            "password": document.getElementById("password").value,
            "password_reset": document.getElementById("password_reset").value,
            "password_reset_confirm": document.getElementById("confirm").value
        };

        await AXIOS.patch(localStorage.getItem("url") + "/devise/password", infos)
            .then(function (res) { setElement(<Error msg="Password changed" />) })
            .catch(function (err) { setElement(<Error error={err.message} msg="Please retry." />) });
    }

    return (
        <div>
            {element}
        </div>
    );
}

function Identification() {
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }

        const token = "Bearer " + localStorage.getItem("token");

        AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
            .then(function (res) { setElement(<UserIndentification data={res.data} />) })
            .catch(function (err) { setElement(<Error msg="La requête vers le serveur a échouée." error={err} />) });
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
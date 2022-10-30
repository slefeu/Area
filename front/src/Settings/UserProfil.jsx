import { useState, useEffect } from "react"
import { Navigate } from 'react-router-dom';

import Container from '../Tools/Container'
import AXIOS from "../Tools/Client"
import Load from "../Tools/Load"
import Error from "../Tools/Notif"
import SettingsNavBar from "./SettingsNavBar"

import '../css/settings.css'

function DisplayUserInfos({ data }) {

    return (
        <Container>
            <div className="pageTitle">
                {data.first_name + "'s general information"}
            </div>
            <div className="column border">
                <div>First name</div>
                <input type="text" readOnly="readonly" placeholder={data.first_name} />
            </div>
            <div className="column border">
                <div>Last name</div>
                <input type="text" readOnly="readonly" placeholder={data.last_name} />
            </div>
            <div className="column border">
                <div>Email address</div>
                <input type="text" readOnly="readonly" placeholder={data.email} />
            </div>
        </Container>
    );
}

function UserProfil() {

    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }

        const token = "Bearer " + localStorage.getItem("token");

        AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
            .then(res => { setElement(<DisplayUserInfos data={res.data} />) })
            .catch(error => { Error({ "res": error }) });
    }, []);

    return (
        <>
            <SettingsNavBar currentPage="UserProfil" />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default UserProfil
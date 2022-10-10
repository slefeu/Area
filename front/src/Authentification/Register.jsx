import React from "react";
import "../css/colors.css"
import "../css/auth.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import AXIOS from "../Tools/Client.jsx"
import { Navigate } from 'react-router-dom';

function Register() {
    if (localStorage.getItem('token')) {return (<Navigate to="/home" />)}

    function SetRegisterValues() {
        var user = {
            "user": {
                "first_name": document.getElementById("first_name").value,
                "last_name": document.getElementById("last_name").value,
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
                "password_confirmation": document.getElementById("password_confirm").value,
            }
        }

        if (localStorage.getItem("platform") !== "web")
            localStorage.setItem("url", document.getElementById("server").value);

        AXIOS.post(localStorage.getItem("url") + '/users', user)
            .then(res => {
                window.location.href = "/login";
            })
            .catch(err => {
                console.log(err);
                //change the border of the input that is wrong in red
            })
    }

    return (
        <div className="background">
            <div className="authContainer">
                <ButtonNavBar active="Register" classPicked="activeButton" />
                <form className="form">
                    <input className="fieldFormat" id="first_name" type="email" placeholder="First name" required />
                    <input className="fieldFormat" id="last_name" type="text" placeholder="Last Name" required />
                    <input className="fieldFormat" id="email" type="text" placeholder="Email" required />
                    <input className="fieldFormat" id="password" type="password" placeholder="Password" required />
                    <input className="fieldFormat" id="password_confirm" type="password" placeholder="Confirm Password" required />
                    <input className="fieldFormat" type="text" id="server" placeholder="Server URL" style={localStorage.getItem("platform") === "web" ? {display: 'none'} : {display: 'flex'}} />
                </form>
                <button className="buttonFormat" onClick={SetRegisterValues}>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;
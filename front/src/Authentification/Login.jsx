import React from "react"
import { AiOutlineTwitter as TwitterLogo } from "react-icons/ai"
import { ReactComponent as GoogleLogo } from "../images/google-icon.svg"
import { Navigate } from 'react-router-dom';

import "../css/colors.css"
import "../css/auth.css"

import ButtonNavBar from "./NavBarAuth.jsx"
import AXIOS from "../Tools/Client.jsx"

function LoginForm() {

    async function SetLoginValues(evt) {
        evt.preventDefault();

        const user = {
            "user": {
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
            }
        };

        if (localStorage.getItem("platform") !== "web")
            localStorage.setItem("url", document.getElementById("server").value);

        await AXIOS.create({ "sameSite": "None; Secure" }).post(
            localStorage.getItem("url") + "/users/sign_in.json",
            user)
            .then(response => {
                const token = response.headers["authorization"].replace("Bearer ", "");
                localStorage.setItem("token", token);
                window.location.href = "/home";
            })
            .catch(error => {
                console.log({error});
                //do red borders on elements that don't work
                // document.getElementById("id_de_l'element").style.[valeur à changer]= "nouvelle valeur"
            });
    }

    return (
        <>
            <form className="form">
                <input className="fieldFormat" id="email" type="email" placeholder="Email" required />
                <input className="fieldFormat" status="error" id="password" type="password" placeholder="Password" required />
                <input className="fieldFormat" type="text" id="server" placeholder="Server URL" style={localStorage.getItem("platform") === "web" ? {display: 'none'} : {display: 'flex'}} required />
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>Login</button>
        </>
    );
}

function Login() {
    if (localStorage.getItem('token')) {return (<Navigate to="/home" />)}

    return (
        <div className="background">
            <div className="authContainer">
                <ButtonNavBar active="Login" classPicked="activeButton" />
                <LoginForm></LoginForm>
                <div className="subtitle">Or continue with</div>
                <div>
                    <button className="socialNetworks">
                        <GoogleLogo />
                    </button>
                    <button className="socialNetworks">
                        <TwitterLogo className="twitter" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React, { useState } from "react"
// import { AiOutlineTwitter as TwitterLogo } from "react-icons/ai"
import { ReactComponent as GoogleLogo } from "../images/google-icon.svg"
import { Navigate, useNavigate } from "react-router-dom"
import { useGoogleLogin } from "@react-oauth/google";
import { FaMoon } from "react-icons/fa"

import "../css/colors.css"
import "../css/auth.css"

import ButtonNavBar from "./NavBarAuth"
import AXIOS from "../Tools/Client"
import { Error } from "../Tools/Notif"
import SwitchTheme from "../Tools/SwitchTheme"
import PasswordInput from "../Tools/Password"

function LoginForm() {
    const navigate = useNavigate()

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
                navigate('/home')
            })
            .catch(error => { Error({ "res": error }) });
    }

    return (
        <>
            <form className="form">
                <input className="fieldFormat" id="email" type="email" placeholder="Email" required />
                <PasswordInput className="fieldFormat" status="error" id="password" type="password" placeholder="Password" required />
                <input className="fieldFormat" type="text" id="server" placeholder="Server URL" style={localStorage.getItem("platform") === "web" ? { display: "none" } : { display: "flex" }} required />
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>Login</button>
        </>
    );
}

function Login() {

    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "theme-dark" ? true : false);

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        flow: 'auth-code',
        scope: `https://www.googleapis.com/auth/gmail.modify`,
        onError: error => Error({ "res": error }),
    });

    const switchTheme = () => {
        setIsDark(!isDark);
        SwitchTheme();
    }

    if (localStorage.getItem("token")) { return (<Navigate to="/home" />) }
    SwitchTheme();

    return (
        <div className="background">
            <button className="themeButton" onClick={switchTheme}>
                <FaMoon
                    style={{
                        fill: isDark ? "white" : "black",
                    }}
                ></FaMoon>
            </button>
            <div className="authContainer">
                <ButtonNavBar active="Login" classPicked="activeButton" dark={localStorage.getItem("theme") === "theme-dark" ? true : false} />
                <LoginForm></LoginForm>
                <div className="subtitle">Or continue with</div>
                <div>
                    <button className="socialNetworks" onClick={googleLogin}>
                        <GoogleLogo />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;

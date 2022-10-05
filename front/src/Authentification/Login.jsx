import React from "react"
import "../css/login.css"
import "../css/colors.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import { SiFacebook as FbLogo } from "react-icons/si";
import { AiFillTwitterCircle as TwitterLogo } from "react-icons/ai"

function LoginForm() {
    return (
        <>
            <form className="formPadding">
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="text"
                        placeholder="Email"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="password"
                        placeholder="Password"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="text"
                        placeholder="Server Id"
                    />
                </fieldset>
            </form>
            <button className="buttonFormat">
                Login
            </button>
        </>
    );
}

function Login() {
    return (
        <box className="loginPage">
            <ButtonNavBar active="Login" classPicked="activeButton" />
            <box className="loginForm">
                <box className="loginTitle">
                    Login to your Account
                </box>
                <box className="loginText">
                    Using your social networks
                </box>
                <box className="logos">
                    <box className="logoPadding">
                        <FbLogo preserveAspectRatio="xMaxYMid meet" fill="darkblue" opacity={.8} size={50} >
                        </FbLogo>
                    </box>
                    <box className="logoPadding">
                        <TwitterLogo preserveAspectRatio="xMaxYMid meet" fill="cyan" opacity={.8} size={60} >
                        </TwitterLogo>
                    </box>
                </box>
                <box className="orText">
                    Or
                </box>
                <LoginForm></LoginForm>
            </box>
        </box>
    );
}

export default Login;
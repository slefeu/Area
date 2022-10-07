import React, { useState } from "react"
import axios from "axios";
import "../css/login.css"
import "../css/colors.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import { SiFacebook as FbLogo } from "react-icons/si";
import { AiFillTwitterCircle as TwitterLogo } from "react-icons/ai"


function LoginForm() {
    const handlePlatform = () => {
        if (localStorage.getItem("platform") === "web") {
            return (true);
        }
        return (false);
    };

    function SetLoginValues() {
        const user = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            server: document.getElementById("server").value
        };

        axios.post("http://localhost:8080/login", { user })
            .then(res => {
                console.log(res.data);
            })
            .catch(res => {
                console.log("Error " + res);
            })
    }

    function checkMobile() {
        if (localStorage.getItem("platform") === "web") {
            return ("http://0.0.0.0:8081");
        } else {
            return ("");
        }
    }

    return (
        <>
            <form className="box formPadding">
                <fieldset className="box fieldSetFormat">
                    <input
                        className="box fieldFormat"
                        id="email"
                        type="text"
                        placeholder="Email"
                        required
                    />
                </fieldset>
                <fieldset className="box fieldSetFormat">
                    <input
                        className="box fieldFormat"
                        id="password"
                        type="password"
                        placeholder="Password"
                        required
                    />
                </fieldset>
                <fieldset className="box fieldSetFormat">
                    <input
                        className="box fieldFormat"
                        type="text"
                        id="server"
                        placeholder="Server Id"
                        value={checkMobile()}
                        disabled={handlePlatform()}
                        required
                    />
                </fieldset>
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>
                Login
            </button>
        </>
    );
}

function Login() {
    return (
        <div className="box loginPage">
            <ButtonNavBar active="Login" classPicked="activeButton" />
            <div className="box loginForm">
                <div className="loginTitle box">
                    Login to your Account
                </div>
                <div className="box loginText">
                    Using your social networks
                </div>
                <div className="logos box">
                    <div className="logoPadding box">
                        <FbLogo preserveAspectRatio="xMaxYMid meet" fill="darkblue" opacity={.8} size={50} >
                        </FbLogo>
                    </div>
                    <div className="box logoPadding">
                        <TwitterLogo preserveAspectRatio="xMaxYMid meet" fill="cyan" opacity={.8} size={60} >
                        </TwitterLogo>
                    </div>
                </div>
                <div className="box orText">
                    Or
                </div>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}

export default Login;
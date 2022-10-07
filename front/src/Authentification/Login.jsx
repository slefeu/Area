import React from "react"
import axios from "axios";
import "../css/colors.css"
import "../css/auth.css"
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
            "user" : {
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
            }
        };

        localStorage.setItem("url", document.getElementById("server").value);

        axios.post( localStorage.getItem("url") + "/users/sign_in.json", user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(res => {
                console.log("Error " + res);
            })
    }

    function checkMobile() {
        if (localStorage.getItem("platform") === "web") {
            return (localStorage.getItem("url"));
        } else {
            return ("");
        }
    }

    return (
        <>
            <form className="form">
                <input className="fieldFormat" id="email" type="email" placeholder="Email" required />
                <input className="fieldFormat" id="password" type="password" placeholder="Password" required />
                <input className="fieldFormat" type="text" id="server" placeholder="Server url" value={checkMobile()} disabled={handlePlatform()} required />
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>Login</button>
        </>
    );
}

function Login() {
    return (
        <>
            <ButtonNavBar active="Login" classPicked="activeButton" />
            <div className="authContainer">
                <div className="title">Login to your Account</div>
                <div className="subtitle">Using your social networks</div>
                <div className="logos">
                    <FbLogo />
                    <TwitterLogo className="bigger"/>
                </div>
                <div className="subtitle">Or</div>
                <LoginForm></LoginForm>
            </div>
        </>
    );
}

export default Login;
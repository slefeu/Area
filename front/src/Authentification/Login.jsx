import React from "react"
import axios from "axios";
import "../css/colors.css"
import "../css/auth.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import { AiOutlineTwitter as TwitterLogo } from "react-icons/ai"
import { ReactComponent as GoogleLogo } from "../images/google-icon.svg"
import handlePlatform from "./Platform.jsx"
import checkMobile from "./Mobile.jsx"

function LoginForm() {

    async function SetLoginValues(evt) {
        evt.preventDefault();

        const user = {
            "user": {
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
            }
        };

        localStorage.setItem("url", document.getElementById("server").value);

        await axios.post(
            localStorage.getItem("url") + "/users/sign_in.json",
            user)
            .then(response => {
                const token = response.headers["authorization"].replace("Bearer ", "");
                localStorage.setItem("token", token);
                window.location.href = "/home";
            })
            .catch(error => {
                console.log("Error " + error);
                //do red borders on elements that don't work
                // document.getElementById("id_de_l'element").style.[valeur à changer]= "nouvelle valeur"

            });
    }

    return (
        <>
            <form className="form">
                <input className="fieldFormat" id="email" type="email" placeholder="Email" required />
                <input className="fieldFormat" status="error" id="password" type="password" placeholder="Password" required />
                <input className="fieldFormat" type="text" id="server" placeholder="Server URL" value={checkMobile()} disabled={handlePlatform()} required />
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>Login</button>
        </>
    );
}

function Login() {
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
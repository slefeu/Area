import React from "react"
import axios from "axios";
import "../css/colors.css"
import "../css/auth.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import { AiOutlineTwitter as TwitterLogo } from "react-icons/ai"
import { ReactComponent as GoogleLogo } from "../images/google-icon.svg"
import { AiOutlineEyeInvisible as EyeIcon } from "react-icons/ai"

function LoginForm() {
    const handlePlatform = () => {
        if (localStorage.getItem("platform") === "web") {
            return (true);
        }
        return (false);
    };

    function SetLoginValues() {
        const user = {
            "user": {
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
            }
        };

        localStorage.setItem("url", document.getElementById("server").value);

        axios.post(localStorage.getItem("url") + "/users/sign_in.json", user)
            .then(res => {
                //aller dans le dashboard
                //stocker le token
                console.log(res);
                console.log(res.data);
            })
            .catch(res => {
                // faire la gestion d'erreur = récup les messages d'erreur et faire un
                //document.getElementById("id_de_l'element").style.[valeur à changer]= "nouvelle valeur"
                //faire des contours en rouge ! mettre que le compte existe pas
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
                <input className="fieldFormat" status="error" id="password" type="password" placeholder="Password" required />
                <input className="fieldFormat" type="text" id="server" placeholder="Server URL" value={checkMobile()} disabled={handlePlatform()} required icon={<EyeIcon></EyeIcon>} />
            </form>
            <button className="box buttonFormat" onClick={SetLoginValues}>Login</button>
        </>
    );
}

function Login() {
    return (
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
    );
}

export default Login;
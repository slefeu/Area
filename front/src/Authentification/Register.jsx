import React from "react";
import "../css/colors.css"
import "../css/auth.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import axios from "axios"

function Register() {

    function SetRegisterValues() {
        var user = {
            "user": {
                "first_name": document.getElementById("first_name").value,
                "last_name": document.getElementById("last_name").value,
                "email": document.getElementById("email").value,
                "password": document.getElementById("password").value,
                "password_confirmation": document.getElementById("password_confirm").value
            }
        }

        // faire la gestion d'erreur = récup les messages d'erreur et faire un
        //document.getElementById("id_de_l'element").style.[valeur à changer]= "nouvelle valeur"
        //faire des contours en rouge !
        axios.post('http://localhost:8080/users', user)
            .then(res => {
                // aller sur la page login
                console.log(res.data)
            })
            .catch(res => {
                console.log(res);
            })
    }

    return (
        <div className="authContainer">
            <ButtonNavBar active="Register" classPicked="activeButton" />
            <form className="form">
                <input className="fieldFormat" id="first_name" type="email" placeholder="First name" />
                <input className="fieldFormat" id="last_name" type="text" placeholder="Last Name" />
                <input className="fieldFormat" id="email" type="text" placeholder="Email" />
                <input className="fieldFormat" id="password" type="password" placeholder="Password" />
                <input className="fieldFormat" id="password_confirm" type="password" placeholder="Confirm Password" />
            </form>
            <button className="buttonFormat" onClick={SetRegisterValues}>
                Register
            </button>

        </div>
    );
}

export default Register;
import React from "react";
import "../css/register.css"
import "../css/colors.css"
import ButtonNavBar from "./NavBarAuth.jsx"
import axios from "axios"

function RegisterForm() {

    function CheckPasswordConformity() {
        const validation = {
            password: document.getElementById("password").value,
            password2: document.getElementById("password_confirm").value,
        }

        if (validation.password === validation.password2) {
            return (true);
        } else {
            return (false);
        }
    }

    function SetRegisterValues() {
        const user = {
            first_name: document.getElementById("first_name").value,
            last_name: document.getElementById("last_name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        if (CheckPasswordConformity()) {
            axios.post('http://localhost:8080/users', { user })
                .then(res => {
                    console.log(res.data);
                })
                .catch(res => {
                    console.log("Error " + res);
                })
        } else {
            console.log("passwords not matching");
        }
    }

    return (
        <>
            <form className="formPadding">
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        id="first_name"
                        type="text"
                        placeholder="First name"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        id="last_name"
                        type="text"
                        placeholder="Last Name"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        id="email"
                        type="text"
                        placeholder="Email"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        id="password"
                        type="text"
                        placeholder="Password"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        id="password_confirm"
                        type="text"
                        placeholder="Confirm Password"
                    />
                </fieldset>
            </form>
            <button className="buttonFormat" onClick={SetRegisterValues}>
                Register
            </button>
        </>
    );
}

function Register() {
    return (
        <div className="registerPage box">
            <ButtonNavBar active="Register" classPicked="activeButton" />
            <div className="registerForm box">
                <div className="registerTitle box">
                    Create an account
                </div>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
}

export default Register;
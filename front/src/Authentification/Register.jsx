import React from "react";
import "../css/register.css"
import "../css/colors.css"
import ButtonNavBar from "./NavBarAuth.jsx"

function RegisterForm() {
    return (
        <>
            <form className="formPadding">
            <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="text"
                        placeholder="First name"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="text"
                        placeholder="Last Name"
                    />
                </fieldset>
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
                        type="text"
                        placeholder="Password"
                    />
                </fieldset>
                <fieldset className="fieldSetFormat">
                    <input
                        className="fieldFormat"
                        type="text"
                        placeholder="Confirm Password"
                    />
                </fieldset>
            </form>
            <button className="buttonFormat">
                Register
            </button>
        </>
    );
}

function Register() {
    return (
        <box className="registerPage">
            <ButtonNavBar active="Register" classPicked="activeButton" />
            <box className="registerForm">
                <box className="registerTitle">
                    Create an account
                </box>
                <RegisterForm></RegisterForm>
            </box>
        </box>
    );
}

export default Register;

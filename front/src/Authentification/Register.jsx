import React from 'react';
import "../css/register.css"
import "../css/colors.css"
import ButtonNavBar from "./NavBarAuth.jsx"

function Register() {
    return (
        <box className="registerPage">
            <ButtonNavBar active="Register" classPicked="activeButton" />
        </box>
    );
}

export default Register;

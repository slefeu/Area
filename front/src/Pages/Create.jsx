import '../css/colors.css'
import '../css/style.css'

import Navbar from '../Tools/Navbar'
import Load from '../Tools/Load'
import CreateForm from './CreateForm'
import { Error } from '../Tools/Notif'

import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import AXIOS from "../Tools/Client.jsx"

function Create() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />)}

        AXIOS.get(localStorage.getItem('url') + '/about.json')
            .then(function (res) { setElement(<CreateForm json={res.data}/>) })
            .catch(function (err) { Error({"res": err}) });
    }, []);

    return (
        <>
            <Navbar currentPage="Create" />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default Create
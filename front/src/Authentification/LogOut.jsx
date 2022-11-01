import AXIOS from "../Tools/Client.jsx"
import Load from '../Tools/Load'
import { Error } from '../Tools/Notif'

import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function LogoutUser() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        const token = "Bearer " + localStorage.getItem("token");
        const url = localStorage.getItem("url") + "/signout";
        const values = {
            headers: {
            Authorization: token,
            }
        }

        AXIOS.delete(url, values)
            .then(res => {
                localStorage.removeItem("token");
                setElement(<Navigate to="/login" />)
            })
            .catch((error) => {
                // localStorage.removeItem("token");
                // setElement(<Navigate to="/home" />)
                Error({"res": error})
            });
    }, [])
    
    return (
        <>
            {element}
        </>
    )
}

export default LogoutUser;
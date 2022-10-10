import AXIOS from "../Tools/Client.jsx"
import { Navigate } from 'react-router-dom';
import Load from '../Tools/Load'
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
                console.log("success");
                setElement(<Navigate to="/login" />)
            })
            .catch((error) => {
                console.log( {error} )
                // localStorage.removeItem("token");
                setElement(<Navigate to="/home" />)
            });
    }, [])
    
    return (
        <>
            {element}
        </>
    )
}

export default LogoutUser;
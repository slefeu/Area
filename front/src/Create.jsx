import './css/colors.css'
import './css/style.css'

import Navbar from './Navbar'
import Load from './Load'
import CreateForm from './CreateForm'
import Error from './Error'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Create() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        axios.get(localStorage.getItem('url') + '/about.json')
            .then(function (res) { setElement(<CreateForm json={res.data}/>) })
            .catch(function (err) { setElement(<Error msg="La requête vers le serveur a échouée." error={err} />) });
      }, []);

    return (
        <>
            <Navbar />
            <div className="content">
                {element}
            </div>
        </>
    );
}

export default Create
import '../css/colors.css'
import '../css/style.css'

import Navbar from '../Tools/Navbar'
import Error from '../Tools/Error'
import Load from '../Tools/Load'
import Container from '../Tools/Container'

import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios'

function Home() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />)}

        axios.get(localStorage.getItem('url') + '/widget')
        .then(function (res) { setElement(<Container title="Widget Title" data="Description" />) })
        .catch(function (err) { setElement(<Error error={err.message} msg="Please reload the page."/>) });
      }, []);

    return (
        <div>
            <Navbar currentPage="Home"/>
            <div className="content">
                {element}
            </div>
        </div>
    );
}

export default Home
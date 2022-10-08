import '../css/colors.css'
import '../css/style.css'

import Navbar from '../Tools/Navbar'
import Error from '../Tools/Error'
import Load from '../Tools/Load'
import Container from '../Tools/Container'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        axios.get(localStorage.getItem('url') + '/widget')
        .then(function (res) { setElement(<Container title="Widget Title" data="Description" />) })
        .catch(function (err) { setElement(<Error error={err.message} msg="Please reload the page."/>) });
      }, []);

    return (
        <div>
            <Navbar />
            <div className="content">
                {element}
            </div>
        </div>
    );
}

export default Home
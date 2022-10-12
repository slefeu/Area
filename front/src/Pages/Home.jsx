import '../css/colors.css'
import '../css/style.css'

import Navbar from '../Tools/Navbar'
import Error from '../Tools/Error'
import Load from '../Tools/Load'
import Container from '../Tools/Container'

import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import AXIOS from "../Tools/Client.jsx"

function Home() {
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }

        const token = "Bearer " + localStorage.getItem("token");
    
        AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
            .then(function (res) {
                var widgets = res.data.widgets.map((w) => {
                    return <Container title={w.name} data={`${w.action.name} => ${w.reaction.name}`} key={w.name} />
                })
                if (res.data.background !== null) {
                    setElement(<>
                        <Container key="front_background" type="biggerContainer">
                            <img alt="Background from the user" src={res.data.background} />
                        </Container>
                        {widgets}
                    </>)
                } else { setElement(widgets) }
            })
            .catch(function (err) { setElement(<Error error={err.message} msg="Please reload the page." />) });
    }, []);

    return (
        <div>
            <Navbar currentPage="Home" />
            <div className="content">
                {element}
            </div>
        </div>
    );
}

export default Home
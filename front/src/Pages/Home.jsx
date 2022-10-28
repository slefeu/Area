import '../css/colors.css'
import '../css/style.css'

import Navbar from '../Tools/Navbar'
import Load from '../Tools/Load'
import Container from '../Tools/Container'
import Widget from '../Tools/Widget'
import { Error } from '../Tools/Notif'

import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import AXIOS from "../Tools/Client.jsx"
import { Modal } from '../Tools/Modal'

function Home() {
    const [element, setElement] = useState(<Load />)

    useEffect(() => {
        if (!localStorage.getItem('token')) { setElement(<Navigate to="/login" />) }

        const token = "Bearer " + localStorage.getItem("token");
    
        AXIOS.get(localStorage.getItem("url") + "/current_user", { headers: { Authorization: token } })
            .then(res => {
                var widgets = res.data.widgets.map((w) => { return <Widget key={Math.random()} w={w} /> })
                if (res.data.background !== null) {
                    setElement(<>
                        <Container type="biggerContainer">
                            <img alt="Background from the user" src={res.data.background} />
                        </Container>
                        {widgets}
                    </>)
                } else { setElement(widgets) }
            })
            .catch(err => { Error({"res": err}) });
    }, []);

    return (
        <div>
            <Modal id="widgetEdit"/>
            <Navbar currentPage="Home" />
            <div className="content">
                {element}
            </div>
        </div>
    );
}

export default Home
import "./css/colors.css"
import "./css/style.css"

import Navbar from "./navbar"
import Load from "./load"
import Container from "./container"

import { useState, useEffect } from "react"
import axios from "axios"

function Home() {
    const [element, setElement] = useState(<Load/>)

    useEffect(() => {
        axios.get(localStorage.getItem("url") + "/about.json")
        .then(function (res) {
            console.log(res.data)
            setElement(<Container
                        title={res.data.server.current_time}
                        data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nunc id neque pharetra tincidunt. Fusce ultrices tortor accumsan nisi bibendum pretium. Phasellus ante turpis, ullamcorper vel lobortis sed, sagittis bibendum arcu."
                        />)
        })
        .catch(function (err) {
            setElement(<Container title="Error" data={`La requête vers le serveur a échouée. Veuillez recharger la page. ${err}`} type="error"/>)
        });
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
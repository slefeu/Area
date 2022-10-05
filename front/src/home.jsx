import './css/colors.css'
import './css/style.css'

import Navbar from './navbar'
import Load from './load'
import Container from './container'

import { useState } from 'react'
import axios from 'axios'

function Home() {
    const [element, setElement] = useState(<Load/>)

    axios.get(localStorage.getItem('url') + '/about.json')
    .then(function (res) {
        console.log(res)
        setElement(<Container data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed nunc id neque pharetra tincidunt. Fusce ultrices tortor accumsan nisi bibendum pretium. Phasellus ante turpis, ullamcorper vel lobortis sed, sagittis bibendum arcu."/>)
    })
    .catch(function (err) {
        setElement(<Container data="Error"/>)
    });

    return (
        <div>
            <Navbar />
            <div class="content">
                {element}
            </div>
        </div>
    );
}

export default Home
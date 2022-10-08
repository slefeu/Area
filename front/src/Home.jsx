import './css/colors.css'
import './css/style.css'

import Navbar from './Navbar'
import Error from './Error'

function Home() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Error msg="Cette page n'est pas encore developpée. Veuillez revenir plus tard." />
            </div>
        </>
    );
}

export default Home
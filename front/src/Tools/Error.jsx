import '../css/colors.css'
import '../css/style.css'

import Container from './Container'

function Error({msg, error}) {
    return ( <Container title={error} data={msg} type="error" /> )
}

export default Error
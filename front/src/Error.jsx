import './css/colors.css'
import './css/style.css'

import Container from './Container'

function Error({msg, error}) {
    return (
        <Container title="Error" data={msg} type="error">
            <div>{error}</div>    
        </Container>
    );
}

export default Error
import './css/colors.css'
import './css/style.css'

import Container from './Container'

import axios from "axios";
import { AiOutlineCheck } from 'react-icons/ai'

function CreateForm({json}) {

    var actions = json.server.services.map((elem) => {
        var act = elem.actions.map((i) => { return ( <option value={i.name} key={i.name}>{i.description}</option> ) })
        return ( act )
    })

    var reactions = json.server.services.map((elem) => {
        var reac = elem.reactions.map((i) => { return ( <option value={i.name} key={i.name}>{i.description}</option> ) })
        return ( reac )
    })

    actions = <select name="reactionsList" id="reactionsList" className="requiered">{actions}</select>
    reactions = <select name="actionsList" id="actionsList" className="requiered">{reactions}</select>

    function submit() {
        var widget = {
            "name": document.getElementById("name").value,
            "action": {
              "name": document.getElementById("actionsList").value,
              "options": {}
             },
            "reaction": {
              "name": document.getElementById("reactionsList").value,
              "options": {}
            }
        }

        console.log(widget)

        axios.post( localStorage.getItem("url") + "/widget", widget)
            .then(res => { console.log(res) })
            .catch(res => { console.log("Error " + res)})
    }

    return (
        <Container title="Create new Widget">
            <div className="row-2 border">
                <div>General</div>
                <input type="text" id="name" className="requiered" placeholder="Widget Name"></input>
            </div>
            {/* <input type="text" placeholder="Widget Data"></input> */}
            <div className="row-2 border">
                <div>Actions/Reactions</div>
                {actions}
                {reactions}
            </div>
            <button onClick={submit} className="btnBig"><AiOutlineCheck /></button>
        </Container>
    );
}

export default CreateForm
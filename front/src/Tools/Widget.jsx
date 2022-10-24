import Container from "./Container";
import AXIOS from "../Tools/Client.jsx"
import { Error } from '../Tools/Notif'

import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function Widget({ w }) {

    function removeThis(id) {
        const token = "Bearer " + localStorage.getItem("token")
        const url = localStorage.getItem("url") + "/widgets/" + id
    
        AXIOS.delete(url, { headers: { Authorization: token,} })
            .then(res => {
                try { document.getElementById("widget_" + id).remove() }
                catch (e) {}
             })
            .catch(res => { Error({"res": res}) })
    }

    var optionsAction = Object.keys(w.action.options).map((elem) => {
        if (elem === "action_id") return ""
        return <span className="tag">{w.action.options[elem]}</span>
    })

    var optionsReaction = Object.keys(w.reaction.options).map((elem) => {
        if (elem === "reaction_id") return ""
        return <span className="tag">{w.reaction.options[elem]}</span>
    })

    return (
        <Container key={w.id} id={`widget_${w.id}`} type="widget">
            <div className="containerTitle">{w.name}</div>
            <div className="containerContent"><span className="tagTitle">{w.action.name}</span>{optionsAction}</div>
            <div className="containerContent"><span className="tagTitle">{w.reaction.name}</span>{optionsReaction}</div>
            <div className="funZone">
                <button className="button" onClick={() => { console.log(`edit widget ${w.id}`) }}><AiFillEdit /></button>
                <button className="button" onClick={() => { removeThis(w.id) }}><AiFillDelete /></button>
            </div>
        </Container>
    );
}

export default Widget;
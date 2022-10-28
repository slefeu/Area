import Container from "./Container";
import AXIOS from "./Client.jsx"
import { Error } from './Notif'
import { ShowModal, SetModal, HideModal } from "./Modal";

import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function Widget({ w }) {

    /**
     * It removes a widget from the database.
     */
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

    /**
     * "When the user clicks the edit button, show a modal with the widget's id and a button to
     * enable/disable the widget."
     * 
     * The function is called when the user clicks the edit button. The function takes the widget as a
     * parameter
     */
    function editThis(w) {
        SetModal({
            "id": "widgetEdit",
            "content": <div>
                <h1>Widget edit</h1>
                <p>Widget id: {w.id}</p>
                <button onClick={() => {
                    const token = "Bearer " + localStorage.getItem("token")
                    const url = localStorage.getItem("url") + "/widgets/" + w.id
                    
                    w.active = w.active == undefined ? false : !w.active
                    AXIOS.patch(url, w, { headers: { Authorization: token,} })
                        .then(res => { 
                            HideModal({id: "widgetEdit"})
                            try { 
                                var element = document.getElementById("widget_" + w.id)
                                element.classList.add(`${!w.active}`)
                                element.classList.remove(`${w.active}`)
                            } catch (e) {}
                         })
                        .catch(res => { Error({"res": res}) })
                }}>{w.active ? "Enable" : "Disable"} Widget</button>
            </div>
        })
        
        ShowModal({id: "widgetEdit"})
    }

    // Get alls Actions Tags
    var optionsAction = Object.keys(w.action.options).map((elem) => {
        if (elem === "action_id") return ""
        return <span key={Math.random()} className="tag">{w.action.options[elem]}</span>
    })

    // Get alls Conditions Tags
    var optionsReaction = Object.keys(w.reaction.options).map((elem) => {
        if (elem === "reaction_id") return ""
        return <span key={Math.random()} className="tag">{w.reaction.options[elem]}</span>
    })

    var classe = w.active === undefined ? "true" : w.active.toString()

    /* Returning a Container component with the widget's information. */
    return (
        <Container id={`widget_${w.id}`} type={`widget ${classe}`}>
            <div className="containerTitle">{w.name}</div>
            <div className="containerContent"><span className="tagTitle">{w.action.name}</span>{optionsAction}</div>
            <div className="containerContent"><span className="tagTitle">{w.reaction.name}</span>{optionsReaction}</div>
            <div className="funZone">
                <button className="button" onClick={() => { editThis(w) }}><AiFillEdit /></button>
                <button className="button" onClick={() => { removeThis(w.id) }}><AiFillDelete /></button>
            </div>
        </Container>
    );
}

export default Widget;
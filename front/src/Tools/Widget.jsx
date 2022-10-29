import Container from "./Container";
import AXIOS from "./Client.jsx"
import { Error } from './Notif'
import Edit from "../Pages/Edit.jsx"

import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useState } from 'react'

function Widget({ w }) {
    
    var optionsAction = Object.keys(w.action.options).map((elem) => {
        if (elem === "action_id") return ""
        return <span key={Math.random()} className="tag">{w.action.options[elem]}</span>
    })

    var optionsReaction = Object.keys(w.reaction.options).map((elem) => {
        if (elem === "reaction_id") return ""
        return <span key={Math.random()} className="tag">{w.reaction.options[elem]}</span>
    })

    const [content, setContent] = useState(
        <>
            <div className="containerTitle">{w.name}</div>
            <div className="containerContent"><span className="tagTitle">{w.action.name}</span>{optionsAction}</div>
            <div className="containerContent"><span className="tagTitle">{w.reaction.name}</span>{optionsReaction}</div>
        </>
    )

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

    function editThis(w) {
        var temp = document.getElementById(`widget_${w.id}`)

        try {
            if (temp.classList.contains("editContainer")) {
                temp.classList.remove("editContainer")
                setContent(
                    <>
                        <div className="containerTitle">{w.name}</div>
                        <div className="containerContent"><span className="tagTitle">{w.action.name}</span>{optionsAction}</div>
                        <div className="containerContent"><span className="tagTitle">{w.reaction.name}</span>{optionsReaction}</div>
                    </>
                )
                return
            }
        } catch (e) {}

        temp.classList.add("editContainer")
        setContent(<Edit widget={w}/>)
    }

    function activeThis(w) {
        const token = "Bearer " + localStorage.getItem("token")
        const url = localStorage.getItem("url") + "/widgets/" + w.id
        
        w.active = w.active === undefined ? false : !w.active
        AXIOS.patch(url, w, { headers: { Authorization: token,} })
            .then(res => { 
                try {
                    var element = document.getElementById("widget_" + w.id)
                    element.classList.add(`${!w.active}`)
                    element.classList.remove(`${w.active}`)
                    document.getElementById(`enable_${w.id}`).innerHTML = w.active ? "💤" : "✅"
                } catch (e) {}
                })
            .catch(res => { Error({"res": res}) })
    }

    return (
        <Container key={w.id} id={`widget_${w.id}`} type="widget">
            {content}
            <div className="funZone">
                <button className="button" onClick={() => { editThis(w) }}><AiFillEdit /></button>
                <button className="button" onClick={() => { removeThis(w.id) }}><AiFillDelete /></button>
                <button className="button" id={`enable_${w.id}`} onClick={() => { activeThis(w) }}>{w.active ? "💤" : "✅"}</button>
            </div>
        </Container>
    )
}

export default Widget;
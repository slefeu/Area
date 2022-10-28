import '../css/colors.css'
import '../css/style.css'
import '../css/modal.css'

import React from "react"
import ReactDOM from "react-dom/client"

import { AiOutlineClose } from "react-icons/ai"

export var Modals = {}

export function ShowModal( {id} ) {
    const modal = document.getElementById(id)
    if (modal === null) return

  	modal.style.display = "flex"
  
    modal.classList.add("show")
    modal.classList.remove("hide")
}

export function HideModal( {id} ) {
    const modal = document.getElementById(id)
    if (modal === null) return

    modal.classList.add("hide")
    modal.classList.remove("show")

    setTimeout(() => { modal.style.display = "none" } , 500)
}

export function SetModal({ id, content }) {
    var modal = document.getElementById(id)
    var temp = document.getElementById(id + "Content")

    if (modal === null || temp == null) return
    if (Modals[id] === undefined) { Modals[id] = ReactDOM.createRoot(temp) }
    
    Modals[id].render(content)
}

export function Modal( {id} ) {
    return (
        <div id={id} className="modal">
            <div className="modalBackground" onClick={() => { HideModal({id: id}) }}></div>
            <div className="modalContent">
                <button className="close" onClick={() => { HideModal({id: id}) }}><AiOutlineClose /></button>
                <div id={`${id}Content`}></div>
            </div>
        </div>
    )
}
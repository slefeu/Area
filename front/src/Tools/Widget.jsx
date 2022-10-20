import Container from "./Container";

import { AiFillEdit, AiFillDelete } from "react-icons/ai"


function Widget({ w }) {

    var optionsAction = Object.keys(w.action.options).map((elem) => {
        if (elem === "action_id")
            return
        return w.action.options[elem]
    })

    var optionsReaction = Object.keys(w.reaction.options).map((elem) => {
        if (elem === "reaction_id")
            return
        return w.reaction.options[elem]
    })

    return (
        <Container key={w.id} type="widget">
            <div className="containerTitle">{w.name}</div>
            <div className="containerContent">{`${w.action.name} (${optionsAction})`}</div>
            <div className="containerContent">{`${w.reaction.name} (${optionsReaction})`}</div>
            <div className="funZone">
                <button className="button" onClick={() => { console.log(`edit widget ${w.id}`) }}><AiFillEdit /></button>
                <button className="button" onClick={() => { console.log(`remove widget ${w.id}`) }}><AiFillDelete /></button>
                <input type="checkbox" onChange={() => { console.log(`toggle widget ${w.id}`) }}></input>
            </div>
        </Container>
    );
}

export default Widget;
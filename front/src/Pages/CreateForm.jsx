import '../css/colors.css'
import '../css/style.css'

import Container from '../Tools/Container'

import AXIOS from "../Tools/Client.jsx"
import { AiOutlineCheck } from 'react-icons/ai'
import { useState, useEffect } from 'react'

function CreateForm({ json }) {

    const [actionsMore, setActionsMore] = useState(<div className="row-2 border"><div>Action Option</div></div>)
    const [reactionsMore, setReactionsMore] = useState(<div className="row-2 border"><div>Reaction Option</div></div>)

    /* A function that is called when the user selects an action. It will then display the options for
    the action. */
    function moreInputAction() {
        var data = document.getElementById("actionsList").value;

        json.server.services.forEach(element => {
            element.actions.forEach(elem => {
                if (elem.name === data) {
                    if (Object.keys(elem.options).length === 0) {
                        setActionsMore(<div></div>)
                    } else {
                        var temp = Object.keys(elem.options).map((e) => { return <input type={elem.options[e]} placeholder={e} key={e}></input> })
                        setActionsMore(<div id="inputAction" className="row-2 border"><div>Action Option</div>{temp}</div>)
                    }
                    return
                }
            })
        })
    }

    /* A function that is called when the user selects an action. It will then display the options for
        the action. */
    function moreInputReaction() {
        var data = document.getElementById("reactionsList").value;
        json.server.services.forEach(element => {
            element.reactions.forEach(elem => {
                if (elem.name === data) {
                    if (Object.keys(elem.options).length === 0) {
                        setReactionsMore(<div></div>)
                    } else {
                        var temp = Object.keys(elem.options).map((e) => { return <input type={elem.options[e]} placeholder={e} key={e}></input> })
                        setReactionsMore(<div id="inputReaction" className="row-2 border"><div>Reaction Option</div>{temp}</div>)
                    }
                    return
                }
            })
        })
    }

    useEffect(() => {
        moreInputAction()
        moreInputReaction()
    }, [])

    var actions = json.server.services.map((elem) => {
        var act = elem.actions.map((i) => { return (<option value={i.name} key={i.name}>{i.description}</option>) })
        return (act)
    })

    var reactions = json.server.services.map((elem) => {
        var reac = elem.reactions.map((i) => { return (<option value={i.name} key={i.name}>{i.description}</option>) })
        return (reac)
    })

    actions = <select name="reactionsList" id="actionsList" className="requiered" onChange={moreInputAction}>{actions}</select>
    reactions = <select name="actionsList" id="reactionsList" className="requiered" onChange={moreInputReaction}>{reactions}</select>

    /**
     * It takes the values of the form and sends them to the server
     */
    function submit() {
        const token = "Bearer " + localStorage.getItem("token");
        const url = localStorage.getItem("url") + "/widgets";
        var widget = {
            "widget": {
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
        }

        var actionOptions = document.getElementById("inputAction")
        for (var i = 1; i < actionOptions.children.length; i++) {
            if (actionOptions.children[i].value !== "") {
                widget.widget.action.options[actionOptions.children[i].placeholder] = actionOptions.children[i].value
            }
        }

        var reactionOptions = document.getElementById("inputReaction")
        for (var j = 1; j < reactionOptions.children.length; j++) {
            if (reactionOptions.children[j].value !== "") {
                widget.widget.reaction.options[reactionOptions.children[j].placeholder] = reactionOptions.children[j].value
            }
        }
        AXIOS.post(url, widget, { headers: { Authorization: token,} })
            .then(res => { 
                document.getElementById("name").value = ""
             })
            .catch(res => { console.log("Error " + res) })
    }

    return (
        <Container title="Create new Widget">
            <div className="row-2 border">
                <div>General</div>
                <input type="text" id="name" className="requiered" placeholder="Widget Name" />
            </div>
            {/* <input type="text" placeholder="Widget Data" /> */}
            <div className="row-2 border">
                <div>Actions/Reactions</div>
                {actions}
                {reactions}
            </div>
            {actionsMore}
            {reactionsMore}
            <button onClick={submit} className="btnBig cornerBtn"><AiOutlineCheck /></button>
        </Container>
    );
}

export default CreateForm
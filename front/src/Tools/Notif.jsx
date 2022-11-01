import '../css/notif.css'
import '../css/colors.css'

import { useNavigate } from 'react-router-dom'

export function SetNotif({ title, body, type }) {
    try { document.getElementById("notif").remove() } catch (e) { }

    var notif = document.createElement("div")
    notif.className = "notif " + (type !== undefined ? type : "")
    notif.id = "notif"
    notif.innerHTML = `<div class="notifTitle">${title}</div><div class="notifBody">${body}</div>`
    document.body.appendChild(notif)
}

export function Error({ title, res, msg }) {
    // const navigate = useNavigate()
    var temp = res?.response?.status
    var type = ""

    if (temp === 401 && localStorage.getItem("token")) {
        localStorage.removeItem("token")
        // navigate("/login")
        return
    }

    if (res?.response?.data?.errors) { res.response.data.errors.forEach((e) => { type += `${e}<br/>` }) }
    else {
        try {
            type = Object.keys(res.response.data).map((e) => {
                var temp = ""
                res.response.data[e].forEach((elem) => { temp += elem + ", " })
                temp = temp.slice(0, -2)
                return `<b>${e}</b> ${temp}`
            })
        } catch (e) {
            switch (temp) {
                case 401: type = "No access. Please log in again to continue."; break
                case 404: type = "Server not found. Please restart the application."; break
                default: type = "An error occured. Please try again later."; break
            }
        }
    }

    var msgFull = msg !== undefined ? msg : type
    var titleFull = title !== undefined ? title : `Error ${temp}`

    SetNotif({ "title": titleFull, "body": msgFull, "type": "error" })
}
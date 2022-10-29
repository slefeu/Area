import '../css/notif.css'
import '../css/colors.css'

export default function SetNotif( {title, body, type} ) {
    try { document.getElementById("notif").remove() } catch (e) { }

    var notif = document.createElement("div")
    notif.className = "notif " + (type !== undefined ? type : "")
    notif.id = "notif"
    notif.innerHTML = `<div class="notifTitle">${title}</div><div class="notifBody">${body}</div>`
    document.body.appendChild(notif)
}


export function Error( {title, res, msg} ) {
    var temp = res?.response?.status
    var type = ""

    try {
        type = Object.keys(res.response.data.errors).map((e) => {
            var temp = ""
    
            res.response.data.errors[e].forEach((elem) => { temp += elem + ", " })
            temp = temp.slice(0, -2)
    
            return `<b>${e}</b>: ${temp}`
        })
    } catch (e) { type = res.response.data.error }

    if (type === undefined) {
        switch (temp) {
            case 401: type = "No access. Please log in again to continue."; break
            case 404: type = "Server not found. Please restart the application."; break
            case 422: type = "Invalid Informations. Please change request data and retry."; break
            default: type = "An error occured. Please try again later."; break
        }
    }

    var msgFull = msg !== undefined ? msg : type
    var titleFull = title !== undefined ? title : `Error ${temp}`

    SetNotif({"title": titleFull, "body": msgFull, "type": "error"})
}
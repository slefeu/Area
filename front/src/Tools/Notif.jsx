import '../css/notif.css'
import '../css/colors.css'

export default function SetNotif( {title, body} ) {
    if (title === undefined || body === undefined) return

    try { document.getElementById("notif").remove() } catch (e) { }

    var notif = document.createElement("div")
    notif.className = "notif"
    notif.id = "notif"
    notif.innerHTML = `<div class="notifTitle">${title}</div><div class="notifBody">${body}</div>`
    document.body.appendChild(notif)
}

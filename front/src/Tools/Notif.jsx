import '../css/notif.css'
import '../css/colors.css'

function setNotif( {title, body}) {
    console.log("setNotif")
    
    // if (notif == null || notif == undefined) return

    if (title == undefined || body == undefined) return

    if (document.getElementById("notifZone") != undefined &&
        document.getElementById("notifZone") != null) {
        document.getElementById("notifZone").remove()
        // return
    }

    console.log("coucou")
    
    var notif = document.createElement("div")
    notif.id = "notifZone"    
    notif.innerHTML = `
    <div class="notif">
    <div class="notifTitle">${title}</div>
    <div class="notifBody">${body}</div>
    </div>`

    document.body.appendChild(notif)

    setTimeout(() => {
        try {
            document.getElementById("notifZone").remove()
            console.log("remove")
        } catch (error) {}
    }, 4000);

    // ReactDOM.render(<Notif title={title} body={body} />, notif)
}

export default setNotif
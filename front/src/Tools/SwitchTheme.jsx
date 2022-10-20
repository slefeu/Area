import setNotif from "./Notif"

function SwitchTheme() {
    localStorage.setItem("theme", localStorage.getItem("theme") === "theme-dark" ? "theme-light" : "theme-dark")

    document.documentElement.className = localStorage.getItem("theme")
    setNotif({ title: "Theme", body: "Theme changed" })
}

export default SwitchTheme
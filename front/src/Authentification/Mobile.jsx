
function checkMobile() {
    if (localStorage.getItem("platform") === "web") {
        return (localStorage.getItem("url"));
    } else {
        return ("");
    }
}

export default checkMobile;
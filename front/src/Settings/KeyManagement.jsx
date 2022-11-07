import { AiOutlineSave } from "react-icons/ai"

import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"
import AXIOS from "../Tools/Client"
import SwitchTheme from "../Tools/SwitchTheme"

function HandleKey({children, title, fun}) {
    return (
        <Container type="large">
            <div className="column row-2 border">
                <div>{title}</div>
                {children}
            </div>
            <button onClick={fun} className="btnBig"><AiOutlineSave /></button>
        </Container>
    );
}

function APIPage() {
    SwitchTheme();

    const SPOTIFY_CLIENT_ID = "d89d9e6d83484fc48fff9bc6791371c0"
    var url = localStorage.getItem("platform") === "mobile" ? "file:///android_asset/www/index.html" : "http://" + window.location.href.split("/")[2]

    return (
        <>
        <SettingsNavBar currentPage="API" />
        <div className="content large">
            <HandleKey title="Spotify" key="Spotify" fun={() => {
                const token = "Bearer " + localStorage.getItem("token")
                AXIOS.patch(localStorage.getItem("url") + "/users",
                    { 
                        "user": {
                            "spotify_token": document.getElementById("spotifyInput").value,
                            "current_password": document.getElementById("passwordInput").value
                        }
                    },
                    { headers: { Authorization: token } })
                    .then(res => { console.log(res) })
                    .catch(error => { Error({ "res": error }) });
            }}>
                <div className="infos">
                    Go to <a href="https://developer.spotify.com/console/get-current-user/" target="_blank" rel="noreferrer">Spotify API</a> and get your token, or try to
                    <a href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${url}&response_type=code`}> login with Spotify</a>.
                </div>
                <input type="text" id="spotifyInput" placeholder="User Token" defaultValue={localStorage.getItem("spotifyToken")}/>
                <input type="text" id="passwordInput" placeholder="AREA Password" />
                <button onClick={() => {
                    AXIOS.get("https://api.spotify.com/v1/me", {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("spotifyToken")
                        }
                    })
                    .then(res => { console.log(res.data) })
                    .catch(err => { console.log(err) })

                }}>Test Spotify Token</button>
            </HandleKey>
            <HandleKey title="Google" key="Google" fun={() => { console.log("google") } } />
            <HandleKey title="Twitter" key="Twitter" fun={() => { console.log("twitter") } } />
        </div>
        </>
    );
}

export default APIPage;
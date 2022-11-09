// import { AiOutlineSave } from "react-icons/ai"

import SettingsNavBar from "./SettingsNavBar"
import Container from "../Tools/Container"
import SwitchTheme from "../Tools/SwitchTheme"

function APIPage() {
    SwitchTheme();

    const SPOTIFY_CLIENT_ID = "d89d9e6d83484fc48fff9bc6791371c0"
    var url = localStorage.getItem("platform") === "mobile" ? "file:///android_asset/www/index.html" : "http://" + window.location.href.split("/")[2]

    return (
        <>
        <SettingsNavBar currentPage="API" />
        <div className="content large">
            <Container type="large" key="Spotify">
                <a  className="spotify" href={`https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${url}&response_type=code&scope=user-library-read,playlist-modify-public,playlist-modify-private,user-read-private,user-read-email`}>Login with Spotify</a>
            </Container>

            {/* <Container type="large" key="Google">
                <div className="column row-2 border">
                    <div>Google</div>
                </div>
                <button onClick={() => { console.log("google") }} className="btnBig"><AiOutlineSave /></button>
            </Container> */}
        </div>
        </>
    );
}

export default APIPage;
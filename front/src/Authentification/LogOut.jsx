import axios from "axios";

function LogoutUser() {
  const token = "Bearer " + localStorage.getItem("token");
  const url = localStorage.getItem("url") + "/users/sign_out.json";
  const values = {
    headers: {
      Authorization: token,
    }
  }
  axios.delete(url, values)
    .then(res => {
      window.location.href = "/login";
      console.log("success");
    })
    .catch((error) => {
      console.log("error")
    });
}

export default LogoutUser;
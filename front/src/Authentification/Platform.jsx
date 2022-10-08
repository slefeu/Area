import React from "react";


const handlePlatform = () => {
    if (localStorage.getItem("platform") === "web") {
        return (true);
    }
    return (false);
};

export default handlePlatform;

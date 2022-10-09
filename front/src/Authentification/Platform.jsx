function handlePlatform() {
    if (localStorage.getItem("platform") === "web") {
        return (true);
    }
    return (false);
};

export default handlePlatform;
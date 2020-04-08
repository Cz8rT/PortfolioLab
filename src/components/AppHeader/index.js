import React from "react";
import UserStatusBar from "./UserStatusBar/UserStatusBar";
import Navigation from "./Navigation/Navigation"

const AppHeader = () => {
    return (
        <header id={"appHeader"}>
            <UserStatusBar/>
            <Navigation/>
        </header>
    )
};

export default AppHeader;
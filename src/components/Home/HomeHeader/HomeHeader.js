import React from "react";
import NotLogged from "./NotLogged/NotLogged";
import Navigation from "./Navigation/Navigation"

const HomeHeader = () => {
    return (
        <header>
            <NotLogged/>
            <Navigation/>
        </header>
    )
};

export default HomeHeader;
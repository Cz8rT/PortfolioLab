import React from "react";
import UserStatusBar from "../AppHeader/UserStatusBar/UserStatusBar";
import {Link} from "react-router-dom";

const ToMainPage = () => {
    return (
        <header id={"appHeader"}>
            <UserStatusBar/>
            <div>
                <Link id={"toMainPage"} to={"/"}>Powrót do strony głównej</Link>
            </div>
        </header>
    )
};

export default ToMainPage;
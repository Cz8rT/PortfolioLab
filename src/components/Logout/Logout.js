import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <section id={"logout"}>
            <AppHeader/>
            <div id={"logoutBox"}>
                <div className={"title_container"}>
                    <h1>Wylogowanie nastąpiło<br/>pomyślnie!</h1>
                </div>
                <Link className="logoutLink" to={'/'}>Strona główna</Link>
            </div>
        </section>
    )
};

export default Logout;
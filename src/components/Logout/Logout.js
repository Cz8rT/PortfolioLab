import React from "react";
import {Link} from "react-router-dom";
import ToMainPage from "../ToMainPage";

const Logout = () => {
    return (
        <section id={"logout"}>
            <ToMainPage/>
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
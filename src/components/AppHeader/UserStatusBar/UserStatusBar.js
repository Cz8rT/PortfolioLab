import React from "react";
import {Link} from "react-router-dom";

const UserStatusBar = () => {
    return (
        <>
            <Link className="loginLink" to={'/logowanie'}>Zaloguj</Link>
            <Link className="loginLink registerLink" to={'/rejestracja'}>Załóż konto</Link>
        </>
    )
};

export default UserStatusBar;
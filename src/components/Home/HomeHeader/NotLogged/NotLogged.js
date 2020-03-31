import React from "react";
import {Link} from "react-router-dom";

const NotLogged = () => {
    return (
        <>
            <Link to={'/logowanie'}>Zaloguj</Link>
            <Link to={'/rejestracja'}>Załóż konto</Link>
        </>
    )
};

export default NotLogged;
import React, {useCallback, useContext, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {AuthContext} from "../../../config/Auth";
import app from "../../../config/firebase";

const UserStatusBar = () => {
    const [logout, setLogout] = useState(false);
    const currentUser = useContext(AuthContext);
    const handleLogout = useCallback(async event => {
        try {
            await app
                .auth()
                .signOut();
            console.log("wylogowano");
            setLogout(true);
        }
        catch (error) {
            alert(error)
        }
    }, []);

    if (currentUser) {
        return (
            <>
                <span>{currentUser.email}</span>
                <button onClick={handleLogout}>Wyloguj</button>
            </>
        )
    }

    if (logout) {
        return (
            <Redirect to={"/wylogowano"}/>
        )
    }

    return (
        <>
            <Link className="loginLink" to={'/logowanie'}>Zaloguj</Link>
            <Link className="loginLink registerLink" to={'/rejestracja'}>Załóż konto</Link>
        </>
    )
};

export default UserStatusBar;
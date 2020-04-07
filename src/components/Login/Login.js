import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
    return (
        <section id={"login"}>
            <AppHeader/>
            <div id={"loginBox"}>
                <div className={"title_container"}>
                    <h1>Zaloguj się</h1>
                </div>
                <div id={"loginForm"}>
                    <LoginForm/>
                </div>
            </div>
        </section>
    )
};

export default Login;
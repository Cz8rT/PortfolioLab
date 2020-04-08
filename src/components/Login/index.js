import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import ToMainPage from "../ToMainPage";

const Login = () => {
    return (
        <section id={"login"}>
            <ToMainPage/>
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
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
    return (
        <section id={"register"}>
            <AppHeader/>
            <div id={"registerBox"}>
                <div className={"title_container"}>
                    <h1>Załóż konto</h1>
                </div>
                <div id={"registerForm"}>
                    <RegisterForm/>
                </div>
            </div>
        </section>
    )
};

export default Register;
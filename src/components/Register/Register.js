import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import ToMainPage from "../ToMainPage";

const Register = () => {
    return (
        <section id={"register"}>
            <ToMainPage/>
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
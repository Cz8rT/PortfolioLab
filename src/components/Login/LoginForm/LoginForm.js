import React, {useState} from "react";
import EmailField from "./LoginFields/EmailField/EmailField";
import {Form} from "react-final-form";
import PasswordField from "./LoginFields/PasswordField/PasswordField";
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");

    const sendLogin = () => {
        console.log("zalogowano")
    };

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    };

    return (
        <Form onSubmit={sendLogin}>
            {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                <div className={"fields_container"}>
                    <EmailField email={email} emailInputHandler={emailInputHandler}/>
                    <PasswordField email={email} emailInputHandler={emailInputHandler}/>
                </div>
                <div className={"btn_container"}>
                    <Link className="loginLink registerLink" to={'/rejestracja'}>Załóż konto</Link>
                    <button type={"submit"} disabled={submitting}>Zaloguj się</button>
                </div>
            </form>}
        </Form>
    )
};

export default LoginForm;
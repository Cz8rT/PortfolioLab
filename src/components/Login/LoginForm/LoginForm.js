import React, {useState} from "react";
import {Form} from "react-final-form";
import {Link} from "react-router-dom";
import EmailField from "./LoginFields/EmailField/EmailField";
import PasswordField from "./LoginFields/PasswordField/PasswordField";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendLogin = () => {
        console.log("zalogowano")
    };

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Form onSubmit={sendLogin}>
            {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                <div className={"fields_container"}>
                    <EmailField email={email} emailInputHandler={emailInputHandler}/>
                    <PasswordField name={"password"}
                                   password={password}
                                   passInputHandler={passwordInputHandler}
                                   title={"Hasło"}
                                   confirm={password}/>
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
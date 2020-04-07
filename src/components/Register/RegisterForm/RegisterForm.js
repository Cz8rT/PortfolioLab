import React, {useState} from "react";
import {Form} from "react-final-form";
import {Link} from "react-router-dom";
import EmailField from "../../Login/LoginForm/LoginFields/EmailField/EmailField";
import PasswordField from "../../Login/LoginForm/LoginFields/PasswordField/PasswordField";

const RegisterForm = () => {
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
                    <PasswordField email={email} emailInputHandler={emailInputHandler} title={"Hasło"}/>
                    <PasswordField email={email} emailInputHandler={emailInputHandler} title={"Powtórz hasło"}/>
                </div>
                <div className={"btn_container"}>
                    <Link className="loginLink" to={'/logowanie'}>Zaloguj się</Link>
                    <button type={"submit"} disabled={submitting}>Załóż konto</button>
                </div>
            </form>}
        </Form>
    )
};

export default RegisterForm;
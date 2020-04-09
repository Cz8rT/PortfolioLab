import React, {useState, useCallback, useContext} from "react";
import {Form} from "react-final-form";
import {Link, Redirect} from "react-router-dom";
import app from "../../../config/firebase";
import {AuthContext} from "../../../config/Auth";
import EmailField from "./LoginFields/EmailField/EmailField";
import PasswordField from "./LoginFields/PasswordField/PasswordField";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentUser = useContext(AuthContext);

    const handleLogin = useCallback(async event => {
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email, password);
            console.log("zalogowano");
        }
        catch (error) {
            alert(error)
        }
    }, [email, password]);

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordInputHandler = (event) => {
        setPassword(event.target.value);
    };

    if (currentUser) {
        return (
            <Redirect to={"/"}/>
        )
    }
    return (
        <Form onSubmit={handleLogin}>
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
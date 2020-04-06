import React, {useState} from "react";
import {Form} from "react-final-form";
import FirstNameField from "./ContactFields/FirstNameField/FirstNameField";
import EmailField from "./ContactFields/EmailField/EmailField";
import MsgField from "./ContactFields/MsgField/MsgField";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [server, setServer] = useState(undefined);
    const [error, setError] = useState(undefined);

    const userObject = {
        name: name,
        email: email,
        message: msg
    };

    const sendMessage = () => {
        console.log(userObject);
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
            .then((res) => {
                return res.json();
            }).then(res => {
            console.log(res);
            setServer(res);
        })
        .catch((error) => {
            console.log(error);
            setError(error);
        })
    };

    const nameInputHandler = (event) => {
        setName(event.target.value);
    };

    const emailInputHandler = (event) => {
        setEmail(event.target.value);
    };

    const msgInputHandler = (event) => {
        setMsg(event.target.value);
    };

    return (
        <Form onSubmit={sendMessage}>
            {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                <div className={"title_container"}>
                    <h4>Skontaktuj się z nami</h4>
                </div>
                {server && <p id={"successMsg"}>Wiadomość została wysłana!
                    <br/>Wkrótce się skontaktujemy.</p>}
                {error && <p id={"errorMsg"}>Coś poszło nie tak!
                    <br/>Błąd: {error}</p>}
                <div className={"nameEmail_container"}>
                    <FirstNameField name={name} nameInputHandler={nameInputHandler}/>
                    <EmailField email={email} emailInputHandler={emailInputHandler}/>
                </div>
                <MsgField msg={msg} msgInputHandler={msgInputHandler}/>
                <button type={"submit"} disabled={submitting}>Wyślij</button>
            </form>}
        </Form>
    )
};

export default ContactForm;
import React, {useState} from "react";
import {Form, Field} from "react-final-form";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [server, setServer] = useState(undefined);

    const userObject = {
        name: name,
        email: email,
        message: msg
    };

    const sendMessage = () => {
        console.log("Wysłano wiadomość!");
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
        });
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

    const firstNameValidation = () => {
        return (
            1 ? undefined : "Podane imię jest nieprawidłowe!"
        )
    };

    const emailValidation = () => {
        return (
            1 ? undefined : "Podany email jest nieprawidłowy!"
        )
    };

    const messageValidation = () => {
        return (
            1 ? undefined : "Wiadomość musi mieć conajmniej 120 znaków!"
        )
    };

    return (
        <Form onSubmit={sendMessage}>
            {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                <div className={"title_container"}>
                    <h4>Skontaktuj się z nami</h4>
                </div>
                {server && <p id={"successMsg"}>Wiadomość została wysłana!
                    <br/>Wkrótce się skontaktujemy.</p>}
                <div className={"nameEmail_container"}>

                    <Field name={"firstName"}
                           component="input"
                           placeholder={"Krzysztof"}
                           validate={firstNameValidation}>
                        {({input, meta, placeholder}) => (
                            <div>
                                <div className={"input_container"}>
                                    <label>Wpisz swoje imię</label>
                                    <input {...input}
                                           placeholder={placeholder}
                                           value={name}
                                           onChange={nameInputHandler}/>
                                </div>
                                {meta.error && meta.touched && <p>{meta.error}</p>}
                            </div>
                        )}
                    </Field>

                    <Field name={"email"}
                           component="input"
                           placeholder={"abc@xyz.pl"}
                           validate={emailValidation}>
                        {({input, meta, placeholder}) => (
                            <div>
                                <div className={"input_container"}>
                                    <label>Wpisz swój email</label>
                                    <input {...input}
                                           placeholder={placeholder}
                                           value={email}
                                           onChange={emailInputHandler}/>
                                </div>
                                {meta.error && meta.touched && <p>{meta.error}</p>}
                            </div>
                        )}
                    </Field>
                </div>
                <Field name={"userMessage"}
                       component="textarea"
                       rows={4}
                       placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                       "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                       "ut aliquip ex ea commodo consequat."}
                       validate={messageValidation}>
                    {({input, meta, rows, placeholder}) => (
                        <div className={"textarea_container"}>
                            <div className={"input_container"}>
                                <label>Wpisz swoją wiadomość</label>
                                <textarea {...input}
                                          rows={rows}
                                          placeholder={placeholder}
                                          value={msg}
                                          onChange={msgInputHandler}/>
                            </div>
                            {meta.error && meta.touched && <p>{meta.error}</p>}
                        </div>
                    )}
                </Field>
                <button type={"submit"} disabled={submitting}>Wyślij</button>
            </form>}
        </Form>
    )
};

export default ContactForm;
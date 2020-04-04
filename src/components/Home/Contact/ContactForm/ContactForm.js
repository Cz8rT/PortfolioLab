import React from "react";
import {Form, Field} from "react-final-form";

const ContactForm = () => {

    const sendMessage = () => {
        console.log("Wysłano wiadomość!")
    };

    return (
        <Form onSubmit={sendMessage}>
            {({handleSubmit, submitting}) => <form onSubmit={handleSubmit}>
                <div className={"title_container"}>
                    <h4>Skontaktuj się z nami</h4>
                </div>
                <div>
                    <div className={"input_container"}>
                        <label>Wpisz swoje imię</label>
                        <Field name={"firstName"}
                               component="input"
                               placeholder={"Krzysztof"}/>
                    </div>
                    <div className={"input_container"}>
                        <label>Wpisz swój email</label>
                        <Field name={"email"}
                               component="input"
                               placeholder={"abc@xyz.pl"}/>
                    </div>
                </div>
                <div className={"input_container"}>
                    <label>Wpisz swoją wiadomość</label>
                    <Field name={"userMessage"}
                           component="textarea"
                           rows={4}
                           placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                           "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                           "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                           "ut aliquip ex ea commodo consequat."}/>
                </div>
                <button type={"submit"} disabled={submitting}>Wyślij</button>
                </form>}
        </Form>
    )
};

export default ContactForm;
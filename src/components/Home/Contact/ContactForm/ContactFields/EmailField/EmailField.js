import React from "react";
import {Field} from "react-final-form";

const EmailField = ({email, emailInputHandler}) => {

    const emailValidation = (value) => {

        const forbiddenChars = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+",
            "=", "{", "}", "[", "]", ":", ";", '"', "'", "|", ",", "<", ">", "/", "`", "?", "~"];

        // Checking if user email contains forbidden chars method
        const forbiddenSearch = (value) => {
            const splitEmail = value.split("");
            for (let i = 0; i < forbiddenChars.length; i++) {
                if (splitEmail.includes(forbiddenChars[i])) {
                    return true;
                }
            }
        };

        // Checking if user email contains "@" method
        const atSearch = (value) => {
            let atCounter = 0;
            const splitEmail = value.split("");
            for (let i = 0; i < splitEmail.length; i++) {
                if (splitEmail[i] === "@") {
                    atCounter++
                }
            }
            return atCounter
        };

        // Conditions for user email to be valid
        if (value.length === 0) {
            return "Podany email jest nieprawidłowy!"
        } else if (value.split("").includes(" ")) {
            return "Email nie może zawierać spacji!"
        } else if (forbiddenSearch(value)) {
            return "Email nie może zawierać niedozwolonych znaków!"
        } else if (atSearch(value) === 0) {
            return 'Email musi zawierać znak "@"!'
        } else if (atSearch(value) > 1) {
            return "Email nie może zawierać niedozwolonych znaków!"
        } else {
            return undefined
        }
    };

    return (
        <Field name={"email"}
               component="input"
               placeholder={"abc@xyz.pl"}
               validate={emailValidation}
               defaultValue={email}>
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
    )
};

export default EmailField;
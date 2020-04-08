import React from "react";
import {Field} from "react-final-form";
import {emailValidation} from "../../../../../../config/validation";

const EmailField = ({email, emailInputHandler}) => {
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
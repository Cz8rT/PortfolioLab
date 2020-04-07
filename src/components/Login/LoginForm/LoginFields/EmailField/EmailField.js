import React from "react";
import {Field} from "react-final-form";
import {emailValidation} from "../../../../../validation";

const EmailField = ({email, emailInputHandler}) => {

    return (
        <Field name={"email"}
               component="input"
               validate={emailValidation}
               defaultValue={email}>
            {({input, meta}) => (
                <div>
                    <div className={"input_container"}>
                        <label>Email</label>
                        <input {...input}
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
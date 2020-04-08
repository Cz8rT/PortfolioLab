import React from "react";
import {Field} from "react-final-form";
import {passwordValidation} from "../../../../../config/validation";

const PasswordField = ({name, password, passInputHandler, title, confirm}) => {

    return (
        <Field name={name}
               component="input"
               validate={passwordValidation(confirm)}
               defaultValue={password}>
            {({input, meta}) => (
                <div>
                    <div className={"input_container"}>
                        <label>{title}</label>
                        <input {...input}
                               value={password}
                               onChange={passInputHandler}
                               type={"password"}/>
                    </div>
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
            )}
        </Field>
    )
};

export default PasswordField;
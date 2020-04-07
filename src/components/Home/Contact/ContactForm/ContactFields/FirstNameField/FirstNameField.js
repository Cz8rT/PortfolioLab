import React from "react";
import {Field} from "react-final-form";
import {firstNameValidation} from "../../../../../../validation";

const FirstNameField = ({name, nameInputHandler}) => {
    return (
        <Field name={"firstName"}
               component="input"
               placeholder={"Krzysztof"}
               validate={firstNameValidation}
               defaultValue={name}>
            {({input, meta, placeholder}) => (
                <div>
                    <div className={"input_container"}>
                        <label>Wpisz swoje imię</label>
                        <input {...input}
                               value={name}
                               placeholder={placeholder}
                               onChange={nameInputHandler}/>
                    </div>
                    {meta.error && meta.touched && <p>{meta.error}</p>}
                </div>
            )}
        </Field>
    )
};

export default FirstNameField;
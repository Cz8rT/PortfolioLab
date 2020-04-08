import React from "react";
import {Field} from "react-final-form";
import {messageValidation} from "../../../../../../config/validation";

const MsgField = ({msg, msgInputHandler}) => {
    return (
        <Field name={"userMessage"}
               component="textarea"
               rows={4}
               placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
               "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
               "ut aliquip ex ea commodo consequat."}
               validate={messageValidation}
               defaultValue={msg}>
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
    )
};

export default MsgField;
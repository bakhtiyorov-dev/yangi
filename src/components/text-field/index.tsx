import React from 'react';
import {TextFieldProps} from "@/components/text-field/props";
import {FieldHookConfig, useField} from "formik";

const TextField = ({...props}: TextFieldProps & FieldHookConfig<string>) => {
    const [field, meta, helpers] = useField(props)
    return (
        <div className={"w-full inline-block"}>
            <label
            className={`${(meta.touched && meta.error) ? 'border-2 border-red-500' : ""} rounded-md w-full inline-block`}>
                <input {...props} className={"input"} {...field}
                    autoComplete={"off"}
                />
        </label>
            {
                meta.error && <p className={"text-red-500 text-sm my-2"}>{meta.error}</p>
            }
        </div>

    );
};

export default TextField;
 
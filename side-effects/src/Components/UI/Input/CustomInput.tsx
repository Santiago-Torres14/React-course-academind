import React from "react";
import classes from "../../login/Login.module.css";

const CustomInput: React.FC<{
    className: string,
    htmlFor: string,
    type: string,
    id: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
    label: string;
}> = (props) => {
    return (
        <div
            className={props.className}
        >
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
}

export default CustomInput;
import React, {ButtonHTMLAttributes} from "react";
import classes from "./Button.module.css";

const Button: React.FC<React.PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = (props) => {
    return (<button
    type={props.type}
    className={`${classes.button} ${props.className}`}
    onClick={props.onClick}
    disabled={props.disabled}>
        {props.children}
    </button>);
}

export default Button;
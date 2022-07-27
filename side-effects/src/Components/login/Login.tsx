import React, {useContext, useEffect, useReducer, useState} from "react";
import {LoginProps} from "../../Shared/Interfaces";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../context/auth-context";
import CustomInput from "../UI/Input/CustomInput";

enum LoginActionKind {
    USER_INPUT = "USER_INPUT",
    INPUT_BLUR = "INPUT_BLUR"
}

interface LoginAction {
    type: LoginActionKind;
    payload: string;
}

interface BlurAction {
    type: LoginActionKind.INPUT_BLUR;
}

interface LoginEmailState {
    email: string;
    isValid?: boolean;
}

interface LoginPasswordState {
    password: string;
    isValid?: boolean
}

const Login: React.FC = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const authCtx = useContext(AuthContext);

    const [passwordState, dispatchPassword] = useReducer((prevState: LoginPasswordState, action: LoginAction | BlurAction): LoginPasswordState => {
        if (action.type === LoginActionKind.USER_INPUT) {
            return {password: action.payload, isValid: action.payload.trim().length > 6}
        }
        if (action.type === LoginActionKind.INPUT_BLUR) {
            return {...prevState}
        }
        return {password: '', isValid: undefined}
    }, {password: '', isValid: undefined});

    const [emailState, dispatchEmail] = useReducer((prevState: LoginEmailState, action: LoginAction | BlurAction): LoginEmailState => {
        if (action.type === LoginActionKind.USER_INPUT) {
            return {email: action.payload, isValid: action.payload.includes('@')};
        }
        if (action.type === LoginActionKind.INPUT_BLUR) {
            return {...prevState};
        }
        return {email: '', isValid: false};
    }, {email: '', isValid: undefined});

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("CHECKING")
            setFormIsValid(
                (emailState.isValid ?? false) && (passwordState.isValid ?? false)
            );
        }, 500);

        return () => {
            console.log("CLEAN UP")
            clearTimeout(identifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({type: LoginActionKind.USER_INPUT, payload: event.currentTarget.value});
    };

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchPassword({type: LoginActionKind.USER_INPUT, payload: event.currentTarget.value});
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: LoginActionKind.INPUT_BLUR})
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: LoginActionKind.INPUT_BLUR});
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        authCtx.loginHandler(emailState.email, passwordState.password);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <CustomInput
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                    htmlFor="email"
                    label="E-Mail"
                    type="email"
                    id="email"
                    value={emailState.email}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}/>
                <CustomInput
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                    htmlFor="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={passwordState.password}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
        ;
};

export default Login;
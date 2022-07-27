import React, {PropsWithChildren, useEffect, useState} from 'react';
import {LoginProps, NavProps} from "../../Shared/Interfaces";

const AuthContext = React.createContext<NavProps & LoginProps>({
    isLoggedIn: false,
    logoutHandler: () => {},
    loginHandler: (email: string, password: string) => {}
});


export const AuthContextProvider: React.FC<PropsWithChildren> = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email: string, password: string) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () : void => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, logoutHandler: logoutHandler, loginHandler: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
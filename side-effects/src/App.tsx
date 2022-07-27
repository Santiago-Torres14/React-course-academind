import React, {useContext} from 'react';

import Home from './Components/home/Home';
import MainHeader from './Components/mainheader/MainHeader';
import Login from "./Components/login/Login";
import AuthContext from "./Components/context/auth-context";

function App() {

    const ctx = useContext(AuthContext);

    return (
        <>
            <MainHeader/>
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </>
    );
}

export default App;

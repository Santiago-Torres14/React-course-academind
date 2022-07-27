import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AuthContext, {AuthContextProvider} from "./Components/context/auth-context";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
    </React.StrictMode>
)

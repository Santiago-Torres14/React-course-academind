export interface LoginProps {
    loginHandler: (email: string, password: string) => void;
}

export interface NavProps {
    isLoggedIn: boolean;
    logoutHandler: () => void;
}
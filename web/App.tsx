import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
    const isAuthenticated = (): boolean => {
        return true;
    };

    return (
        <>
            <BrowserRouter>
                isAuthenticated() ? (
                <AuthenticatedRoutes />
                ) : (
                <UnauthenticatedRoutes />
                );
            </BrowserRouter>
        </>
    );
};

const AuthenticatedRoutes = () => {
    return <Routes></Routes>;
};

const UnauthenticatedRoutes = () => {
    return <></>;
};

export default App;

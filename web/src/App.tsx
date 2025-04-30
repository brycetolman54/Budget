import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useTheme } from "./providers/Theme";
import { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

const App = () => {
    const isAuthenticated = (): boolean => {
        return false;
    };

    const { theme, applyTheme } = useTheme();

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <>
            <div id="mine">mine</div>
            <BrowserRouter>
                {isAuthenticated() ? (
                    <AuthenticatedRoutes />
                ) : (
                    <UnauthenticatedRoutes />
                )}
            </BrowserRouter>
        </>
    );
};

const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>} />
        </Routes>
    );
};

const UnauthenticatedRoutes = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="*"
                element={<Login originalUrl={location.pathname} />}
            />
        </Routes>
    );
};

export default App;

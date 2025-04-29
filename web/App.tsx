import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
    const isAuthenticated = (): boolean => {
        return true;
    };

    return (
        <BrowserRouter>
            {isAuthenticated() ? (
                <AuthenticatedRoutes />
            ) : (
                <UnauthenticatedRoutes />
            )}
        </BrowserRouter>
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
    return (
        <Routes>
            <Route path="/" element={<div>Login</div>} />
        </Routes>
    );
};

export default App;

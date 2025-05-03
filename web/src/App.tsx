import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useTheme } from "./providers/Theme";
import { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { useMessage } from "./providers/Message/MessageProvider";

const App = () => {
    const isAuthenticated = (): boolean => {
        return true;
    };

    const { theme, applyTheme, updateTheme } = useTheme();

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const { showMessage } = useMessage();

    return (
        <>
            <div id="mine">mine</div>
            <button
                onClick={() =>
                    updateTheme({
                        ...theme,
                        primary: "#0F0",
                    })
                }
            >
                Change Theme
            </button>
            <button
                onClick={() =>
                    showMessage("Hello World", true, "Confirm", () =>
                        updateTheme({
                            ...theme,
                            primary: "#0F0",
                        })
                    )
                }
            >
                Show Message
            </button>
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

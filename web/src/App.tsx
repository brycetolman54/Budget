import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useTheme } from "./providers/Theme";
import { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import { useMessage } from "./providers/Message/MessageProvider";
import { useUser } from "./providers/User";
import { AuthToken, User } from "shared";
import { CheckCircle } from "./components/Icons/CheckCircle/CheckCircle";
import { CrossCircle } from "./components/Icons/CrossCircle/CrossCircle";

const App = () => {
    const { user, token, setUser, clearUser } = useUser();

    const isAuthenticated = (): boolean => {
        return !!user && !!token;
    };

    const { theme, applyTheme, updateTheme } = useTheme();

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const { showMessage } = useMessage();

    return (
        <>
            <CheckCircle />
            <CrossCircle />
            <div id="mine">mine</div>
            <button
                onClick={() =>
                    updateTheme({
                        ...theme,
                        primary: "#0F0",
                        light: false,
                    })
                }
            >
                Change Theme
            </button>
            <button
                onClick={() =>
                    showMessage(
                        "Hello World I want to talk to you about something but like something so important I need you to talk to me about it right now",
                        true,
                        "Confirm",
                        undefined,
                        () =>
                            updateTheme({
                                ...theme,
                                primary: "#FFF",
                            })
                    )
                }
            >
                Show Message
            </button>
            <button
                onClick={() =>
                    setUser(
                        new User("bryce", "bryce", "mine@me.com", "mine.com", {
                            primary: "#F00",
                            secondary: "#0F0",
                            tertiary: "#00F",
                            light: false,
                        }),
                        AuthToken.Generate(),
                        true
                    )
                }
            >
                Set User
            </button>
            <button onClick={() => clearUser()}>Clear User</button>
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

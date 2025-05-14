import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import "./App.css";
import { useTheme } from "./providers/Theme";
import { useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import SiteLayout from "./components/Layout/SiteLayout/SiteLayout";
import { useUser } from "./providers/User";
import { AuthToken, User } from "shared";
import { StatusHolder } from "./providers/Status/StatusHolder";
import { useLang } from "./providers/Language";
import NotFound from "./components/NotFound/NotFound";
import { SiteLogo } from "./components/Icons/SiteIcons";

const App = () => {
    const { user, token, setUser, clearUser } = useUser();

    const isAuthenticated = (): boolean => {
        return !!user && !!token;
    };

    const { theme, applyTheme } = useTheme();

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const { lang } = useLang();

    useEffect(() => {
        document.title = lang.title;
    }, [lang]);

    const logoURL = `data:image/svg+xml,${ReactDOMServer.renderToStaticMarkup(
        <SiteLogo size="32" />
    )}`;
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    link.href = logoURL;

    return (
        <>
            <button
                onClick={() =>
                    setUser(
                        new User(
                            "bryce",
                            "bryce",
                            "mine@me.com",
                            "mine.com",
                            {
                                primary: "#F00",
                                secondary: "#0F0",
                                tertiary: "#00F",
                                light: false,
                            },
                            "tolman",
                            "es"
                        ),
                        AuthToken.Generate(),
                        true
                    )
                }
            >
                Set User
            </button>
            <button onClick={() => clearUser()}>Clear User</button>

            <StatusHolder />
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
            <Route element={<SiteLayout />}>
                <Route index element={<Navigate to="home" />} />
                <Route path="1" element={<div>1</div>} />
                <Route path="2" element={<div>2</div>} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

const UnauthenticatedRoutes = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
                path="*"
                element={<Login originalUrl={location.pathname} />}
            />
        </Routes>
    );
};

export default App;

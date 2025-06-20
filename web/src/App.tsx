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
import { AuthToken, AuthTokenType, User } from "shared";
import { StatusHolder } from "./providers/Status/StatusHolder";
import { useLang } from "./providers/Language";
import NotFound from "./components/NotFound/NotFound";
import { SiteLogo } from "./components/Icons";
import { useUser } from "./providers";
import About from "./components/Shared/About/About";

const App = () => {
    const { user, token } = useUser();

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
        <SiteLogo size="32" color="white" />
    )}`;
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    link.href = logoURL;

    return (
        <>
            <StatusHolder />
            <BrowserRouter>
                {isAuthenticated() ? (
                    <AuthenticatedRoutes tokenType={token!.type} />
                ) : (
                    <UnauthenticatedRoutes />
                )}
            </BrowserRouter>
        </>
    );
};

interface AuthProps {
    tokenType: AuthTokenType;
}

const AuthenticatedRoutes = (props: AuthProps) => {
    return (
        <>
            <Routes>
                <Route element={<SiteLayout />}>
                    <Route index element={<Navigate to="notfound" />} />
                    <Route path="/about" element={<About />} />
                    {renderRoutes(props.tokenType)}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

const renderRoutes = (tokenType: AuthTokenType) => {
    switch (tokenType) {
        case AuthTokenType.Admin:
            return (
                <>
                    <Route path="routes" element={<div>Admin Routes</div>} />
                </>
            );
        case AuthTokenType.Parent:
            return (
                <>
                    <Route path="routes" element={<div>Parent Routes</div>} />
                </>
            );
        case AuthTokenType.Child:
            return (
                <>
                    <Route path="routes" element={<div>Child Routes</div>} />
                </>
            );
        case AuthTokenType.None:
            return (
                <>
                    <Route
                        path="routes"
                        element={
                            <div>
                                I do not know how you got here, but you should
                                not be here...
                            </div>
                        }
                    />
                </>
            );
    }
};

const UnauthenticatedRoutes = () => {
    const location = useLocation();

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* <Route
                path="*"
                element={<Login originalUrl={location.pathname} />}
            /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;

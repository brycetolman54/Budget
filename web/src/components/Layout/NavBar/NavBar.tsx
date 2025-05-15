import { NavLink } from "react-router-dom";
import { SiteLogo } from "../../Icons/SiteIcons";
import { useUser } from "../../../providers/User";
import { AuthTokenType } from "shared";

const NavBar = () => {
    const { token } = useUser();

    return (
        <>
            <header>
                <SiteLogo size="32" />
                <div id="links">
                    {renderLinks(token!.type)}
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </div>
                <div id="shrink-icon">Shrink</div>
            </header>
        </>
    );
};

const renderLinks = (tokenType: AuthTokenType) => {
    switch (tokenType) {
        case AuthTokenType.Admin:
            return (
                <>
                    <NavLink className="nav-link" to="/admin">
                        Admin Link
                    </NavLink>
                </>
            );
        case AuthTokenType.Parent:
            return (
                <>
                    <NavLink className="nav-link" to="/parent">
                        Parent Link
                    </NavLink>
                </>
            );
        case AuthTokenType.Child:
            return (
                <>
                    <NavLink className="nav-link" to="/child">
                        Child Link
                    </NavLink>
                </>
            );
    }
};

export default NavBar;

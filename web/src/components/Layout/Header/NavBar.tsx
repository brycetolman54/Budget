import { NavLink } from "react-router-dom";
import { useUser } from "../../../providers/User";
import { AuthTokenType } from "shared";
import { ShrinkBars, SiteLogo, UserIcon } from "../../Icons";

const NavBar = () => {
    const { user, token } = useUser();

    return (
        <>
            <header>
                <ShrinkBars />
                <div id="links">
                    {renderLinks(token!.type)}
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </div>
                <SiteLogo size="32" />
                <UserIcon />
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

import "./NavBar.css";

import { NavLink } from "react-router-dom";
import { useUser } from "../../../providers/User";
import { AuthTokenType } from "shared";
import { ShrinkBars, SiteLogo, UserIcon } from "../../Icons";
import { useEffect, useState } from "react";
import { useTheme } from "../../../providers/Theme";

const NavBar = () => {
    const { user, token } = useUser();

    const { theme } = useTheme();

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--side-links-bg-color",
            theme.light ? "#fff" : "grey"
        );
    }, [theme]);

    const [openSideLinks, setOpenSideLinks] = useState(false);
    const [openProfileLinks, setOpenProfileLinks] = useState(false);

    return (
        <>
            <ShrinkBars onClick={() => setOpenSideLinks(!openSideLinks)} />
            {openSideLinks && (
                <>
                    <div className="side-links-overlay">
                        <div className="side-links">
                            {renderLinks(token!.type)}
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </div>
                    </div>
                </>
            )}
            <div className="header-logo">
                <NavLink className="nav-link-logo" to="/">
                    <SiteLogo size="32" />
                </NavLink>
            </div>
            <UserIcon
                icon={user!.icon.icon}
                fg_color={user!.icon.fg_color}
                line_color={user!.icon.line_color}
                bg_color={user!.icon.bg_color}
                ring_color={user!.icon.ring_color}
                onClick={() => setOpenProfileLinks(!openProfileLinks)}
            />
            <div className="profile-links">{openProfileLinks && "Links"}</div>
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

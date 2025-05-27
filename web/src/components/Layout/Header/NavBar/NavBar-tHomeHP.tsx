import "./NavBar.css";

import { NavLink } from "react-router-dom";
import { useUser } from "../../../../providers/User";
import { AuthTokenType } from "shared";
import { ShrinkBars, SiteLogo, UserIcon } from "../../../Icons";
import { useState } from "react";

const NavBar = () => {
    const { user, token } = useUser();

    const [openSideLinks, setOpenSideLinks] = useState(false);
    const [openProfileLinks, setOpenProfileLinks] = useState(false);

    const [sideLinksMounted, setSideLinksMounted] = useState(false);
    const [profileLinksMounted, setProfileSideLinksMounted] = useState(false);

    return (
        <>
            <ShrinkBars
                onClick={() => {
                    setOpenSideLinks(!openSideLinks);
                    if (!sideLinksMounted) {
                        setSideLinksMounted(true);
                    }
                }}
            />

            <div
                className={`side-links-overlay ${
                    sideLinksMounted ? (openSideLinks ? "open" : "closed") : ""
                }`}
                onClick={() => setOpenSideLinks(!openSideLinks)}
            >
                <div
                    className={`side-links ${
                        sideLinksMounted
                            ? openSideLinks
                                ? "open"
                                : "closed"
                            : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderLinks(token!.type, () => setOpenSideLinks(false))}
                    <NavLink
                        className="side-nav-link"
                        to="/about"
                        onClick={() => setOpenSideLinks(false)}
                    >
                        About
                    </NavLink>
                </div>
            </div>

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
                onClick={() => {
                    setOpenProfileLinks(!openProfileLinks);
                    if (!profileLinksMounted) {
                        setProfileSideLinksMounted(true);
                    }
                }}
            />
            <div
                className={`profile-links ${
                    profileLinksMounted
                        ? openProfileLinks
                            ? "open"
                            : "closed"
                        : ""
                }`}
            >
                Links
            </div>
        </>
    );
};

const renderLinks = (tokenType: AuthTokenType, onClick: () => void) => {
    // in the switch statement, make a pair of the "to" and the elements to go to in an array or something. Then, move the actual returning of the nav links to the bottom (in one place only) and do a map to make all the nav links easy like

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
                    <NavLink className="side-nav-link" to="/child">
                        Child Link
                    </NavLink>
                </>
            );
    }
};

export default NavBar;

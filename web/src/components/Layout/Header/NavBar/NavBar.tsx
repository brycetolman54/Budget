import "./NavBar.css";

import { NavLink } from "react-router-dom";
import { ShrinkBars, SiteLogo, UserIcon } from "../../../Icons";
import { useState } from "react";
import { useUser } from "../../../../providers";
import SideLinks from "../SideLinks/SideLinks";
import ProfileLinks from "../ProfileLinks/ProfileLinks";

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
            <SideLinks
                open={openSideLinks}
                setOpen={setOpenSideLinks}
                mounted={sideLinksMounted}
                tokenType={token!.type}
            />

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
            <ProfileLinks
                open={openProfileLinks}
                setOpen={setOpenProfileLinks}
                mounted={profileLinksMounted}
            />
        </>
    );
};

export default NavBar;

import "./SideLinks.css";

import { NavLink } from "react-router-dom";
import { AuthTokenType } from "shared";
import { useTheme } from "../../../../providers";
import { LinkIcon } from "../../../Icons";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    mounted: boolean;
    tokenType: AuthTokenType;
}

const SideLinks = (props: Props) => {
    const { theme } = useTheme();

    document.documentElement.style.setProperty(
        "--side-links-bg-color",
        theme.light ? "rgb(234, 234, 234)" : "grey"
    );
    document.documentElement.style.setProperty(
        "--side-links-bg-color-hover",
        theme.light ? "rgb(216, 216, 216)" : "rgb(139, 139, 139)"
    );
    return (
        <>
            <div
                className={`side-links-overlay ${
                    props.mounted ? (props.open ? "open" : "closed") : ""
                }`}
                onClick={() => props.setOpen(!props.open)}
            >
                <div
                    className={`side-links ${
                        props.mounted ? (props.open ? "open" : "closed") : ""
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderLinks(props.tokenType, () => props.setOpen(false))}
                    <NavLink
                        className="side-nav-link"
                        to="/about"
                        onClick={() => props.setOpen(false)}
                    >
                        <LinkIcon icon="about" />
                        About
                    </NavLink>
                </div>
            </div>
        </>
    );
};

type NavLinkInfo = {
    text: string;
    to: string;
    icon: string;
};

const renderLinks = (tokenType: AuthTokenType, onClick: () => void) => {
    let links: NavLinkInfo[];

    switch (tokenType) {
        case AuthTokenType.Admin:
            links = [
                { text: "Admin Link", to: "/admin", icon: "admin" },
                { text: "Parent Link", to: "/parent", icon: "parent" },
                { text: "Child Link", to: "/child", icon: "child" },
            ];
            break;
        case AuthTokenType.Parent:
            links = [
                { text: "Parent Link", to: "/parent", icon: "parent" },
                { text: "Child Link", to: "/child", icon: "child" },
            ];
            break;
        case AuthTokenType.Child:
            links = [{ text: "Child Link", to: "/child", icon: "child" }];
            break;
        default:
            links = [];
    }

    return (
        <>
            {links.map((link: NavLinkInfo) => (
                <NavLink
                    to={link.to}
                    className="side-nav-link"
                    onClick={() => onClick()}
                >
                    <LinkIcon icon={link.icon} />
                    {link.text}
                </NavLink>
            ))}
        </>
    );
};

export default SideLinks;

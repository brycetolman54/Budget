import "./SideLinks.css";

import { NavLink } from "react-router-dom";
import { AuthTokenType } from "shared";
import { useTheme } from "../../../../providers";

interface Props {
    mounted: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
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
                        About
                    </NavLink>
                </div>
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
                    <NavLink className="side-nav-link" to="/admin">
                        Admin Link
                    </NavLink>
                </>
            );
        case AuthTokenType.Parent:
            return (
                <>
                    <NavLink className="side-nav-link" to="/parent">
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

export default SideLinks;

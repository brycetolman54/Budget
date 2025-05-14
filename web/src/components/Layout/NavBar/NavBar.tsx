import { NavLink } from "react-router-dom";
import { SiteLogo } from "../../Icons/SiteIcons";

const NavBar = () => {
    return (
        <>
            <header>
                <div id="logo">
                    <SiteLogo size="32" />
                </div>
                <div id="links">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                    <NavLink className="nav-link" to="/contact">
                        Contact
                    </NavLink>
                </div>
                <div id="shrink-icon">Shrink</div>
            </header>
        </>
    );
};

export default NavBar;

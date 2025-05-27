import "./SiteLayout.css";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";

const SiteLayout = () => {
    return (
        <div className="site-layout">
            <div className="header">
                <NavBar />
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default SiteLayout;

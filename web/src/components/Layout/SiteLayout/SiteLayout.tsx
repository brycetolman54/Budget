import "./SiteLayout.css";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
import { useTheme } from "../../../providers";
import { useEffect } from "react";

const SiteLayout = () => {
    const { theme } = useTheme();

    useEffect(() => {
        const opacity = theme.light ? "0.9" : "0.8";
        document.documentElement.style.setProperty(
            "--header-footer-bg",
            `${theme.primary.slice(0, theme.primary.indexOf(")"))}, ${opacity})`
        );
    }, [theme]);

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

import { GoToPage } from "../../Icons";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div id="author">Bryce Tolman</div>
            <div className="footer-link">
                <a
                    id="readme-link"
                    href="https://github.com/brycetolman54/Budget/blob/main/README.md"
                    target="_blank"
                >
                    Github README
                    <GoToPage />
                </a>
            </div>
        </>
    );
};

export default Footer;

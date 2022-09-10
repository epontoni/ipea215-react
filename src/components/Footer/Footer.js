import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

let year = new Date();

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div class="footer__copyright">&copy;{year.getFullYear()}<span> IPEA 215</span></div>
                <div>with ❤️ by <a href="https://epontoni.github.io/" className="footer__social__poweredBy">Emanuel Pontoni</a></div>
                <div className="footer__social__container">
                    <div className="footer__social"><a href="https://www.facebook.com/ipea215"><FaFacebook /></a></div>
                    <div className="footer__social"><a href="https://www.instagram.com/ipea215raulscalabrini/"><FaInstagram /></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
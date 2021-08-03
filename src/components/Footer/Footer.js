import { FaFacebook } from "react-icons/fa";
import "./Footer.scss";

let year = new Date();

function Footer() {
    return (
        <footer className="footer">
            <div class="footer__copyright">&copy;<span class="footer__copyright--year"> {year.getFullYear()}</span> IPEA 215</div>
            <div class="footer__social"><a href="https://www.facebook.com/ipea215"><FaFacebook /></a></div>
        </footer>
    )
}

export default Footer
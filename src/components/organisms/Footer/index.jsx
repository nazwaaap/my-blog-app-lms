import { FaFacebook, FaTwitter, FaInstagram, FaDiscord, FaTelegram } from "react-icons/fa";
import './footer.css';

function FooterIcon({ icon }) {
    const Icon = icon;

    return (
        <div className="icon-wrapper">
            <Icon />
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="social-wrapper">
                    <FooterIcon icon={FaFacebook} />
                    <FooterIcon icon={FaTwitter} />
                    <FooterIcon icon={FaInstagram} />
                    <FooterIcon icon={FaTelegram} />
                    <FooterIcon icon={FaDiscord} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2024. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

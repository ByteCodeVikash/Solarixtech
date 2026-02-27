import { Link } from 'react-router-dom';
import {
    FiMapPin, FiMail, FiPhone, FiFacebook,
    FiTwitter, FiLinkedin, FiInstagram, FiYoutube
} from 'react-icons/fi';
import './Footer.css';

const usefulLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/solutions', label: 'Our Solutions' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries We Serve' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/career', label: 'Career' },
];

const serviceLinks = [
    { to: '/services/data-entry', label: 'Data Entry Solutions' },
    { to: '/services/software-development', label: 'Software Development' },
    { to: '/services/logistics', label: 'Logistics & Support' },
    { to: '/services', label: 'Scanning & Digitization' },
    { to: '/services', label: 'Manpower Contracting' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__grid">
                    {/* Brand */}
                    <div className="footer__col footer__brand">
                        <Link to="/" className="footer__logo">
                            <img src="/logo.svg" alt="Solarixtech" className="footer__logo-img" />
                            <span>Solarix<span className="accent">tech</span></span>
                        </Link>
                        <p>
                            Solarixtech is an innovative IT &amp; digitization solutions company,
                            empowering businesses through technology. We deliver
                            efficiency, innovation, and excellence across industries.
                        </p>
                        <div className="footer__socials">
                            <a href="#" aria-label="Facebook"><FiFacebook /></a>
                            <a href="#" aria-label="Twitter"><FiTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                            <a href="#" aria-label="Instagram"><FiInstagram /></a>
                            <a href="#" aria-label="YouTube"><FiYoutube /></a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="footer__col">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(({ to, label }) => (
                                <li key={to + label}><Link to={to}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer__col">
                        <h4>Our Services</h4>
                        <ul>
                            {serviceLinks.map(({ to, label }) => (
                                <li key={to + label}><Link to={to}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__col footer__contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <FiMapPin />
                                <span>190K/1J/1AH Kalendipuram Rajrooppur, Prayagraj</span>
                            </li>
                            <li>
                                <FiMail />
                                <a href="mailto:contact@solarixtech.com">contact@solarixtech.com</a>
                            </li>
                            <li>
                                <FiPhone />
                                <a href="tel:+917860998904">+91 78609 98904</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>© 2026 Solarixtech. All rights reserved.</p>
                    <p>Designed with ❤️ for innovation and excellence.</p>
                </div>
            </div>
        </footer>
    );
}

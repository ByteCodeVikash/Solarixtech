import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' },
    { to: '/career', label: 'Career' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location]);

    return (
        <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
            {/* Top Info Bar */}
            <div className="topbar">
                <div className="container topbar__inner">
                    <div className="topbar__left">
                        <span className="topbar__item">
                            <FiPhone />
                            <a href="tel:+917860998904">+91 78609 98904</a>
                        </span>
                        <span className="topbar__sep" />
                        <span className="topbar__item">
                            <FiMail />
                            <a href="mailto:contact@solarixtech.com">contact@solarixtech.com</a>
                        </span>
                    </div>
                    <div className="topbar__right">
                        <span className="topbar__tag">IT &amp; Digitization Solutions — Prayagraj</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="navbar">
                <div className="container navbar__inner">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo">
                        <img src="/logo.svg" alt="Solarixtech" className="navbar__logo-img" />
                        <span className="navbar__logo-text">
                            Solarix<span className="accent">tech</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="navbar__links">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `navbar__link${isActive ? ' navbar__link--active' : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="navbar__right">
                        <Link to="/contact" className="btn btn-accent btn-sm navbar__cta">
                            Contact Us
                        </Link>
                        <button
                            className="navbar__hamburger"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="navbar__mobile">
                        <div className="navbar__mobile-links">
                            {navLinks.map(({ to, label }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    className={({ isActive }) =>
                                        `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                        <div className="navbar__mobile-footer">
                            <a href="tel:+917860998904" className="mobile-contact-item">
                                <FiPhone /> +91 78609 98904
                            </a>
                            <Link to="/contact" className="btn btn-accent">
                                Contact US
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

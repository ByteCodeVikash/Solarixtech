import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span><span className="current">Contact Us</span>
                    </div>
                    <h1>Contact <span className="hero-highlight">Us</span></h1>
                    <p>Get in touch for IT solutions. Our team is here to help you succeed.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-layout">
                        {/* Form */}
                        <div className="contact-form-col">
                            <div className="contact-form-card card">
                                <h2>Send Us a Message</h2>
                                <p>Fill out the form below and we&apos;ll respond within 24 hours.</p>
                                <ContactForm />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="contact-info-col">
                            <div className="info-box card">
                                <h3>Get in Touch</h3>
                                <ul className="info-list">
                                    <li>
                                        <div className="info-icon blue"><FiMapPin /></div>
                                        <div>
                                            <strong>Office Address</strong>
                                            <span>190K/1J/1AH Kalendipuram Rajrooppur, Prayagraj</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon teal"><FiMail /></div>
                                        <div>
                                            <strong>Email Us</strong>
                                            <a href="mailto:contact@solarixtech.com">contact@solarixtech.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon orange"><FiPhone /></div>
                                        <div>
                                            <strong>Call Us</strong>
                                            <a href="tel:+917860998904">+91 78609 98904</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="info-icon green"><FiClock /></div>
                                        <div>
                                            <strong>Working Hours</strong>
                                            <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Map */}
                            <div className="map-box card">
                                <iframe
                                    title="Solarixtech Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57808.64783764857!2d81.78462!3d25.42465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb3b2b2c1d19%3A0x4c1b8a4c3b0e8e7f!2sRajrooppur%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: 'var(--radius-sm)' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

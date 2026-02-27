import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import ContactForm from '../../components/ContactForm';
import './Subpage.css';

const services = [
    { emoji: '📦', title: 'Inventory Management', desc: 'Real-time inventory tracking with barcode / RFID integration and automated reorder alerts.' },
    { emoji: '🗺️', title: 'Route Optimization', desc: 'AI-powered route planning to minimize delivery time and reduce transportation costs.' },
    { emoji: '🚚', title: 'Fleet Management', desc: 'GPS tracking, driver management, vehicle maintenance schedules, and fuel monitoring.' },
    { emoji: '📋', title: 'Order Fulfillment', desc: 'End-to-end order processing from receipt to delivery with customer notifications.' },
    { emoji: '🔗', title: 'Supply Chain Integration', desc: 'Connect suppliers, warehouses, and delivery partners in a unified platform.' },
    { emoji: '📊', title: 'Analytics & Reporting', desc: 'Comprehensive dashboards for logistics KPIs, cost analysis, and performance metrics.' },
];

const techUsed = ['GPS Tracking Systems', 'RFID Integration', 'ERP Connectors', 'IoT Sensors', 'Mobile Apps', 'Cloud Infrastructure'];

export default function Logistics() {
    return (
        <div className="subpage">
            <section className="page-hero sub-hero-yellow">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span>
                        <Link to="/services">Services</Link><span>›</span>
                        <span className="current">Logistics & Support</span>
                    </div>
                    <h1>Logistics & Support</h1>
                    <p>End-to-end supply chain management and IT logistics support for seamless business operations.</p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: 24 }}>Optimize Now <FiArrowRight /></Link>
                </div>
            </section>

            {/* Services */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #e67e22, #f39c12)' }}>Our Services</span>
                        <h2>Logistics Capabilities</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #e67e22, #f39c12)' }} />
                    </div>
                    <div className="grid-3">
                        {services.map((s) => (
                            <div key={s.title} className="log-card card">
                                <span className="log-emoji">{s.emoji}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Used */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #e67e22, #f39c12)' }}>Technology</span>
                        <h2>Technologies We Use</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #e67e22, #f39c12)' }} />
                    </div>
                    <div className="tech-pills">
                        {techUsed.map((t) => (
                            <span key={t} className="tech-pill">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA + Form */}
            <section className="section subpage-contact">
                <div className="container">
                    <div className="subpage-contact-inner">
                        <div>
                            <span className="section-badge" style={{ background: 'linear-gradient(135deg, #e67e22, #f39c12)' }}>Get Started</span>
                            <h2>Optimize Your Supply Chain</h2>
                            <p>Let&apos;s discuss how Solarixtech can streamline your logistics and support operations.</p>
                            <ul className="check-list">
                                <li><FiCheckCircle /> Free logistics audit</li>
                                <li><FiCheckCircle /> Custom solution design</li>
                                <li><FiCheckCircle /> Implementation & training</li>
                                <li><FiCheckCircle /> 24/7 ongoing support</li>
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            <div className="container back-link">
                <Link to="/services"><FiArrowLeft /> Back to Services</Link>
            </div>
        </div>
    );
}

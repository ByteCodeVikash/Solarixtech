import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { MdSpeed, MdSecurity, MdIntegrationInstructions, MdAutoFixHigh } from 'react-icons/md';
import ContactForm from '../../components/ContactForm';
import './Subpage.css';

const features = [
    { icon: <MdIntegrationInstructions />, title: 'Application Integration', desc: 'Seamlessly integrate data entry workflows with your existing ERP, CRM, or custom applications.' },
    { icon: <MdAutoFixHigh />, title: 'AI-Assisted Entry', desc: 'Leverage OCR and machine learning to automate repetitive data capture and reduce manual effort.' },
    { icon: <MdSecurity />, title: 'Data Validation', desc: 'Multi-tier validation rules ensure data accuracy before entry into your systems.' },
    { icon: <MdSpeed />, title: 'High-Volume Processing', desc: 'Handle thousands of records daily with consistent quality and speed.' },
];

const benefits = [
    { icon: '⚡', title: 'Speed', desc: '10x faster than manual entry with automation' },
    { icon: '🎯', title: 'Accuracy', desc: '99.9% accuracy with double-keying verification' },
    { icon: '🔒', title: 'Security', desc: 'End-to-end encrypted data handling and NDA compliance' },
    { icon: '📊', title: 'Scalability', desc: 'Scale from 1,000 to 1,000,000 records seamlessly' },
];

export default function DataEntry() {
    return (
        <div className="subpage">
            <section className="page-hero sub-hero-green">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span>
                        <Link to="/services">Services</Link><span>›</span>
                        <span className="current">Data Entry Solutions</span>
                    </div>
                    <h1>Data Entry Solutions</h1>
                    <p>Accurate, scalable, and intelligent data entry services integrated with your applications.</p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: 24 }}>Get a Free Quote <FiArrowRight /></Link>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>Core Features</span>
                        <h2>What We Offer</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #28a745, #20c997)' }} />
                    </div>
                    <div className="grid-2 features-grid">
                        {features.map((f) => (
                            <div key={f.title} className="feature-card card">
                                <div className="feature-icon green">{f.icon}</div>
                                <div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>Why Choose Us</span>
                        <h2>Key Benefits</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #28a745, #20c997)' }} />
                    </div>
                    <div className="grid-4">
                        {benefits.map((b) => (
                            <div key={b.title} className="benefit-mini card">
                                <span>{b.icon}</span>
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="section subpage-contact">
                <div className="container">
                    <div className="subpage-contact-inner">
                        <div>
                            <span className="section-badge" style={{ background: 'linear-gradient(135deg, #28a745, #20c997)' }}>Enquire Now</span>
                            <h2>Ready to Streamline Your Data?</h2>
                            <p>Contact us today for a free consultation and custom quote for your data entry requirements.</p>
                            <ul className="check-list">
                                <li><FiCheckCircle /> Free pilot project available</li>
                                <li><FiCheckCircle /> Flexible pricing models</li>
                                <li><FiCheckCircle /> Dedicated project manager</li>
                                <li><FiCheckCircle /> NDA and data security guaranteed</li>
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

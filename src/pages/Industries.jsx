import { Link } from 'react-router-dom';
import './Industries.css';

const industries = [
    { icon: '🏦', name: 'Banking & Finance', desc: 'Secure digitization of financial records, compliance documents, and transaction data.' },
    { icon: '🏛️', name: 'Land Records', desc: 'Government land registry digitization with indexing and public access portals.' },
    { icon: '⚖️', name: 'High Courts', desc: 'Judicial record management with case file digitization and retrieval systems.' },
    { icon: '🏥', name: 'Healthcare', desc: 'Patient records, lab reports, and medical imaging digitization with HL7 compliance.' },
    { icon: '🎓', name: 'Education', desc: 'Academic records, certificates, and library archives converted to digital formats.' },
    { icon: '🏭', name: 'Manufacturing', desc: 'Production records, quality sheets, and compliance documentation digitization.' },
    { icon: '🛒', name: 'Retail & E-commerce', desc: 'Inventory management, purchase orders, and customer data systems.' },
    { icon: '🏗️', name: 'Real Estate', desc: 'Property documents, legal deeds, and construction records managed digitally.' },
    { icon: '🚂', name: 'Transportation', desc: 'Fleet records, logistics documentation, and compliance tracking systems.' },
];

const stats = [
    { value: '9+', label: 'Industries Served' },
    { value: '150+', label: 'Clients Across Sectors' },
    { value: '5M+', label: 'Documents Digitized' },
    { value: '99.9%', label: 'Accuracy Rate' },
];

export default function Industries() {
    return (
        <div className="industries-page">
            <section className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span><span className="current">Industries We Serve</span>
                    </div>
                    <h1>Industries We <span className="hero-highlight">Serve</span></h1>
                    <p>Trusted by diverse industries across India. We understand your unique challenges and deliver tailored digital solutions.</p>
                </div>
            </section>

            {/* Stats */}
            <section className="industries-stats">
                <div className="container">
                    <div className="stats-row">
                        {stats.map((s) => (
                            <div key={s.label} className="stat-box">
                                <strong>{s.value}</strong>
                                <span>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Grid */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Reach</span>
                        <h2>Sectors We Transform</h2>
                        <p>From government bodies to private enterprises — we digitize and optimize across verticals.</p>
                        <div className="section-divider" />
                    </div>
                    <div className="grid-3 industry-grid">
                        {industries.map((ind) => (
                            <div key={ind.name} className="ind-card card">
                                <div className="ind-icon">{ind.icon}</div>
                                <h3>{ind.name}</h3>
                                <p className="ind-desc">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section ind-cta">
                <div className="container text-center">
                    <h2>Is Your Industry Listed?</h2>
                    <p>
                        Contact us today — we work with virtually every sector and can craft
                        a customized digitization strategy for you.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
                </div>
            </section>

            {/* Social */}
            <section className="section section-alt ind-social">
                <div className="container text-center">
                    <h3>Follow Us on Social Media</h3>
                    <p>Stay updated with our latest projects, case studies, and announcements.</p>
                    <div className="social-row">
                        <a href="#" className="social-btn facebook">📘 Facebook</a>
                        <a href="#" className="social-btn twitter">🐦 Twitter</a>
                        <a href="#" className="social-btn linkedin">💼 LinkedIn</a>
                        <a href="#" className="social-btn instagram">📸 Instagram</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

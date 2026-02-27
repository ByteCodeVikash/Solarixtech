import { Link } from 'react-router-dom';
import {
    FiUsers, FiTarget, FiHeart, FiAward, FiTrendingUp,
    FiDatabase, FiCode, FiMonitor, FiTruck, FiFileText,
    FiArrowRight, FiCheckCircle
} from 'react-icons/fi';
import './About.css';

const milestones = [
    { year: '2018', title: 'Company Founded', desc: 'Solarixtech was established with a vision to revolutionize IT services in India.' },
    { year: '2019', title: 'First 50 Clients', desc: 'Rapidly grew our client base across Banking and Healthcare verticals.' },
    { year: '2020', title: 'Expanded Services', desc: 'Launched Software Development and Manpower Contracting divisions.' },
    { year: '2021', title: 'National Presence', desc: 'Extended operations across multiple states in India.' },
    { year: '2022', title: '100+ Projects', desc: 'Completed 100+ successful digitization projects for government and private sectors.' },
    { year: '2026', title: 'Digital Leader', desc: 'Recognized as a leading IT solutions provider in eastern India.' },
];

const values = [
    { icon: <FiTarget />, color: 'blue', title: 'Mission', desc: 'To empower organizations through cutting-edge digitization and IT solutions, driving operational efficiency and innovation.' },
    { icon: <FiHeart />, color: 'orange', title: 'Vision', desc: 'To be India\'s most trusted IT solutions partner, enabling every business to thrive in the digital era.' },
    { icon: <FiAward />, color: 'teal', title: 'Values', desc: 'Integrity, innovation, and excellence guide everything we do. We put our clients\' success first, always.' },
];

const servicesList = [
    { icon: <FiDatabase />, text: 'Scanning & Digitization Services' },
    { icon: <FiUsers />, text: 'Manpower Contracting & Staffing' },
    { icon: <FiMonitor />, text: 'Hardware Sales & Maintenance' },
    { icon: <FiCode />, text: 'Custom Software Development' },
    { icon: <FiFileText />, text: 'Data Entry & Processing Solutions' },
    { icon: <FiTruck />, text: 'Logistics & Supply Chain Support' },
    { icon: <FiTrendingUp />, text: 'IT Consultancy & Advisory' },
    { icon: <FiCheckCircle />, text: 'Quality Assurance & Testing' },
];

export default function About() {
    return (
        <div className="about-page">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>›</span>
                        <span className="current">About Us</span>
                    </div>
                    <h1>About <span className="hero-highlight">Solarixtech</span></h1>
                    <p>With a vision to transform businesses through technology, innovation, and excellence.</p>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Foundation</span>
                        <h2>Mission, Vision & Values</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="grid-3">
                        {values.map((v) => (
                            <div key={v.title} className={`card value-card value-card--${v.color}`}>
                                <div className={`icon-circle icon-circle-${v.color}`}>{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section section-alt">
                <div className="container">
                    <div className="about-story">
                        <div className="story-text">
                            <span className="section-badge">Our Journey</span>
                            <h2>The Solarixtech Story</h2>
                            <p>
                                Solarixtech embarked on a journey to bridge the digital
                                divide for businesses across India. We began with a simple yet powerful
                                idea: technology should empower, not complicate.
                            </p>
                            <p>
                                Starting with document scanning and digitization, we quickly expanded our
                                portfolio to encompass software development, manpower solutions, and
                                comprehensive IT support. Our team of passionate technologists has helped
                                over 150 organizations transform their operations.
                            </p>
                            <p>
                                Today, Solarixtech stands as a trusted partner for Banking & Finance,
                                Healthcare, Government, and many more sectors — delivering innovative
                                ITES solutions that drive real business outcomes.
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
                                Connect With Us <FiArrowRight />
                            </Link>
                        </div>
                        <div className="story-image">
                            <div className="image-card-stack">
                                <div className="image-card blue">
                                    <span>🏆</span>
                                    <strong>150+</strong>
                                    <small>Happy Clients</small>
                                </div>
                                <div className="image-card teal">
                                    <span>⚡</span>
                                    <strong>500+</strong>
                                    <small>Projects Done</small>
                                </div>
                                <div className="image-card orange">
                                    <span>👥</span>
                                    <strong>40+</strong>
                                    <small>Expert Team</small>
                                </div>
                                <div className="image-card green">
                                    <span>🗓️</span>
                                    <strong>6+ Years</strong>
                                    <small>of Excellence</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">What We Offer</span>
                        <h2>Our Services Overview</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="services-list-grid">
                        {servicesList.map((s) => (
                            <div key={s.text} className="service-list-item">
                                <span className="service-list-icon">{s.icon}</span>
                                <span>{s.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section section-alt timeline-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Our Growth</span>
                        <h2>Milestones & Achievements</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={m.year} className={`timeline-item${i % 2 === 1 ? ' timeline-item--right' : ''}`}>
                                <div className="timeline-dot" />
                                <div className="timeline-card card">
                                    <span className="timeline-year">{m.year}</span>
                                    <h4>{m.title}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section about-cta">
                <div className="container text-center">
                    <h2>Ready to Work With Us?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '16px auto 32px' }}>
                        Let&apos;s build something incredible together. Contact Solarixtech today.
                    </p>
                    <Link to="/contact" className="btn btn-white">Contact Us <FiArrowRight /></Link>
                </div>
            </section>
        </div>
    );
}

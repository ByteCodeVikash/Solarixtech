import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import ContactForm from '../../components/ContactForm';
import './Subpage.css';

const steps = [
    { num: '01', title: 'Discovery & Analysis', desc: 'We thoroughly understand your business requirements, existing systems, and technical constraints.' },
    { num: '02', title: 'Architecture & Design', desc: 'Our architects design a scalable, future-proof system architecture tailored to your needs.' },
    { num: '03', title: 'Agile Development', desc: 'Development in sprints with regular demos, ensuring you\'re always aligned with the progress.' },
    { num: '04', title: 'Testing & QA', desc: 'Rigorous manual and automated testing across all platforms and user scenarios.' },
    { num: '05', title: 'Deployment & Launch', desc: 'Smooth, zero-downtime deployment with CI/CD pipelines and rollback plans in place.' },
    { num: '06', title: 'Ongoing Support', desc: 'Post-launch maintenance, updates, and feature enhancements by our dedicated team.' },
];

const techStack = [
    { cat: 'Frontend', items: ['React.js', 'Vue.js', 'Angular', 'Next.js'] },
    { cat: 'Backend', items: ['Node.js', 'Python', 'Java Spring', 'PHP Laravel'] },
    { cat: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { cat: 'Mobile', items: ['React Native', 'Flutter', 'Android', 'iOS'] },
    { cat: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Firebase'] },
    { cat: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'Nginx'] },
];

export default function SoftwareDev() {
    return (
        <div className="subpage">
            <section className="page-hero sub-hero-purple">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span>
                        <Link to="/services">Services</Link><span>›</span>
                        <span className="current">Software Development</span>
                    </div>
                    <h1>Software Development & Support</h1>
                    <p>Custom software solutions built with modern technologies for your unique business challenges.</p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: 24 }}>Start a Project <FiArrowRight /></Link>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #6f42c1, #9b59b6)' }}>Our Process</span>
                        <h2>Development Process</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #6f42c1, #9b59b6)' }} />
                    </div>
                    <div className="dev-timeline">
                        {steps.map((s) => (
                            <div key={s.num} className="dev-step">
                                <div className="dev-step-num">{s.num}</div>
                                <div className="dev-step-content card">
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'linear-gradient(135deg, #6f42c1, #9b59b6)' }}>Technology</span>
                        <h2>Our Tech Stack</h2>
                        <div className="section-divider" style={{ background: 'linear-gradient(90deg, #6f42c1, #9b59b6)' }} />
                    </div>
                    <div className="grid-3 tech-grid">
                        {techStack.map((t) => (
                            <div key={t.cat} className="tech-card card">
                                <h4>{t.cat}</h4>
                                <div className="tech-tags">
                                    {t.items.map((item) => (
                                        <span key={item} className="tech-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="section subpage-contact">
                <div className="container">
                    <div className="subpage-contact-inner">
                        <div>
                            <span className="section-badge" style={{ background: 'linear-gradient(135deg, #6f42c1, #9b59b6)' }}>Quick Inquiry</span>
                            <h2>Ready to Build Something Great?</h2>
                            <p>Tell us about your project and we&apos;ll get back to you with a proposal within 48 hours.</p>
                            <ul className="check-list">
                                <li><FiCheckCircle /> Free technical consultation</li>
                                <li><FiCheckCircle /> Detailed project proposal</li>
                                <li><FiCheckCircle /> Fixed-price or Time & Material models</li>
                                <li><FiCheckCircle /> IP ownership with you</li>
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

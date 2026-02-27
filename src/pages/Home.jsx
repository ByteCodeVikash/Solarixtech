import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
    FiDatabase, FiZap, FiArchive, FiSun, FiCpu,
    FiMonitor, FiUsers, FiTruck,
    FiCode, FiArrowRight,
    FiChevronRight, FiCheck, FiShield, FiAward,
    FiChevronLeft
} from 'react-icons/fi';
import {
    MdLocalPrintshop, MdOutlineCloudUpload
} from 'react-icons/md';
import ContactForm from '../components/ContactForm';
import './Home.css';

/* ===== SLIDER DATA ===== */
const slides = [
    {
        id: 0,
        bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
        tag: 'Premier IT Solutions',
        title: 'Welcome to\nSolarixtech',
        sub: 'Transforming businesses through innovative IT solutions and digitization services. We bridge the gap between technology and business excellence.',
        cta1: { label: 'Explore Services', to: '/services' },
        cta2: { label: 'Get in Touch', to: '/contact' },
    },
    {
        id: 1,
        bg: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80',
        tag: 'Scanning & Digitization',
        title: 'Go Paperless.\nGo Digital.',
        sub: 'High-speed document scanning, OCR processing, and secure cloud storage with 99.9% accuracy — trusted by banks, courts & hospitals.',
        cta1: { label: 'Explore Solutions', to: '/solutions' },
        cta2: { label: 'Contact Us', to: '/contact' },
    },
    {
        id: 2,
        bg: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&q=80',
        tag: 'Software Development',
        title: 'Custom Software.\nReal Results.',
        sub: 'We build enterprise-grade web applications, ERP systems, and APIs tailored exactly to your business requirements.',
        cta1: { label: 'View Projects', to: '/services/software-development' },
        cta2: { label: 'Contact Us', to: '/contact' },
    },
    {
        id: 3,
        bg: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80',
        tag: 'Manpower & IT Support',
        title: 'The Right People\nFor Your IT Needs',
        sub: 'Skilled IT professionals, data entry operators, and support engineers — deployed on-site or remotely for your business.',
        cta1: { label: 'Our Services', to: '/services' },
        cta2: { label: 'Talk to Experts', to: '/contact' },
    },
];

/* ===== OTHER DATA ===== */
const benefits = [
    { icon: <FiDatabase />, color: 'blue', title: 'Instant Access', desc: 'Retrieve any document in seconds from anywhere. No more searching through filing cabinets.' },
    { icon: <FiZap />, color: 'orange', title: 'Peak Efficiency', desc: 'Automate workflows and cut processing time by up to 70% with smart digitization.' },
    { icon: <FiArchive />, color: 'teal', title: 'Preservation', desc: 'Protect documents from physical damage with secure, redundant cloud backups.' },
    { icon: <FiSun />, color: 'green', title: 'Sustainability', desc: 'Go paperless, reduce carbon footprint, and create an eco-friendly workplace.' },
    { icon: <FiCpu />, color: 'purple', title: 'Innovation', desc: 'Stay ahead with AI-powered digitization and intelligent document processing.' },
];

const services = [
    { icon: <MdLocalPrintshop />, color: 'blue', title: 'Scanning & Digitization', desc: 'High-speed document scanning with OCR technology for accurate digital conversion.', to: '/services' },
    { icon: <FiUsers />, color: 'orange', title: 'Manpower Contracting', desc: 'Skilled IT professionals and dedicated project teams on flexible contracts.', to: '/services' },
    { icon: <FiMonitor />, color: 'purple', title: 'Hardware Sales', desc: 'Premium IT hardware from certified global manufacturers with full warranty.', to: '/services' },
    { icon: <FiCode />, color: 'teal', title: 'Software Development', desc: 'Custom enterprise software, web applications and APIs built with modern tech.', to: '/services/software-development' },
    { icon: <MdOutlineCloudUpload />, color: 'green', title: 'Data Entry Solutions', desc: 'Precise, high-volume data entry with AI-assisted processing and integration.', to: '/services/data-entry' },
    { icon: <FiTruck />, color: 'accent', title: 'Logistics & Support', desc: 'End-to-end logistics management and complete IT infrastructure support.', to: '/services/logistics' },
];

const industries = [
    { icon: '🏦', name: 'Banking & Finance' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '⚖️', name: 'High Courts' },
    { icon: '🏛️', name: 'Land Records' },
    { icon: '🎓', name: 'Education' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '🛒', name: 'Retail' },
    { icon: '🏗️', name: 'Real Estate' },
    { icon: '🚚', name: 'Transportation' },
];

const stats = [
    { value: '500+', label: 'Projects Completed', icon: <FiAward /> },
    { value: '150+', label: 'Happy Clients', icon: <FiUsers /> },
    { value: '99.9%', label: 'Accuracy Rate', icon: <FiShield /> },
    { value: '40+', label: 'Expert Professionals', icon: <FiUsers /> },
];

const whyUs = [
    { title: 'End-to-End Solutions', desc: 'From scanning to software, we handle your complete digital transformation.' },
    { title: 'Government & Enterprise Trust', desc: 'Trusted by banks, courts, and healthcare institutions across India.' },
    { title: 'Data Security First', desc: 'ISO-aligned processes with 99.9% accuracy and zero data compromise.' },
    { title: '24/7 Support', desc: 'Dedicated helpdesk and on-site support whenever your business needs it.' },
];

/* ===== COMPONENT ===== */
export default function Home() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback((idx) => {
        if (animating) return;
        setAnimating(true);
        setCurrent(idx);
        setTimeout(() => setAnimating(false), 700);
    }, [animating]);

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length);
    }, [current, goTo]);

    // Auto-advance every 5.5s
    useEffect(() => {
        const timer = setInterval(next, 5500);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];

    return (
        <div className="home">

            {/* ===== HERO SLIDER ===== */}
            <section className="home-hero">

                {/* Slide backgrounds */}
                <div className="slider-track">
                    {slides.map((s, i) => (
                        <div
                            key={s.id}
                            className={`slide-bg${i === current ? ' slide-bg--active' : ''}`}
                            style={{ backgroundImage: `url(${s.bg})` }}
                        />
                    ))}
                </div>

                {/* Gradient overlay */}
                <div className="slider-overlay" />

                {/* Content */}
                <div className="container slider-content">
                    <div className={`slide-text${animating ? ' slide-text--out' : ' slide-text--in'}`}>
                        <div className="hero-badge">
                            <span className="badge-dot" />
                            <span>{slide.tag}</span>
                        </div>
                        <h1>
                            {slide.title.split('\n').map((line, i) => (
                                <span key={i}>
                                    {i === 0 ? line : <><br /><span className="hero-highlight">{line}</span></>}
                                </span>
                            ))}
                        </h1>
                        <p className="hero-sub">{slide.sub}</p>
                        <div className="hero-btns">
                            <Link to={slide.cta1.to} className="btn btn-accent btn-lg">
                                {slide.cta1.label} <FiArrowRight />
                            </Link>
                            <Link to={slide.cta2.to} className="btn btn-outline-white btn-lg">
                                {slide.cta2.label}
                            </Link>
                        </div>
                        <div className="hero-trust-row">
                            <span className="trust-item"><FiCheck /> Digitization</span>
                            <span className="trust-item"><FiCheck /> Software Dev</span>
                            <span className="trust-item"><FiCheck /> Data Entry</span>
                            <span className="trust-item"><FiCheck /> IT Support</span>
                        </div>
                    </div>
                </div>

                {/* Navigation arrows */}
                <button className="slider-arrow slider-arrow--prev" onClick={prev} aria-label="Previous slide">
                    <FiChevronLeft />
                </button>
                <button className="slider-arrow slider-arrow--next" onClick={next} aria-label="Next slide">
                    <FiChevronRight />
                </button>

                {/* Dots */}
                <div className="slider-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`slider-dot${i === current ? ' slider-dot--active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Progress bar */}
                <div className="slider-progress">
                    <div key={current} className="slider-progress-bar" />
                </div>

                {/* Stats Bar */}
                <div className="hero-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {stats.map((s) => (
                                <div key={s.label} className="stat-item">
                                    <span className="stat-icon">{s.icon}</span>
                                    <span className="stat-value">{s.value}</span>
                                    <span className="stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="section benefits-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why Digitize?</span>
                        <h2>The Power of Going Digital</h2>
                        <p>Unlock what&apos;s possible when your business operates on modern, paperless infrastructure.</p>
                        <div className="section-divider" />
                    </div>
                    <div className="grid-5 benefits-grid">
                        {benefits.map((b, i) => (
                            <div
                                key={b.title}
                                className="benefit-card card animate-fadeInUp"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="benefit-num">0{i + 1}</div>
                                <div className={`icon-circle icon-circle-${b.color}`}>{b.icon}</div>
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="section section-alt services-home-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">What We Do</span>
                        <h2>Our Core Services</h2>
                        <p>Comprehensive IT and digitization solutions designed to fuel your business growth.</p>
                        <div className="section-divider" />
                    </div>
                    <div className="grid-3 services-grid">
                        {services.map((svc) => (
                            <div key={svc.title} className={`service-card card service-card--${svc.color}`}>
                                <div className="service-card__top">
                                    <div className={`service-icon icon-circle-${svc.color}`}>
                                        {svc.icon}
                                    </div>
                                    <div className="service-card__body">
                                        <h3>{svc.title}</h3>
                                        <p>{svc.desc}</p>
                                    </div>
                                </div>
                                <Link to={svc.to} className="service-card__link">
                                    Learn More <FiArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 44 }}>
                        <Link to="/services" className="btn btn-primary btn-lg">
                            View All Services <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="section why-section">
                <div className="container">
                    <div className="why-inner">
                        <div className="why-left">
                            <span className="section-badge">Why Solarixtech</span>
                            <h2>The Trusted Choice for Digital Transformation</h2>
                            <p>
                                From Prayagraj to across India, businesses trust Solarixtech for reliable
                                IT solutions, precise data management, and unmatched support.
                            </p>
                            <div className="why-list">
                                {whyUs.map((w) => (
                                    <div key={w.title} className="why-item">
                                        <span className="why-icon"><FiCheck /></span>
                                        <div>
                                            <strong>{w.title}</strong>
                                            <p>{w.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/about" className="btn btn-primary" style={{ marginTop: 28 }}>
                                About Us <FiArrowRight />
                            </Link>
                        </div>
                        <div className="why-right">
                            <div className="why-card-grid">
                                <div className="why-big-card">
                                    <div className="why-card-icon">🏆</div>
                                    <strong>5M+</strong>
                                    <span>Documents Digitized</span>
                                </div>
                                <div className="why-big-card why-card--accent">
                                    <div className="why-card-icon">⚡</div>
                                    <strong>99.9%</strong>
                                    <span>Accuracy Rate</span>
                                </div>
                                <div className="why-big-card why-card--teal">
                                    <div className="why-card-icon">🌍</div>
                                    <strong>9+</strong>
                                    <span>Industries Served</span>
                                </div>
                                <div className="why-big-card why-card--green">
                                    <div className="why-card-icon">🔒</div>
                                    <strong>100%</strong>
                                    <span>Data Secure</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES ===== */}
            <section className="section industries-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--accent-light)', borderColor: 'rgba(245,158,11,0.25)' }}>Who We Serve</span>
                        <h2 style={{ color: 'white' }}>Industries We Serve</h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)' }}>
                            Trusted by diverse industries across India for technology-driven transformation.
                        </p>
                        <div className="section-divider" />
                    </div>
                    <div className="industries-grid">
                        {industries.map((ind) => (
                            <div key={ind.name} className="industry-card">
                                <span className="industry-icon">{ind.icon}</span>
                                <span className="industry-name">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: 40 }}>
                        <Link to="/industries" className="btn btn-outline-white">
                            Explore All Industries <FiChevronRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT CTA ===== */}
            <section className="section home-contact">
                <div className="container">
                    <div className="contact-inner">
                        <div className="contact-left">
                            <span className="section-badge">Start Today</span>
                            <h2>Ready to Transform Your Business?</h2>
                            <p>
                                Talk to our experts and discover how Solarixtech can digitize, automate,
                                and elevate your business operations — quickly and affordably.
                            </p>
                            <ul className="contact-benefits">
                                <li><FiCheck /> Free initial consultation</li>
                                <li><FiCheck /> Custom solutions tailored to your needs</li>
                                <li><FiCheck /> Response within 24 hours</li>
                                <li><FiCheck /> Experienced &amp; dedicated team</li>
                            </ul>
                            <div className="contact-tags">
                                <span className="ctag">Data Entry</span>
                                <span className="ctag">Digitization</span>
                                <span className="ctag">Software Dev</span>
                                <span className="ctag">IT Support</span>
                            </div>
                        </div>
                        <div className="contact-right">
                            <div className="contact-form-widget">
                                <div className="form-widget-header">
                                    <h3>Send Us a Message</h3>
                                    <p>We&apos;ll get back to you within 24 hours</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

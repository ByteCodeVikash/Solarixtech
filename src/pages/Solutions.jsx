import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiSearch, FiArrowRight } from 'react-icons/fi';
import './Solutions.css';

const solutions = [
    {
        id: 'digitization',
        category: 'Digitization Tools',
        icon: '📄',
        heading: 'Document Digitization & OCR',
        desc: 'Transform your physical records into searchable, secure digital assets with our state-of-the-art scanning and OCR technologies.',
        benefits: ['High-speed bulk scanning', 'Multi-language OCR support', 'Automated indexing', 'Cloud-based storage'],
        demo: 'Get a free demo of our scanning solution',
    },
    {
        id: 'software',
        category: 'Software Applications',
        icon: '💻',
        heading: 'Custom Software & Applications',
        desc: 'We build tailor-made software that aligns with your business processes — from enterprise management systems to mobile apps.',
        benefits: ['Bespoke development', 'Agile methodology', 'Scalable architecture', 'Post-launch support'],
        demo: 'Request a software demo',
    },
    {
        id: 'data',
        category: 'Data Management',
        icon: '🗄️',
        heading: 'Data Entry & Analytics Platforms',
        desc: 'Intelligent data entry solutions combined with powerful analytics dashboards to help you make data-driven decisions.',
        benefits: ['AI-powered data entry', 'Real-time dashboards', 'Data validation', 'ERP integration'],
        demo: 'See data analytics in action',
    },
    {
        id: 'support',
        category: 'IT Support',
        icon: '🛠️',
        heading: 'Managed IT Support & AMC',
        desc: 'End-to-end IT infrastructure management, helpdesk services, and Annual Maintenance Contracts for businesses of all sizes.',
        benefits: ['24/7 remote support', 'On-site technicians', 'Preventive maintenance', 'SLA-based response'],
        demo: 'Start your AMC today',
    },
];

const caseStudies = [
    {
        client: 'State Banking Consortium',
        industry: '🏦 Banking',
        result: '500K+ records digitized in 60 days',
        desc: 'Transformed paper-based banking records into a fully digital archive system with 99.9% accuracy.',
    },
    {
        client: 'District Healthcare Network',
        industry: '🏥 Healthcare',
        result: '40% reduction in admin costs',
        desc: 'Implemented a custom patient management system integrated with digital record-keeping.',
    },
    {
        client: 'State Revenue Department',
        industry: '🏛️ Government',
        result: '1M+ land records digitized',
        desc: 'Digitized and indexed over 1 million land records for an entire district within 3 months.',
    },
];

export default function Solutions() {
    const [openId, setOpenId] = useState('digitization');
    const [search, setSearch] = useState('');

    const filtered = solutions.filter(
        (s) =>
            search === '' ||
            s.category.toLowerCase().includes(search.toLowerCase()) ||
            s.heading.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="solutions-page">
            <section className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span><span className="current">Our Solutions</span>
                    </div>
                    <h1>Our Innovative <span className="hero-highlight">Solutions</span></h1>
                    <p>Custom IT support and digitization solutions engineered to accelerate your growth.</p>
                    <div className="hero-search">
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="Search solutions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Accordion Solutions */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">What We Offer</span>
                        <h2>Solution Categories</h2>
                        <div className="section-divider" />
                    </div>
                    <div className="accordion">
                        {filtered.map((sol) => (
                            <div key={sol.id} className={`accordion-item card${openId === sol.id ? ' accordion-item--open' : ''}`}>
                                <button
                                    className="accordion-header"
                                    onClick={() => setOpenId(openId === sol.id ? null : sol.id)}
                                >
                                    <div className="accordion-title">
                                        <span className="accordion-icon">{sol.icon}</span>
                                        <div>
                                            <span className="accordion-cat">{sol.category}</span>
                                            <h3>{sol.heading}</h3>
                                        </div>
                                    </div>
                                    {openId === sol.id ? <FiChevronUp /> : <FiChevronDown />}
                                </button>
                                {openId === sol.id && (
                                    <div className="accordion-body">
                                        <div className="accordion-body-inner">
                                            <div>
                                                <p>{sol.desc}</p>
                                                <ul className="benefit-list">
                                                    {sol.benefits.map((b) => (
                                                        <li key={b}><span className="check">✓</span> {b}</li>
                                                    ))}
                                                </ul>
                                                <Link to="/contact" className="btn btn-teal" style={{ marginTop: 20 }}>
                                                    {sol.demo} <FiArrowRight />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {filtered.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                                No solutions match your search. <button className="btn btn-outline btn-sm" onClick={() => setSearch('')}>Clear</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section section-alt">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Proven Success</span>
                        <h2>Case Studies</h2>
                        <p>Real results we&apos;ve delivered for our clients.</p>
                        <div className="section-divider" />
                    </div>
                    <div className="grid-3">
                        {caseStudies.map((c) => (
                            <div key={c.client} className="case-card card">
                                <div className="case-card__industry">{c.industry}</div>
                                <h3>{c.client}</h3>
                                <div className="case-card__result">{c.result}</div>
                                <p>{c.desc}</p>
                                <Link to="/contact" className="btn btn-outline btn-sm" style={{ marginTop: 16 }}>
                                    Read More <FiArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiFilter } from 'react-icons/fi';
import {
    MdDocumentScanner, MdPeopleAlt, MdOutlineComputer, MdCode,
    MdInput, MdLocalShipping, MdSupportAgent, MdCloudUpload,
    MdBarChart, MdSecurity, MdPrint, MdBuild, MdPhotoCamera, MdStorage
} from 'react-icons/md';
import './Services.css';

const categories = ['All', 'Digitization', 'IT Solutions', 'Staffing', 'Hardware'];

const services = [
    { icon: <MdDocumentScanner />, title: 'Scanning & Digitization', desc: 'High-speed document scanning with OCR and metadata tagging for complete digital transformation of your paper records.', cat: 'Digitization', to: '/services' },
    { icon: <MdInput />, title: 'Data Entry Solutions', desc: 'Accurate, high-volume data entry with AI-assisted processing and application integration for seamless operations.', cat: 'Digitization', to: '/services/data-entry' },
    { icon: <MdCloudUpload />, title: 'Document Management', desc: 'Cloud-based DMS with version control, access permissions, and powerful full-text search capabilities.', cat: 'Digitization', to: '/services' },
    { icon: <MdCode />, title: 'Software Development', desc: 'Custom enterprise software, web applications, and APIs built with modern frameworks and best practices.', cat: 'IT Solutions', to: '/services/software-development' },
    { icon: <MdBarChart />, title: 'Data Analytics', desc: 'Transform raw data into actionable insights with custom dashboards, reports, and predictive analytics tools.', cat: 'IT Solutions', to: '/services' },
    { icon: <MdSupportAgent />, title: 'IT Support & AMC', desc: '24/7 helpdesk, on-site support, and Annual Maintenance Contracts to keep your IT infrastructure running smoothly.', cat: 'IT Solutions', to: '/services' },
    { icon: <MdLocalShipping />, title: 'Logistics & Support', desc: 'End-to-end supply chain management, inventory optimization, and IT logistics for smooth operations.', cat: 'IT Solutions', to: '/services/logistics' },
    { icon: <MdSecurity />, title: 'Cybersecurity Solutions', desc: 'Comprehensive security assessments, network monitoring, and data protection strategies for your business.', cat: 'IT Solutions', to: '/services' },
    { icon: <MdPeopleAlt />, title: 'Manpower Contracting', desc: 'Skilled IT professionals deployed on flexible project and on-demand basis to augment your teams.', cat: 'Staffing', to: '/services' },
    { icon: <MdOutlineComputer />, title: 'Hardware Sales', desc: 'Premium workstations, servers, networking equipment from certified global vendors with warranty support.', cat: 'Hardware', to: '/services' },
    { icon: <MdBuild />, title: 'Hardware Maintenance', desc: 'Preventive and corrective maintenance of IT hardware assets with rapid response times across your locations.', cat: 'Hardware', to: '/services' },
    { icon: <MdPrint />, title: 'Printing Solutions', desc: 'Managed print services including high-capacity printers, copiers, and multifunction devices for enterprise needs.', cat: 'Hardware', to: '/services' },
    { icon: <MdPhotoCamera />, title: 'CCTV & Surveillance', desc: 'IP-based surveillance systems with remote monitoring, analytics, and integration with existing security systems.', cat: 'Hardware', to: '/services' },
    { icon: <MdStorage />, title: 'Storage Solutions', desc: 'NAS, SAN, cloud storage procurement, deployment, and lifecycle management for scalable data storage.', cat: 'Hardware', to: '/services' },
];

export default function Services() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filtered = activeFilter === 'All' ? services : services.filter(s => s.cat === activeFilter);

    return (
        <div className="services-page">
            <section className="page-hero">
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span><span className="current">Services</span>
                    </div>
                    <h1>Our <span className="hero-highlight">Services</span></h1>
                    <p>Comprehensive IT and digitization services tailored to your business needs.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filters */}
                    <div className="filter-bar">
                        <FiFilter style={{ color: 'var(--text-muted)' }} />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn${activeFilter === cat ? ' filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid-3 services-page-grid">
                        {filtered.map((svc) => (
                            <div key={svc.title} className="svc-card card">
                                <div className="svc-card__header">
                                    <div className="svc-icon">{svc.icon}</div>
                                    <span className="tag">{svc.cat}</span>
                                </div>
                                <h3>{svc.title}</h3>
                                <p>{svc.desc}</p>
                                <Link to={svc.to} className="btn btn-outline btn-sm">
                                    Read More <FiArrowRight />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section services-cta">
                <div className="container text-center">
                    <h2>Have a Question?</h2>
                    <p>Our experts are ready to help you find the right solution for your business.</p>
                    <Link to="/contact" className="btn btn-primary">
                        Contact Us <FiArrowRight />
                    </Link>
                </div>
            </section>
        </div>
    );
}

import { Link } from 'react-router-dom';
import './Career.css';

export default function Career() {
    return (
        <div className="career-page">

            {/* ── Hero ── */}
            <section className="career-hero">
                <div className="career-hero__overlay" />
                <div className="career-hero__content">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link><span>›</span><span className="current">Career</span>
                    </div>
                    <h1>Careers at <span className="hero-highlight">Solarixtech</span></h1>
                    <p>We are always looking for talented individuals to join our team and help us deliver top-notch IT &amp; Digitization services to our clients.</p>
                </div>
            </section>

            {/* ── Job Openings ── */}
            <section className="career-openings">
                <h2>Current Job Openings</h2>
                <p>Please submit your resume to <strong>info@solarixtech.com</strong></p>
                <a
                    href="mailto:info@solarixtech.com?subject=Job Application – Solarixtech"
                    className="career-apply-btn"
                >
                    Apply Now
                </a>
            </section>

        </div>
    );
}

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim()) e.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    if (submitted) {
        return (
            <div className="form-success">
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>🎉</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <button className="btn btn-white" style={{ marginTop: 16 }} onClick={() => setSubmitted(false)}>
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="grid-2">
                <div className="form-group">
                    <label htmlFor="cf-name">Full Name *</label>
                    <input id="cf-name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="cf-email">Email Address *</label>
                    <input id="cf-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" type="text" placeholder="How can we help?" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="cf-message">Message *</label>
                <textarea id="cf-message" name="message" rows="5" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <FiSend /> Send Message
            </button>
        </form>
    );
}

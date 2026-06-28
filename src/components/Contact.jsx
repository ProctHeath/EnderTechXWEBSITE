import { useRef, useEffect, useState } from 'react';
import config from '../data/config';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container fade-in" ref={ref}>
        <h2 className="section-title">Me Contacter</h2>
        <p className="section-subtitle">Envie de collaborer ? Discutons-en.</p>
        <div className="contact-grid">
          <div className="contact-cards">
            <div className="contact-info-card card">
              <div className="contact-icon"><i className="fa-solid fa-envelope" /></div>
              <h3>Email</h3>
              <p>{config.email}</p>
            </div>
            <div className="contact-info-card card">
              <div className="contact-icon"><i className="fa-solid fa-map-location-dot" /></div>
              <h3>Localisation</h3>
              <p>{config.location}</p>
            </div>
            <div className="contact-info-card card">
              <div className="contact-icon"><i className="fa-solid fa-globe" /></div>
              <h3>Réseaux</h3>
              <div className="contact-social">
                <a href={config.social.github} className="social-link" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github" />
                </a>
                <a href={config.social.linkedin} className="social-link" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href={config.social.twitter} className="social-link" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form card" onSubmit={handleSubmit}>
            <h3 className="form-title">Envoyez-moi un message</h3>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} required />
            </div>
            <button type="submit" className="btn-primary form-btn">
              {sent ? 'Message envoyé !' : 'Envoyer le message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

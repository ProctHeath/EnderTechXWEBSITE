import { useRef, useEffect, useState } from 'react';
import config from '../data/config';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append('_subject', `Nouveau message depuis ${config.name}`);

      const response = await fetch(`https://formsubmit.co/ajax/${config.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (!response.ok) throw new Error('Email non envoyé');

      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 3000);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
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
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn-primary form-btn" disabled={sending}>
              {sending ? 'Envoi en cours...' : sent ? 'Message envoyé !' : 'Envoyer le message'}
            </button>
            {error && <p role="alert">L’envoi a échoué. Réessayez dans un instant.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

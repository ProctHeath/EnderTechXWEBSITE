import { useRef, useEffect } from 'react';
import config from '../data/config';
import './About.css';

export default function About() {
  const ref = useRef(null);

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

  return (
    <section id="about" className="section about-section">
      <div className="container fade-in" ref={ref}>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>{config.about.title}</h2>
            {config.about.paragraphs.map((p, i) => (
              <p key={i} className="about-p">{p}</p>
            ))}
            <div className="about-buttons">
              <a href="#contact" className="btn-primary">Me contacter</a>
              <a href={config.resumeUrl} className="btn-outline">Télécharger CV</a>
            </div>
          </div>
          <div className="about-image">
            <div className="morph-wrapper animate-morph">
              <div className="morph-bg" />
              <div className="morph-placeholder">
                <i className="fa-solid fa-user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

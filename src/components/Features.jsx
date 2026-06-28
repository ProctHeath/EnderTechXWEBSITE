import { useRef, useEffect } from 'react';
import config from '../data/config';
import './Features.css';

export default function Features() {
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
    <section id="features" className="section features-section">
      <div className="container fade-in" ref={ref}>
        <h2 className="section-title">Ce que je fais</h2>
        <p className="section-subtitle">Tout ce qu'il faut pour construire de grands produits sur le web.</p>
        <div className="features-grid">
          {config.features.map((f, i) => (
            <div key={i} className="feature-card card">
              <div className="feature-icon">
                <i className={f.icon} />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

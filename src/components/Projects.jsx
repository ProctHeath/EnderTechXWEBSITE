import { useRef, useEffect, useState } from 'react';
import config from '../data/config';
import './Projects.css';

export default function Projects() {
  const ref = useRef(null);
  const [selected, setSelected] = useState(null);

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

  const handlePrev = () => {
    setSelected(prev => (prev === 0 ? config.projects.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSelected(prev => (prev === config.projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container fade-in" ref={ref}>
        <h2 className="section-title">Mes Projets</h2>
        <p className="section-subtitle">Découvrez quelques-uns de mes travaux récents.</p>
        <div className="projects-grid">
          {config.projects.map((p, i) => (
            <div key={i} className="project-card card" onClick={() => setSelected(i)}>
              <div className="project-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="project-overlay">
                  <span>Voir le projet →</span>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.youtube} className="btn-primary btn-sm">YouTube</a>
                  <a href={p.github} className="btn-outline btn-sm">
                    <i className="fa-brands fa-github" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <button className="modal-nav modal-prev" onClick={handlePrev}>‹</button>
            <img src={config.projects[selected].image} alt={config.projects[selected].title} className="modal-img" />
            <button className="modal-nav modal-next" onClick={handleNext}>›</button>
            <div className="modal-info">
              <h3>{config.projects[selected].title}</h3>
              <p>{config.projects[selected].desc}</p>
              <span className="modal-counter">{selected + 1} / {config.projects.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useRef, useEffect } from 'react';
import config from '../data/config';
import './Skills.css';

const levelLabel = (lvl) => {
  if (lvl >= 90) return 'Expert';
  if (lvl >= 80) return 'Avancé';
  if (lvl >= 70) return 'Intermédiaire';
  return 'Débutant';
};

export default function Skills() {
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
    <section id="skills" className="section skills-section">
      <div className="container fade-in" ref={ref}>
        <h2 className="section-title">Mes Compétences</h2>
        <p className="section-subtitle">Les technologies et outils que j'utilise.</p>
        <div className="skills-grid">
          {config.skills.map((s, i) => (
            <div key={i} className="skill-card card">
              <div className="skill-icon" style={{ background: `${s.color}15`, color: s.color }}>
                <i className={s.icon} />
              </div>
              <h3 className="skill-name">{s.name}</h3>
              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: `${s.level}%`, background: `linear-gradient(to right, ${s.color}, ${s.color}88)` }} />
              </div>
              <div className="skill-info">
                <span className="skill-level">{levelLabel(s.level)}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

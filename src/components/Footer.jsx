import config from '../data/config';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="navbar-logo">{config.name}</span>
            <span className="navbar-dot">●</span>
          </div>
          <ul className="footer-links">
            <li><a href="#features">Showcase</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#skills">Compétences</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer-social">
            <a href={config.social.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></a>
            <a href={config.social.linkedin} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /></a>
            <a href={config.social.twitter} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {config.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

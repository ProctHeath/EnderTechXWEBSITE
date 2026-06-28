import { useState, useEffect } from 'react';
import config from '../data/config';
import './Navbar.css';

const navItems = [
  { label: 'Showcase', href: '#features' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const openMenu = () => {
    setMenuOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="navbar-brand">
            <span className="navbar-logo">{config.name}</span>
            <span className="navbar-dot">●</span>
          </div>
          <ul className="navbar-links">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="navbar-link">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
              <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`} />
            </button>
            <button className="hamburger" onClick={openMenu} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-brand">
            <span className="navbar-logo">{config.name}</span>
            <span className="navbar-dot">●</span>
          </div>
          <button className="close-btn" onClick={closeMenu}>
            <i className="fa-solid fa-square-xmark" />
          </button>
        </div>
        <ul className="mobile-menu-links">
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="mobile-link" onClick={closeMenu}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

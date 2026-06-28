import { useEffect, useRef, useState } from 'react';
import config from '../data/config';
import './Hero.css';

export default function Hero() {
  const cmdRef = useRef(null);
  const canvasRef = useRef(null);
  const [displayName, setDisplayName] = useState('');
  const nameIndexRef = useRef(0);

  useEffect(() => {
    const el = cmdRef.current;
    if (!el) return;
    const text = config.heroCommand;
    let i = 0;
    el.textContent = '';
    const type = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    };
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 255, 70, 0.15)';
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#$%&@';
    let frame;
    let count = 0;
    const nameText = config.name;
    const maxCount = nameText.length;

    const glitchEffect = () => {
      if (nameIndexRef.current < maxCount) {
        let result = '';
        for (let i = 0; i < nameText.length; i++) {
          if (i < nameIndexRef.current) {
            result += nameText[i];
          } else {
            result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
        }
        setDisplayName(result);
        count++;
        if (count > 10) {
          nameIndexRef.current++;
          count = 0;
        }
        frame = setTimeout(glitchEffect, 80);
      } else {
        setDisplayName(nameText);
      }
    };

    const startDelay = setTimeout(glitchEffect, 500);
    return () => {
      clearTimeout(startDelay);
      clearTimeout(frame);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">{displayName || config.name}</span>
          </h1>
          <p className="hero-subtitle">
            {config.description}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Voir mes projets</a>
            <a href="#about" className="btn-outline">En savoir plus</a>
          </div>
        </div>
        <div className="hero-terminal card" style={{ position: 'relative', overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              opacity: 0.5,
            }}
          />
          <div className="terminal-header" style={{ position: 'relative', zIndex: 1 }}>
            <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          </div>
          <div className="terminal-body" style={{ position: 'relative', zIndex: 1 }}>
            <span className="prompt">$</span>{' '}
            <span className="command" ref={cmdRef} />
            <span className="animate-blink cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

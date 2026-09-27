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

      {/* =====================================
          VIDEO BACKGROUND
          ===================================== */}

      <video
        className="about-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre */}
      <div className="about-video-overlay"></div>


      {/* =====================================
          CONTENT
          ===================================== */}

      <div className="container fade-in" ref={ref}>

        <div className="about-grid">

          {/* =================================
              TEXT
              ================================= */}

          <div className="about-text">

            <h2
              className="section-title"
              style={{ textAlign: 'left' }}
            >
              {config.about.title}
            </h2>

            {config.about.paragraphs.map((p, i) => (
              <p key={i} className="about-p">
                {p}
              </p>
            ))}

            <div className="about-buttons">

              <a
                href="#contact"
                className="btn-primary"
              >
                Me contacter
              </a>

              <a
                href={config.resumeUrl}
                className="btn-outline"
              >
                Télécharger CV
              </a>

            </div>

          </div>


          {/* =================================
              PROFILE IMAGE
              ================================= */}

          <div className="about-image">

            <div className="morph-wrapper">

              {/* Halo derrière la photo */}
              <div className="morph-glow"></div>

              {/* Photo de profil */}
              <img
                className="morph-profile"
                src="https://media.licdn.com/dms/image/v2/D4E03AQE2Sg6PW24ZJg/profile-displayphoto-scale_200_200/B4EZ4xQMQiJoAg-/0/1778942791052?e=1792022400&v=beta&t=LUv4U5WD6UOZXbf_JlHcHhL9Bts7n-63ntzzGsgnW0U"
                alt="Photo de profil"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
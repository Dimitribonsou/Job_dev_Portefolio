import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFacebookF, FaWhatsapp, FaPaperPlane, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import photo_dimi from '../assets/photo_acceuil.png';
import './Style/aboutSection.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(contentRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.5');
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section">
      <div className="container">
        <div className="content" ref={contentRef}>
          <div className="section-header">
            <h2>À propos de moi</h2>
            <div className="underline"></div>
          </div>

          <div className="about-content">
            <p className="lead">
              Développeur web & mobile passionné, je transforme vos idées en solutions digitales performantes et évolutives.
            </p>
            
            <p className="description">
              Avec plus de 3 ans d'expérience dans le développement web et mobile, je m'engage à créer des solutions sur mesure qui répondent parfaitement aux besoins de vos utilisateurs. Mon expertise en JavaScript et C# me permet de concevoir des applications robustes, évolutives et maintenables.
            </p>

            <div className="expertise">
              <h3>Mon expertise</h3>
              <ul>
                <li>Développement d'applications web modernes et responsives</li>
                <li>Création d'applications mobiles performantes</li>
                <li>Conception d'architectures évolutives</li>
                <li>Optimisation des performances et de l'expérience utilisateur</li>
              </ul>
            </div>

            <div className="contact-info">
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Email</span>
                  <a href="mailto:dimitribonsou26@gmail.com" className="value">
                    dimitribonsou26@gmail.com
                  </a>
                </div>
                <div className="info-item">
                  <span className="label">Téléphone</span>
                  <a href="tel:+237674606328" className="value">
                    +237 674 606 328
                  </a>
                </div>
                <div className="info-item">
                  <span className="label">Localisation</span>
                  <span className="value">Douala, Cameroun</span>
                </div>
                <div className="info-item">
                  <span className="label">Disponibilité</span>
                  <span className="value">Immédiate</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Dimitribonsou"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61571160665639"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/674606328"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:dimitribonsou26@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="cta-group">
              <a
                href={require('../assets/CV_dimidev.pdf')}
                download="cv_dimitribonsou.pdf"
                className="btn btn-primary"
              >
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>

        <div className="image-container" ref={imageRef}>
          <div className="image-wrapper">
            <img
              src={photo_dimi}
              alt="Dimitri Bonsou - Développeur Web & Mobile"
              className="profile-image"
            />
            <div className="experience-badge">
              <span className="years">3+</span>
              <span className="text">Années d'expérience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

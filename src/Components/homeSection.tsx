import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Style/homeSection.scss';

gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    });

    tl.from(textRef.current, {
      // x: 50,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    })
    .from(ctaRef.current, {
      x: 50,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');
  }, []);

  return (
    <section ref={sectionRef} id="home" className="home-section">
      <div className="container">
        <div className="content">
          <h1 ref={textRef} className="title">
            Je conçois des plateformes modernes et sur-mesure pour propulser votre entreprise
          </h1>
          {/* <p className="subtitle">
            Développeur web & mobile full-stack basé à Douala, je transforme vos idées en solutions digitales performantes et évolutives.
          </p> */}
          <div ref={ctaRef} className="cta-group">
            <a href="#contact" className="btn btn-primary">
              Discutons de votre projet
            </a>
            <a href="#projets" className="btn btn-secondary">
              Voir mes réalisations
            </a>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="number">3+</span>
              <span className="label">Années d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="number">15+</span>
              <span className="label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="number">100%</span>
              <span className="label">Clients satisfaits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import image_projet from "./../assets/home_illustration.png";
import projets from '../data/projet.json';
import './Style/projetSection.scss';

gsap.registerPlugin(ScrollTrigger);

const ProjetSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(card, { clearProps: 'all' });
          }
        });
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="projets" className="projet-section">
      <div className="container">
        <div className="section-header">
          <h2>Mes Réalisations</h2>
          <div className="underline"></div>
        </div>

        <p className="section-description">
          Découvrez une sélection de mes projets récents, démontrant mon expertise
          en développement web et mobile.
        </p>

        <div className="projects-grid">
          {projets.map((projet, index) => (
            <div
              key={projet.title}
              ref={(el:any) => cardsRef.current[index] = el}
              className="project-card"
            >
              <div className="project-content">
                <img
                src={ projet.image ? projet.image :  image_projet}
                alt={projet.title || "Projet"}
                className="object-cover w-full h-20 md:h-24 rounded-tl-lg rounded-tr-lg"
              />
                <h5>{projet.title}</h5>
                <div className="project-links">
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Voir le projet"
                  >
                    <FaExternalLinkAlt />
                    <span>Voir le projet</span>
                  </a>
                  {/* {projet.lien && (
                    <a
                      href={projet.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Details"
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   const overlay = document.querySelector('.project-overlay');
                      //   if (overlay) {
                      //     (overlay as HTMLElement).style.display = (overlay as HTMLElement).style.display === 'block' ? 'none' : 'block';
                      //   }
                      // }}
                    >
                      <FaInfoCircle />
                      <span>Details</span>
                    </a>
                  )} */}
                </div>
              </div>
              {/* <div className="project-overlay">
                <div className="project-details">
                  <h4>Technologies utilisées</h4>
                  <div className="tech-stack">
                    {projet.technologies?.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="project-description">
                    {projet.description}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        <div className="cta-container">
          <a href="https://wa.me/237674606328?text=Je souhaite discuter sur mon projet avec vous .Et-vous disponible?" className="cta-button">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjetSection;

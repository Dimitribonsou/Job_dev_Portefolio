import React, { useState, useEffect } from "react";
import profil_photo from "./../assets/photo_flyers.png";
import "./Style/annimateText.scss";

const HomeSection = () => {
  
  const [textprofession, setTextProfession] = useState("Developpeur web & Mobile 💻");

  useEffect(() => {
    const textLoad = () => {
      const texts = [
        " Developpeur web & Mobile 💻",
        " Web designer 💻",
        " Freelancer 🪪",
         " Formateur 🪪"
      ];
      let currentIndex = 0;

      const changeText = () => {
        setTextProfession(texts[currentIndex]);
        currentIndex = (currentIndex + 1) % texts.length;
      };

      const intervalId = setInterval(changeText, 5000);

      return () => clearInterval(intervalId);
    };

    textLoad();
  }, []);
  
  return (
   
    <div
      id="acceuil"
      className="flex md:justify-between justify-center items-center gap-7 flex-wrap md:px-10 px-5 mt-10 w-screen"
    >
      <div className="  w-full  md:w-1/2 sm:w-4/5    flex flex-col content-start justify-start items-center gap-5">
        <p className="text-first text-start w-full   mx-0">
          Salut ,bienvenue sur le porfolio de Dimi
          <strong className="text-green">Dev</strong>
        </p>
        <div className="flex  w-full jusfify-start items-center gap-5 text-link ">
          <span className="prof-size">Je suis</span>
          <span className="text-green sec-text relative prof-size">
            {textprofession}
          </span>
        </div>
        <p>
          Ayant la connaissance de plusieurs langages de programmation et
          framework avec plusieurs projets réalisés je suis disponibles pour
          transformer vos idées en solution numerique .
        </p>
        <div className="flex  justify-center  w-full items-center gap-3 md:gap-10 mt-3 flex-wrap">
          <a
            href={require("./../assets/CV_dimidev.pdf")}
            download="cv_dimitribonsou.pdf"
            className="btn-one"
          >
            Télécharger le CV
          </a>
          <a
            href="https://wa.me/674606328"
            className="btn-two"
            rel="noreferrer"
          >
            Me contacter
          </a>
        </div>
      </div>
      <div className=" w-full  md:w-1/4 sm:w-4/5 relative   flex flex-col content-start justify-start items-center gap-5 bg-green h-60 figure-1">
        <img
          src={profil_photo}
          alt=" profil"
          className="absolute top-0 left-1/3 -translate-x-1/3 -translate-y-14 w-96 h-72"
        />
      </div>
    </div>
  );
};

export default HomeSection;

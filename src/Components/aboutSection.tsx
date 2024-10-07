import React from "react";
import profil_photo from "./../assets/photo_flyers.png";
import chapeau from "./../assets/chapeau.png";
import { FaFacebookF, FaWhatsapp, FaPaperPlane, FaEnvelope } from "react-icons/fa"; //importer les  react-icon pour acceder aux icons

const AboutSection = () => {
  return (
    <div
      id="about"
      className=" flex xl:justify-between justify-center items-center gap-5 flex-wrap md:px-10 px-5 mt-20 w-screen h-fit md:mb-20 mb-24"
    >
      <div className=" order-1 md:order-2 flex flex-col gap-4 md:w-4/5  xl:w-2/3 w-11/12 justify-start items-center md:h-80 h-fit   ">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-first text-green">
            APROPOS DE <strong className="text-black">MOI</strong>
          </p>
          <span className="w-3/5 h-1 bg-green "></span>
        </div>
        <p className="text-justify">
          Je suis développeur pour moi codé est une passion j’adore découvrir le
          monde du génie logiciel c’est pourquoi je me lance des défis
          quotidiens dans la découverte des nouveautés sur les technologies
          basée sur les langages
          <strong className="text-green"> Javascript et C# .</strong>
        </p>
        <div className="flex w-full justify-between items-center flex-wrap ">
          <div className="flex flex-col gap-1 justify-center items-center  md:w-1/5 w-1/2  mb-1">
            <span className="text-link ">Nom</span>
            <span>BONSOU KENGNI </span>
          </div>
          <div className="flex flex-col gap-1 md:justify-center justify-end items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">PRENOM</span>
            <span> DIMITRI</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">EMAIL</span>
            <a
              href="mailto:dimitribonsou26@gmail.com"
              className="font-bold"
              rel="noreferrer"
            >
              dimitribonsou26@gm..
            </a>
          </div>
          <div className="flex flex-col gap-1 md:justify-center justify-end items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">TELEPHONE</span>
            <span>674606328</span>
          </div>
        </div>
        <div className="flex w-full justify-between items-center flex-wrap ">
          <div className="flex flex-col gap-1 justify-center items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">GITHUB</span>
            <a
              href="https://github.com/Dimitribonsou"
              target="_blank"
              className="text-green font-bold"
              rel="noreferrer"
            >
              Dimitribonsou
            </a>
          </div>
          <div className="flex flex-col gap-1 md:justify-center justify-end items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">POST PREFERE</span>
            <span className="font-bold text-green">DEV-BACK-END</span>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">PAYS</span>
            <span>Cameroun</span>
          </div>
          <div className="flex flex-col gap-1 md:justify-center justify-end items-center md:w-1/5 w-1/2 mb-1">
            <span className="text-link">VILLE</span>
            <span>Douala</span>
          </div>
        </div>
        <div className=" w-full flex md:justify-between  justify-center items-center gap-5 flex-wrap">
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
      <div className=" order-2  md:order-1 border-x-4 border-y-4 border-green xl:w-1/4   sm:w-4/5 w-11/12 min-w-80 h-80 flex justify-start items-center gap-5 relative md:mt-0 mt-10">
        <div className="flex  w-1/6  h-full flex-col justify-start  items-start gap-5 py-5 px-2">
          <a
            href="https://www.facebook.com/Dimipro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-14 h-14 rounded-full bg-green text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaFacebookF className="text-white text-2xl" />
          </a>
          <a
            href="https://wa.me/674606328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-14 h-14 rounded-full bg-green text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaWhatsapp className="text-white text-2xl" />
          </a>
          <a
            href="https://t.me/674606328"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-14 h-14 rounded-full bg-green text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaPaperPlane className="text-white text-2xl" />
          </a>
          <a
            href="mailto:dimitribonsou26@gmail.com"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-14 h-14 rounded-full bg-green text-light px-3 hover:scale-110 border-4 border-green cursor-pointer"
          >
            <FaEnvelope className="text-white text-2xl" />
          </a>
        </div>
        <img
          src={profil_photo}
          alt="about profil"
          className="absolute top-0 left-2/3 -translate-x-2/3 -translate-y-20 w-4/5 h-96"
        />
        <div className="  flex justify-center items-center w-20 h-20 rounded-full bg-green absolute top-0 left-full -translate-x-2/3 -translate-y-10">
          <img src={chapeau} alt="chapeau laureat" className="w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

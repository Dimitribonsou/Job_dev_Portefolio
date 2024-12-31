import React from "react";
import CompetenceItem from "./Sous-Components/CompetenceItem";
import BlockImageCompetence from "./Sous-Components/BlockImageCompetence";
import logo_angular from "./../assets/angular.jpeg";
import logo_react from "./../assets/react.jpeg";
import logo_php from "./../assets/php.jpeg";
import logo_Csharp from "./../assets/csharp.jpeg";
import logo_nodejs from "./../assets/nodejs.jpeg";
import logo_mysql from "./../assets/mysql.jpeg";
import logo_mongodb from "./../assets/mongodb.jpeg";
import logo_ts from "./../assets/ts.jpeg";
import logo_html from "./../assets/html.jpeg";
import logo_css from "./../assets/css.jpeg";
import logo_js from "./../assets/js.jpeg";
import logo_bootstrap from "./../assets/Bootstrap.jpeg";
import logo_sass from "./../assets/sass.jpeg";
import logo_figma from "./../assets/figma.jpeg";
import logo_tailwind from "./../assets/tailwind.jpeg";
import logo_uml from "./../assets/uml.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const CompetenceSection = () => {
  return (
    <div
      id="competences"
      className="mt-3 flex flex-col justify-center items-center gap-10 lg:px-10 px-5"
    >
      <div className="flex flex-col justify-center items-center gap-1 ">
        <p className="text-first text-green ">
          MES <strong className="text-white">COMPETENCES</strong>
        </p>
        <span className="w-3/5 h-1 bg-green "></span>
      </div>

      <p className="text-justify">
        Pour mettre sur pied mes differents projets je fais usage a plusieurs
        langages de progammation , framework ,outils et technologies en fonction
        de l'etape de développement et de la grandeur du projet .
      </p>
      <div className=" flex xl:justify-center justify-center items-center lg:gap-14 gap-10  flex-wrap md:px-10 px-5  w-screen h-fit md:mb-20 mb-24">
        <div className=" order-2 flex flex-wrap  gap-4 md:w-full  xl:w-2/3 w-11/12    justify-center     items-center  h-fit   ">
          <CompetenceItem groupetitle="Analyse" technologies="UML,MERISE" />
          <CompetenceItem
            groupetitle="WEB DESIGN"
            technologies="FIGMA,ADOBE XD"
          />
          <CompetenceItem
            groupetitle="FRONT-END"
            technologies="HTML5, CSS3,SCSS,JS"
          />
          {/* <div className="mt-2 sm:w-2/3 w-10/12   mx-auto xl:mx-0 ">
            <span className="text-green font-bold">Framework</span>
            <div className="text-link mt-2 ms-10 md:text-center">
              React,React-native,Angular,Bootstrap,Tailwind CSS, Typescript
            </div>
          </div> */}
          <CompetenceItem groupetitle="BACK-END" technologies="PHP,C#,NODEJS" />
          <CompetenceItem
            groupetitle="BASE DE DONNEE"
            technologies="MYSQL,MONGODB"
          />
            <div className="flex flex-col justify-start items-center gap-2 w-96 h-50  px-5 py-5 rounded-lg text-black bg-white hover:scale-105">
                <FontAwesomeIcon icon={faCoffee} className="text-green text-3xl" />
                <span className="text-base font-bold text-green text-center"> Framework  </span>
                <span className="text-center font-bold "> React,React-native,Angular,Bootstrap,Tailwind CSS, Typescript</span> 
            </div>
        </div>
        <div className=" order-1  border-x-4 border-y-4 border-green xl:w-1/4   sm:w-4/5 w-11/12 min-w-80 h-80 flex flex-col justify-start items-center gap-4 relative md:mt-0 mt-10 rounded-full py-9">
          <BlockImageCompetence
            image1={logo_angular}
            image2={logo_react}
            image3={logo_php}
            image4={logo_Csharp}
          />
          <BlockImageCompetence
            image1={logo_nodejs}
            image2={logo_mongodb}
            image3={logo_mysql}
            image4={logo_ts}
          />
          <BlockImageCompetence
            image1={logo_html}
            image2={logo_css}
            image3={logo_js}
            image4={logo_bootstrap}
          />
          <BlockImageCompetence
            image1={logo_sass}
            image2={logo_figma}
            image3={logo_tailwind}
            image4={logo_uml}
          />
        </div>
      </div>
    </div>
  );
};

export default CompetenceSection;

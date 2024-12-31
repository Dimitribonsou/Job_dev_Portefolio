import ProjetItem from "./Sous-Components/ProjetItem";
import projets from "../data/projet.json"; // Importation du fichier JSON
import { porjetType } from "../types/projetType"; // Importation du type

const ProjetSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 px-10">
      <div
        id="projets"
        className="flex flex-col justify-center items-center gap-1 "
      >
        <p className="text-first text-green ">
          MES <strong className="text-white">PROJETS</strong>
        </p>
        <span className="w-3/5 h-1 bg-green "></span>
      </div>
      <div className="title_projet">
        <p className="text-base md:text-xl me-3">
          Les compétences mentionner plus haut ont été mis en pratique pour
          réaliser les projets suivants .
          <span className="text-green">
            Cliquer sur la description du projet pour voir le resultat du projet.
          </span>
        </p>
      </div>
      <div className="flex justify-center sm:justify-between items-center md:gap-10 lg:mt-8 mt-3 gap-3 flex-wrap w-full md:px-10 px-1">
        {projets.map((projet: porjetType, index: number) => (
          <ProjetItem key={index} title={projet.title} lien={projet.lien} />
        ))}
      </div>
    </div>
  );
};

export default ProjetSection;

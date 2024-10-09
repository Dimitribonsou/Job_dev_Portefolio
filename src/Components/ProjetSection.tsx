import CategorieProjet from "./Sous-Components/CategorieProjet";
import ProjetItem from "./Sous-Components/ProjetItem";

const ProjetSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 px-10">
      <div
        id="projets"
        className="flex flex-col justify-center items-center gap-1 "
      >
        <p className="text-first text-green ">
          MES <strong className="text-black">PROJETS</strong>
        </p>
        <span className="w-3/5 h-1 bg-green "></span>
      </div>
      {/* <CategorieProjet /> */}
      <div className="flex justify-center sm:justify-between items-center md:gap-10 lg:mt-8 mt-3 gap-3 flex-wrap w-full md:px-10 px-1">
        <ProjetItem title="Maquete d'une plateforme de banque d'epreuve pour etudiant" />
        <ProjetItem title="Porte-folio pour développeur" />
        <ProjetItem title="Plateforme web de présentation des produits" />
        <ProjetItem title="Application de génération de carte d'étudiant" />
        <ProjetItem title="Site de présentation d'une entreprise de bâtiment" />
        <ProjetItem title="Site de présentation d'une entreprise de prestation de service" />
        <ProjetItem title="Réalisation du site web de  DECODE" />
        <ProjetItem title="Application de
gestion des informations d'un employer" />
      </div>
    </div>
  );
};

export default ProjetSection;

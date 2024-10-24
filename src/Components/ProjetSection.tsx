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
        <ProjetItem title="Maquete d'une plateforme de banque d'epreuve pour etudiant" lien="https://www.figma.com/design/lXZi5RuAOJ4E5TFjYiak6v/Projet_banque_epreuve?node-id=117-205&node-type=frame&t=7RppIWf7Er0GfcUi-0" />
        <ProjetItem title="Porte-folio pour développeur" lien="https://dimitribonsou-website.vercel.app/"/>
        <ProjetItem title="Plateforme web de présentation des produits" lien="https://dimishop.vercel.app"/>
        <ProjetItem title="Réalisation du site web de  DECODE"  lien="https://site-final-decode.vercel.app/"/>
        <ProjetItem title="Site de présentation d'une entreprise de prestation de service" lien="https://startup-siteweb.vercel.app/" />
        <ProjetItem title="Site de présentation d'une entreprise de bâtiment" lien="https://construction-website-nu.vercel.app/"/>
        <ProjetItem title="Application de
gestion des informations d'un employer" />
        <ProjetItem title="Application de génération de carte d'étudiant" />

      </div>
    </div>
  );
};

export default ProjetSection;

import image_projet from "./../../assets/home_illustration.png";
// Assurez-vous que le chemin est correct et que l'image existe dans le dossier assets
interface typeProjet{
   title:string;
   lien?:string;
   image?:string;
   description?:string;
}
const ProjetItem = (props:typeProjet) => {
  return (
    <div className=" w-5/12  lg:w-1/5  h-40   shadow-md shadow-green-500  rounded-xl  flex flex-col  justify-between items-center  bg-white  cursor-pointer hover:scale-105">

        <img
          src={props.image ? props.image : image_projet}
          alt={props.title || "Projet"}
          className="object-cover w-full h-20 md:h-24 rounded-tl-lg rounded-tr-lg"
        />
     
        <a href={props.lien} target="blank" className="w-full h-full flex justify-center items-center">
          <span className=" projet-title text-center text-white md:font-bold px-1 ">
            {props.title}
          </span>
        </a>
      </div>
    
  );
};

export default ProjetItem;

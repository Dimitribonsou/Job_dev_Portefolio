import image_projet from "./../../assets/image_projet.png";
interface typeProjet{
   title:string;
   lien?:string;
}
const ProjetItem = (props:typeProjet) => {
  return (
    <div className=" w-5/12  lg:w-1/5  h-40   shadow-md shadow-green-500  rounded-xl  flex flex-col  justify-between items-center  bg-white  cursor-pointer hover:scale-105">
      <div className="w-full rounded-xl">
        <a href={props.lien} target="blank">
          <img
            src={image_projet}
            alt="imageprojet"
            className="w-full h-20 md:h-24 rounded-tl-lg rounded-tr-lg"
          />
        </a>
      </div>
      <div className="flex justify-center rounded-bl-xl rounded-br-xl items-center bg-green  w-full md:h-16 h-20">
        <a href={props.lien} target="blank" className="w-full h-full flex justify-center items-center">
          <span className=" projet-title text-center text-white md:font-bold px-1 ">
            {props.title}
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjetItem;

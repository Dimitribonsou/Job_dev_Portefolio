import React from "react";
import croix from './../../assets/GroupCroix.png'
interface servicetype{
  title:string;
  description:string;
}
const ServicesItem = (props:servicetype) => {
  return (
    <div className=" w-11/12 sm:w-43p md:w-5/12  lg:w-3/12 xl:w-26p h-72 px-5 py-3 border-x-2 border-y-2 shadow-xl border-green rounded-xl relative flex flex-col justify-between items-center gap-1">
      <div className="bg-green w-16 h-16 rounded-full absolute -top-6 left-1/2 -translate-x-1/3 -translate-y-2 flex justify-center items-center">
         <img src={croix} alt="croix" className="w-1/2"></img>
      </div>
      <span className="service-title font-bold mt-7 text-green mb-3">{props.title}</span>
      <p className="text-justify service-desc md:text-x  md:text-sm  xl:text-base font-medium">
        {props.description}
      </p>
      <div className="flex justify-end items-center   w-full">
          <a href="#projets" className="btn-two text-green  ">Voir plus</a>
      </div>
    </div>
  );
};

export default ServicesItem;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const CompetenceItem = (props: {
  groupetitle: string;
  technologies: string;
}) => {
  return (
    // <div className="flex flex-col md:justify-start mx-auto xl:mx-0 sm:w-2/3 w-10/12    items-center gap-2">
    //   <div className="flex w-full items-center gap-10">
    //     <FontAwesomeIcon icon={faCoffee} className="text-green text-3xl" />
    //     <span className="text-green font-bold text-link text-3xl">
    //       {props.groupetitle}
    //     </span>
    //   </div>
    //   <span className="text-link ms-10">{props.technologies}</span>
    // </div>
    <div className="flex flex-col justify-start items-center gap-2 w-52 h-50  px-5 py-5 rounded-lg text-black bg-white hover:scale-105">
          <FontAwesomeIcon icon={faCoffee} className="text-green text-3xl" />
          <span className="text-base font-bold text-green text-center">  {props.groupetitle}</span>
          <span className="text-center font-bold "> {props.technologies}</span> 
    </div>
  );
};

export default CompetenceItem;

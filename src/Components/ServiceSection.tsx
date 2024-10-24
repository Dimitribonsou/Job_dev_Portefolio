import React from "react";
import ServicesItem from "./Sous-Components/ServicesItem";
import services from "../data/services.json";
import { serviceType } from "../types/serviceType";

const ServiceSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 px-10">
      <div
        id="services"
        className="flex flex-col justify-center items-center gap-1 "
      >
        <p className="text-first text-green ">
          MES <strong className="text-black">SERVICES</strong>
        </p>
        <span className="w-3/5 h-1 bg-green "></span>
      </div>
      <div className="flex justify-center sm:justify-between items-center md:gap-10 lg:mt-8 mt-3 gap-3 flex-wrap w-full md:px-10 px-1">
        {services.map((service: serviceType, index: number) => (
          <ServicesItem
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

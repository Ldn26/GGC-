"use client"
import { useEffect } from "react";

const LogoCarousel = () => {


  return (
    <section className="overflow-hidden banner py-10">
      <div
        // id="carousel-track"
        className="flex  items-center  gap-10  justify-center whitespace-nowrap"
      >
        <img
          src="https://logo-marque.com/wp-content/uploads/2020/04/Huawei-Logo-2018–présent.jpg"
          alt="Logo 1"
          className="w-24 h-24 rounded-full object-contain bg-white  shadow-md"
        />
        <img
          src="./start.png"
          alt="Logo 2"
          className="w-24 h-24 rounded-full object-contain bg-white shadow-md"
        />
        <img
        src="./usthb.webp"
          alt="Logo 3"
          className="w-24 h-24 rounded-full object-contain bg-white shadow-md"
        />
        <img
        src="./ss.jpg"
          alt="Logo 4"
          className="w-24 h-24 rounded-full object-contain bg-white  shadow-md"
        />
      </div>
    </section>
  );
};

export default LogoCarousel;

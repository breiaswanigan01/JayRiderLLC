import React, { useRef } from "react";
import homepageImg from "../images/med-room.jpg";
import Card from "./Card";
import medImg1 from "../images/modern-healthcare.jpg";
import labImg1 from "../images/labequipment-2.jpeg";
import labImg2 from "../images/centrifuge-machine-istock_1699880690162.jpeg";
import medImg2 from "../images/med-equipment-2.jpeg";
import medImg3 from "../images/robotarm-lab-istock.jpeg";
import labImg3 from "../images/woman-lab.jpeg";
import labImg4 from "../images/lab-people.jpeg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Main = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-5  mb-8 md:mb-5 p-1 text-blue-900">
        Welcome to JayRider Equipment and Transportation
      </h1>

      {/* <div className="text-center md:relative md:flex md:justify-between md:text-xl "> */}
      {/* Mobile-friendly content */}
      {/* <Card
          className=""
          description="We buy, sell, and transport laboratory, scientific, and medical
        equipment!"
          button="Explore Products"
        /> */}

      {/* <div> */}
      <div className="flex items-center justify-center ">
        <MdChevronLeft
          onClick={scrollLeft}
          className="text-blue-600 text-4xl cursor-pointer lg:hidden"
        />
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 p-2"
          style={{
            width: "100%",
            scrollBehavior: "smooth",
            scrollBehavior: "smooth",
            scrollbarWidth: "none", // Hide the scrollbar
            "-ms-overflow-style": "none",
          }}
        >
          <div className="flex  ">
            <img src={medImg1} className="w-48 h-48" />
            <img src={labImg1} className="w-48 h-48" />
            <img src={labImg2} className="w-48 h-48" />
            <img src={medImg2} className="w-48 h-48" />
            <img src={medImg3} className="w-48 h-48" />
            <img src={labImg3} className="w-48 h-48" />
            <img src={labImg4} className="w-48 h-48" />
          </div>
        </div>
        <MdChevronRight
          onClick={scrollRight}
          className="text-blue-600 text-4xl cursor-pointer lg:hidden"
        />
      </div>

      {/* </div> */}
      <div>
        <img
          className=" mt-4 w-full h-[100vh] object-cover   "
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

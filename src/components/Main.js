import React, { useRef } from "react";
import homepageImg from "../images/med-room.jpeg";
import Card from "./Card";
import labImg1 from "../images/labequipment-2.jpeg";
import medImg2 from "../images/woman-lab3.jpg";
import labImg5 from "../images/man-equipment.jpeg";
import labImg6 from "../images/researcher-putting-test-tube-into-laboratory-centrifuge.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import equipment1 from "../images/equipment1.jpg";
import equipment2 from "../images/equipment2.jpg";
import equipment3 from "../images/equipment3.jpg";
import equipment4 from "../images/equipment4.jpg";
import equipment5 from "../images/equipment5.png";
import equipment6 from "../images/equipment6.jpg";
import equipment7 from "../images/equipment7.webp";

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

      <div className="text-center md:flex md:justify-between lg:flex lg:justify-center md:text-xl ">
        {/* Mobile-friendly content */}
        <Card
          className=""
          description="We buy, sell, and transport laboratory, scientific, and medical
        equipment!"
          button="Explore Products"
        />

        <div className="flex items-center justify-center">
          <MdChevronLeft
            onClick={scrollLeft}
            className="text-blue-900 text-6xl cursor-pointer lg:hidden"
          />
          <div
            ref={sliderRef}
            className=" overflow-x-auto scrollbar-hide space-x-4 p-2 w-full"
            style={{
              scrollSnapType: "x mandatory",
              width: "100%",

              transform: "translateX(0)",
            }}
          >
            <div className="flex lg:flex lg:justify-between  object-fill ">
              <img
                src={labImg1}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80 select-none mt-20 m-6  "
                alt="img"
              />
              <img
                src={labImg5}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-screen lg:h-96  m-6 select-none mt-20  "
                alt="img"
              />
              <img
                src={medImg2}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80   mt-20   m-6 select-none"
                alt="img"
              />
            </div>
          </div>
          <MdChevronRight
            onClick={scrollRight}
            className="text-blue-900 text-6xl cursor-pointer lg:hidden"
          />
        </div>
      </div>
      <div className="hidden  md:flex md:justify-evenly mt-8 md:ml-2 md:mr-2">
        {/* <div>
          <img src={equipment1} className="w-44 h-44" />
        </div> */}
        <div>
          <img
            src={equipment2}
            className=" shadow-lg border-4 p-5 border-gray-200 md:w-48 md:h-48 lg:w-64 lg:h-56"
          />
        </div>
        <div>
          <img
            src={equipment3}
            className=" shadow-lg border-4 border-gray-200 md:w-48 md:h-48 lg:w-64 lg:h-56"
          />
        </div>
        <div>
          <img
            src={equipment4}
            className=" shadow-lg border-4 border-gray-200 md:w-48 md:h-48 lg:w-64 lg:h-56"
          />
        </div>
        <div>
          <img
            src={equipment5}
            className="  shadow-lg border-4 border-gray-200 md:w-48 md:h-48 lg:w-64 lg:h-56"
          />
        </div>
        <div>
          <img
            src={equipment6}
            className=" shadow-md border-4 border-gray-200 md:w-48 md:h-48 lg:w-64 lg:h-56"
          />
        </div>
        {/* <div>
          <img src={equipment7} className="w-44 h-44" />
        </div> */}
      </div>
      <div>
        <img
          className=" mt-4 w-full h-[100vh] object-fill md:object-cover  select-none "
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

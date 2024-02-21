import React, { useRef } from "react";
import homepageImg from "../images/med-room.jpeg";
import Card from "./Card";
import labImg1 from "../images/labequipment-2.jpeg";
import medImg2 from "../images/woman-lab3.jpg";
import labImg5 from "../images/man-equipment.jpeg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import equipment2 from "../images/equipment2.jpg";
import equipment3 from "../images/equipment3.jpg";
import equipment4 from "../images/equipment4.jpg";
import equipment5 from "../images/equipment5.png";
import equipment6 from "../images/equipment6.jpg";

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
      <div className="">
        <h1 className="text-center text-4xl md:text-4xl lg:text-5xl font-bold   p-1 md:mt-16 text-blue-900">
          Welcome to JayRiderLLC
        </h1>
      </div>
      <div className="text-center md:flex md:justify-between lg:flex lg:justify-center md:text-xl ">
        {/* Mobile-friendly content */}
        <Card
          className=""
          description="We buy and sell laboratory, scientific, and medical
        equipment and merchandise!"
          button="Explore Products"
        />

        <div className="flex items-center justify-center">
          <MdChevronLeft
            onClick={scrollLeft}
            className="text-blue-900 text-6xl cursor-pointer lg:hidden mt-16"
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
            <div className="flex lg:flex lg:justify-between  object-fill  ">
              <img
                src={labImg1}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80 select-none mt-8 md:mt-16 m-6  "
                alt="img"
              />
              <img
                src={labImg5}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-screen lg:h-96  m-6 select-none mt-8 md:mt-16  "
                alt="img"
              />
              <img
                src={medImg2}
                className=" shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80   mt-8 md:mt-16   m-6 select-none"
                alt="img"
              />
            </div>
          </div>
          <MdChevronRight
            onClick={scrollRight}
            className="text-blue-900 text-6xl cursor-pointer lg:hidden mt-16 "
          />
        </div>
      </div>
      <div className="hidden  md:flex md:justify-evenly lg:mt-7 lg:mb-14 ">
        {/* <div>
          <img src={equipment1} className="w-44 h-44" />
        </div> */}
        <div>
          <img
            src={equipment2}
            className=" shadow-lg border-4  border-gray-200  md:w-36 md:h-36 lg:w-48 lg:h-48    transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 "
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment3}
            className=" shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 "
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment4}
            className=" shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150"
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment5}
            className="  shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 "
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment6}
            className=" shadow-md border-4 border-gray-200  md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-150 "
            alt="img"
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

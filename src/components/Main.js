import React, { useRef } from "react";
import homepageImg from "../images/med-room.jpeg";
import Card from "./Card";
import medImg1 from "../images/modern-healthcare.jpg";
import labImg1 from "../images/labequipment-2.jpeg";
import labImg2 from "../images/centrifuge-machine.jpeg";
import medImg2 from "../images/woman-lab3.jpg";
import medImg3 from "../images/robotarm-lab-istock.jpeg";
import labImg3 from "../images/woman-lab2.jpg";
import labImg4 from "../images/lab-people.jpeg";
import labImg5 from "../images/man-equipment.jpeg";
import labImg6 from "../images/researcher-putting-test-tube-into-laboratory-centrifuge.jpg";
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

      <div className="text-center md:flex md:justify-between md:text-xl ">
        {/* Mobile-friendly content */}
        <Card
          className=""
          description="We buy, sell, and transport laboratory, scientific, and medical
        equipment!"
          button="Explore Products"
        />

        <div className="flex items-center justify-center ">
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
                className="rotate-45 shadow-md border-4 border-gray-100 w-72 h-60  select-none mt-20 ml-12   "
                alt="img"
              />
              <img
                src={medImg2}
                className="rotate-45 shadow-md border-4 border-gray-100 w-72 h-60   mt-20 ml-12     select-none"
                alt="img"
              />
              <img
                src={labImg5}
                className="rotate-45 shadow-md border-4 border-gray-100 w-72 h-60  select-none mt-20 ml-12  "
                alt="img"
              />
              <img
                src={labImg6}
                className="rotate-45 shadow-md border-4 border-gray-100 w-72 h-60  select-none m-24 ml-16  "
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
      <div>
        <img
          className=" mt-4 w-full h-[100vh] object-cover  select-none "
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

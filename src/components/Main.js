import React, { useRef, useState, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    smoothscroll.polyfill();

    const updateMaxScroll = () => {
      if (sliderRef.current) {
        const totalScrollWidth = Array.from(
          sliderRef.current.children[0].children
        ).reduce((totalWidth, img) => {
          return (
            totalWidth +
            img.offsetWidth +
            parseInt(window.getComputedStyle(img).marginRight)
          );
        }, 0);
        const visibleWidth = sliderRef.current.clientWidth;
        const maxScrollValue = totalScrollWidth - visibleWidth;
        setMaxScroll(maxScrollValue);
      }
    };

    updateMaxScroll();

    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
      setScrollPosition(0);
    }
  }, []);
  const smoothScroll = (element, start, end, duration) => {
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newPos = start + (end - start) * progress;

      element.scrollLeft = newPos;

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const newScrollPosition = Math.max(
        scrollPosition - sliderRef.current.clientWidth / 2,
        0
      );
      smoothScroll(sliderRef.current, scrollPosition, newScrollPosition, 250); // Adjust duration as needed
      setScrollPosition(newScrollPosition);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const newScrollPosition = Math.min(
        scrollPosition + sliderRef.current.clientWidth / 2,
        maxScroll
      );
      smoothScroll(sliderRef.current, scrollPosition, newScrollPosition, 250); // Adjust duration as needed
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const newScrollLeft = sliderRef.current.scrollLeft;
      setScrollPosition(newScrollLeft);
      console.log("Current Scroll Position:", newScrollLeft);
    }
  };

  return (
    <>
      <div>
        <h1 className="main-header text-center text-4xl  lg:text-5xl font-bold   p-1 md:mt-16 text-blue-900">
          Welcome to JayRiderLLC
        </h1>
      </div>
      <div className="text-center md:flex md:justify-center lg:flex lg:justify-center md:text-xl">
        <div className="flex items-center">
          <MdChevronLeft
            onClick={scrollLeft}
            className={`text-blue-900 text-6xl cursor-pointer custom-lg-arrows:hidden lg:hidden mt-16 ${
              scrollPosition === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={scrollPosition === 0}
            aria-hidden={scrollPosition === 0}
          />
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide space-x-4 p-2 w-full"
            style={{
              scrollSnapType: "x mandatory",
              display: "flex",
              // width: "100%",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "-ms-autohiding-scrollbar",
              scrollBehavior: "smooth",
            }}
          >
            <div className="flex custom-lg-arrows:flex custom-lg-arrows:justify-center custom-lg-arrows:gap-x-4 custom-lg-arrows:mr-2 custom-lg-arrows:ml-2 xl:flex xl:gap-x-20">
              <img
                src={labImg1}
                className="shadow-md border-4 border-gray-100 w-72 h-72  lg:w-80 lg:h-80 xl:w-96 select-none mr-2 mt-8 md:mt-16 lg:ml-4 "
                alt="img"
              />
              <img
                src={labImg5}
                className="shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80 xl:w-96 select-none m-2 mt-8 md:mt-16 "
                alt="img"
              />
              <img
                src={medImg2}
                className="shadow-md border-4 border-gray-100 w-72 h-72 lg:w-80 lg:h-80 xl:w-96 m-2 mt-8 md:mt-16 lg:mr-6  select-none"
                alt="img"
              />
            </div>
          </div>
          <MdChevronRight
            onClick={scrollRight}
            className={`text-blue-900 text-6xl cursor-pointer custom-lg-arrows:hidden lg:hidden mt-16 ${
              scrollPosition >= maxScroll ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={scrollPosition >= maxScroll}
            aria-hidden={scrollPosition >= maxScroll}
          />
        </div>
      </div>
      <div className="hidden  md:flex md:justify-evenly lg:mt-7 lg:mb-14 ">
        <div>
          <img
            src={equipment2}
            className=" shadow-lg border-4  border-gray-200  md:w-36 md:h-36 lg:w-48 lg:h-48    transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-[1.3] "
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment3}
            className=" shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-[1.3] "
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment4}
            className=" shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-[1.3]"
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment5}
            className="  shadow-lg border-4 border-gray-200 md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-[1.3]"
            alt="img"
          />
        </div>
        <div>
          <img
            src={equipment6}
            className=" shadow-md border-4 border-gray-200  md:w-36 md:h-36 lg:w-48 lg:h-48 transform transition duration-300 ease-out hover:scale-[1.15] lg:hover:scale-[1.17] lg:hover:duration-500 lg:hover:delay-150 xl:hover:scale-[1.3]"
            alt="img"
          />
        </div>
      </div>

      <div>
        <img
          className=" homepage-img mt-4 w-[100vw] h-[100vh] object-fit md:object-cover  select-none lg:p-2 "
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

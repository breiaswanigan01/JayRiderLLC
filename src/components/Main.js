import React from "react";
import homepageImg from "../images/robotarm-lab-istock.jpeg";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-5  mb-8 md:mb-5 p-1 text-blue-900">
        Welcome to JayRider Equipment and Transportation
      </h1>

      <div className="text-center md:relative md:flex md:justify-between md:text-xl ">
        {/* Mobile-friendly content */}
        <Card
          className=""
          description="We buy, sell, and transport laboratory, scientific, and medical
        equipment!"
          button="Explore Products"
        />

        {/* <div> */}
        <img
          className=" mt-4 w-full h-[75vh] object-cover  md:w-[50%] md:h-[100vh]  "
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

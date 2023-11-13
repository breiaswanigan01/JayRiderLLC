import React from "react";
import homepageImg from '../images/robotarm-lab-istock.jpeg'

const Main = () => {
  return (
    <>
      <div className="md:flex">
<p className=" text-blue-900 pt-3 pb-3">We buy, sell, and transport laboratory, scientific, and medical equipment!</p>
        <img
          className="w-full h-full object-cover pb-2"
          src={homepageImg}
          alt="homepage-img"
        />
      </div>
    </>
  );
};

export default Main;

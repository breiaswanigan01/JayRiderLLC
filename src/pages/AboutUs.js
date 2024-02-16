import React from "react";
import Footer from "../components/Footer";

export const AboutUs = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className="pb-4 font-extrabold text-4xl lg:text-5xl border-b-4 border-blue-900 inline-block">
          About Us
        </h1>
      </div>
      <div className="text-center mb-28 bg-white mt-10 leading-7 text-md md:text-lg rounded-lg m-8 p-4 shadow-lg md:shadow-2xl">
        <p>
          Welcome to JayRider Equipment and Transportation, your trusted partner
          for all of your laboratory, medical, and scientific equipment needs.
          <br />
          At JayRider, we specialize in buying and selling a wide
          range of cutting-edge equipment and merchandise to meet the diverse requirements of
          the scientific and medical communities
        </p>
        <br />
        <p>
          We take pride in our commitment to delivering high-quality equipment
          that meets and exceeds industry standards. 
        </p>
        <br />
        <p>
          <div className="inline-block">
            <h2 className=" mb-6 text-2xl border-b-4 border-blue-900 ">
              Our Mission
            </h2>
          </div>
          <br />
          Our mission is simple yet profound: to be the preferred partner for
          laboratories, medical facilities, and research institutions seeking
          reliable and state-of-the-art equipment and merchandise. We are driven by a set of
          core values that include integrity, innovation, and customer
          satisfaction.
        </p>
        <br />
        <p>Commercial and industrial thoughout the Midwest</p>
        <br />
        <p>
          Can be serviced all throughout the United States or other parts of the
          Country
        </p>
      </div>
    </>
  );
};

export default AboutUs;

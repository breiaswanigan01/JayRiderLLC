import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2-bg.png";
import truckImg from "../images/truck-img.jpeg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const closeNav = () => {
    setShowNav(false);
  };
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl  text-center pt-3 xl:pt-4 text-blue-900 font-bold drop-shadow-md">
          JayRider Transportation LLC
        </h2>
      </div>
      {/* // md screen and bigger nav bar */}

      <div className="relative">
        <div className=" p-1.5 mb-8 shadow-sm">
          <div className=" flex justify-between">
            <Link to="/">
              <img src={logo} className="w-48 md:w-  " alt="Logo" />
            </Link>
            <div className="whitespace-nowrap text-center  text-blue-900 font-bold">
              <div className=" text-right md:text-center mt-9    ">
                <p className=" text-xl md:text-2xl  ">Buy & Sell </p>
                <p className="text-xl md:text-2xl  ">
                  Medical - Laboratory - Scientific{" "}
                </p>
              </div>
            </div>
            {/* navbar truck img */}
            {/* <div className="mt-1 ">
              <img
                src={truckImg}
                className=" w-56 md:mt-5   rounded-lg "
                alt="Truck"
              />
            </div> */}
          </div>

          {/*  smaller screen nav bar  */}

          <div className="text-right font-bold">
            <div className="hidden md:block">
              <div className="nav-links text-bold flex justify-end text-md md:text-lg  lg:flex lg:justify-between lg:text-xl relative z-20">
                <Link to="/" className="p-1.5 font-extrabold text-blue-900 ">
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  className="p-1.5 font-extrabold text-blue-900"
                >
                  About
                </Link>
                <Link
                  to="/products"
                  className="p-1.5 font-extrabold text-blue-900"
                >
                  Products
                </Link>
                <Link
                  to="/sellproducts"
                  className="p-1.5 font-extrabold  text-blue-900"
                >
                  Sell Products
                </Link>
                <Link
                  to="/contactus"
                  className="p-1.5 font-extrabold text-blue-900"
                >
                  Contact
                </Link>
                <Link
                  to="/checkout"
                  className="p-1.5 font-extrabold text-blue-900"
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#1e3a8a" }}
                  />
                </Link>
              </div>
            </div>

            <div className=" md:hidden relative z-20 text-blue-900 ">
              <button onClick={toggleNav}>
                <FontAwesomeIcon
                  icon={showNav ? faBars : faBars}
                  className="text-3xl p-1.5  "
                />
              </button>

              <div
                className={`bg-blue-600 fixed top-0 right-0 h-full w-64 p-3 transition-all duration-300 ${
                  showNav
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <div className=" flex flex-col space-y-4 items-end">
                  <button onClick={toggleNav}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-3xl text-black"
                    />
                  </button>
                  {/* nav links */}
                  <Link to="/" onClick={closeNav} className="text-black">
                    Home
                  </Link>
                  <Link to="/aboutus" onClick={closeNav} className="text-black">
                    About Us
                  </Link>
                  <Link
                    to="/products"
                    onClick={closeNav}
                    className="text-black"
                  >
                    Products
                  </Link>
                  <Link
                    to="/sellproducts"
                    onClick={closeNav}
                    className="text-black"
                  >
                    Sell Products
                  </Link>

                  <Link
                    to="/contactus"
                    onClick={closeNav}
                    className="text-black"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={closeNav}
                    className="text-black"
                  >
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#000" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2-bg.png";
import truckImg from "../images/trucks-removebg-preview.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const closeNav = () => {
    setShowNav(false);
  };
  return (
    // logo
    <>
    {/* flex justify-between p-1.5 mb-8 shadow-md */}
      {/* // md screen and bigger nav bar */}

      <div className="flex justify-between p-1.5 mb-8 shadow-md">
        <Link to="/">
          <img src={logo} className="bg-gray-100 w-24 lg:w-44" />{" "}
        </Link>
        <div className="text-center">
          <div className="">
          <img src={truckImg} className="w-24 "/>
          </div>
        <p className="">Buy - Sell - Transport</p>
        <p>Medical - Laboratory - Scientific</p>
        </div>
        <div className="text-right ">
          <div className="hidden md:block">
            <div className="nav-links flex justify-between text-lg ">
              <Link to="/" className="p-1.5 font-extrabold text-blue-900">
                Home
              </Link>
              <Link
                to="/aboutus"
                className="p-1.5 font-extrabold text-blue-900"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="p-1.5 font-extrabold text-blue-900"
              >
                Products
              </Link>
              <Link
                to="/sellproducts"
                className="p-1.5 font-extrabold text-blue-900"
              >
                Sell Products
              </Link>
              <Link
                to="/contactus"
                className="p-1.5 font-extrabold text-blue-900"
              >
                Contact Us
              </Link>
              <Link
                to="/checkout"
                className="p-1.5 font-extrabold text-blue-900"
              >
                Checkout
              </Link>
            </div>
          </div>
          {/*  smaller screen nav bar  */}
   
          <div className=" md:hidden relative ">
            <button onClick={toggleNav}>
              <FontAwesomeIcon
                icon={showNav ? faBars : faBars}
                className="text-3xl p-1.5"
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
                <Link to="/" onClick={closeNav}>
                  Home
                </Link>
                <Link to="/aboutus" onClick={closeNav}>
                  About Us
                </Link>
                <Link to="/products" onClick={closeNav}>
                  Products
                </Link>
                <Link to="/sellproducts" onClick={closeNav}>
                  Sell Products
                </Link>
                <Link to="/checkout" onClick={closeNav}>
                  Checkout
                </Link>
                <Link to="/contactus" onClick={closeNav}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

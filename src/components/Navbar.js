import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    // md screen and bigger nav bar
    <div className="flex justify-between p-1.5" >
      {" "}
      (Logo will be inserted)
      <div className="text-right">
        <div className="hidden md:block">
          <div className="nav-links flex justify-between text-lg ">
    
            <Link to="/" className="p-1.5">
              Home
            </Link>
            <Link to="/aboutus" className="p-1.5">About Us</Link>
            <Link to="/products" className="p-1.5">Products</Link>
            <Link to="/sellproducts" className="p-1.5">Sell Products</Link>
            <Link to="/contactus" className="p-1.5">Contact Us</Link>
            <Link to="/checkout" className="p-1.5">Checkout</Link>

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
          {/* blurred background on click */}
          {showNav && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50"
              onClick={toggleNav}
            ></div>
          )}
          <div
            className={`bg-blue-600 fixed top-0 right-0 h-full w-64 p-3 transition-all duration-300 ${
              showNav ? "transform translate-x-0" : "transform translate-x-full"
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
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/sellproducts">Sell Products</Link>
              <Link to="/checkout">Checkout</Link>
              <Link to="/contactus">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

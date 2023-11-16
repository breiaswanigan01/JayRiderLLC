// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Copyright from "./Copyright";
import discover from "../svgs/discover.svg";
import visaSvg from "../svgs/visa.svg";
import amex from "../svgs/amex.svg";
import masterCard from "../svgs/mastercard.svg";
import logo from "../images/logo2-bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="  text-black p-6   pt-96 ">
      <div className="lg:flex ">
        <div className="mb-8">
          {/* display logo again */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-32 md:w-36 lg:w-44" />
          </Link>
          {/* <h1 className="text-3xl ">Contact</h1> */}
          <p className="  text-gray-400 text-sm">
            Have any questions or inquries?
          </p>
          <p className="text-lg">
            {" "}
            Please give us a call at{" "}
            <a href="tel:+2488620663" className="underline text-blue-400  ">
              248-862-0663
            </a>
          </p>
        </div>
        <div>
          <div className="text-4xl font-semibold mb-4 md:flex"> </div>
          <h1 className=" text-3xl pb-2 text-blue-900">Quick Links</h1>
          {/* <div className=""> */}
          <ul className="md:flex lg:grid ">
            <li className="   hover:bg-gray-400 md:hover:bg-gray-200 lg:hover:bg-gray-400">
              <a href="/" className=" md:mr-3">
                Home
              </a>
            </li>
            <li className="hover:bg-gray-400 md:hover:bg-gray-200 lg:hover:bg-gray-400">
              <a href="/aboutus" className=" md:mr-3">
                About Us
              </a>
            </li>
            <li className="hover:bg-gray-400 md:hover:bg-gray-200 lg:hover:bg-gray-400">
              <a href="/products" className=" md:mr-3">
                Products
              </a>
            </li>
            <li className="hover:bg-gray-400 md:hover:bg-gray-200 lg:hover:bg-gray-400">
              <a href="/sellproducts" className=" md:mr-3">
                Sell Your Equipment
              </a>
            </li>
            <li className="hover:bg-gray-400 md:hover:bg-gray-200 lg:hover:bg-gray-400">
              <a href="/contactus" className=" md:mr-3">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:flex lg:place-content-end  ">
        <div className="mt-8 flex lg:place-content-end cursor-pointer ">
       <Link to="/checkout" >
        <img
            src={discover}
            alt="discovercard"
            className="w-14 h-14 opacity-50 hover:opacity-100"
          /> 
</Link>
          <img
            src={visaSvg}
            className="w-14 h-14 opacity-50 hover:opacity-100"
          />
          <img
            src={amex}
            alt="americanexpress"
            className="w-14 h-14  opacity-50 hover:opacity-100"
          />
          <img
            src={masterCard}
            alt="mastercard"
            className="w-14 h-14  opacity-50 hover:opacity-100"
          />
        </div>
      </div>
      {/* </div> */}
      <div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

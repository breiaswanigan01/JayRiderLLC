import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Copyright from "./Copyright";
import discover from "../svgs/discover.svg";
import visaSvg from "../svgs/visa.svg";
import amex from "../svgs/amex.svg";
import masterCard from "../svgs/mastercard.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100  text-black p-6 ">
      <div className="md:flex md:justify-between">
        <div className="mb-8">
          {/* display logo again */}
          <h1>*LOGO INSERT*</h1>
          <h1 className="text-3xl mt-8">Contact</h1>
          <p className="  text-gray-600 text-md">
            Have any questions or inquries?
          </p>
          <p>
            {" "}
            Please give us a call at{" "}
            <a href="tel:+2488620663" className="underline text-blue-400 ">
              248-862-0663
            </a>
          </p>
        </div>
        <div>
          <div className="text-4xl font-semibold mb-4 md:flex"> </div>
          <h1 className=" text-3xl pb-2">Quick Links</h1>
          {/* <div className=""> */}
          <ul className=" ">
            <li className="   hover:bg-gray-400">
              <a href="/" className="">
                Home
              </a>
            </li>
            <li className="hover:bg-gray-400">
              <a href="/aboutus">About Us</a>
            </li>
            <li className="hover:bg-gray-400">
              <a href="/products">Products</a>
            </li>
            <li className="hover:bg-gray-400">
              <a href="/sellproducts">Sell Your Equipment</a>
            </li>
            <li className="hover:bg-gray-400 ">
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="  ">
          <div className="mt-5 flex place-content-end cursor-pointer md:">
            <img
              src={discover}
              alt="discovercard"
              className="w-14 h-14 opacity-50 hover:opacity-100"
            />

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
      </div>
      <div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

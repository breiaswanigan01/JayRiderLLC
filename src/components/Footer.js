// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Copyright from "./Copyright";
import discover from "../svgs/discover.svg";
import visaSvg from "../svgs/visa.svg";
import amex from "../svgs/amex.svg";
import masterCard from "../svgs/mastercard.svg";
import paypal from "../svgs/paypal.png";
import logo from "../images/logo2-bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // so that when the links are clicked, the page goes to the top. 
    const scrollToTop = (event) => {
      event.preventDefault(); 
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  return (
    <footer className="  text-black p-6 mt-64 ">
      <div className="  md:flex md:justify-between md:m-4  ">
        <div className="">
          <div className="mb-8 m-2 ">
            {/* display logo again */}
            <Link to="/">
              <img src={logo} alt="logo" className="w-40 md:w-48 lg:w-56" onClick={scrollToTop}/>
            </Link>
          </div>
        </div>
        <div className="lg:mr-40">
          <div className="text-4xl font-semibold mb-4  "> </div>
          <h1 className=" text-3xl md:text-4xl  pb-2 mb-2 text-blue-900">
            Quick Links
          </h1>
          <div className="font-bold md:whitespace-nowrap lg:grid md:justify-between md:text-xl  ">
          
                <Link to="/" className="  md:mr-3" onClick={scrollToTop}>
                  Home
                </Link>
            
                <Link to="/aboutus" className=" md:mr-3" onClick={scrollToTop}>
                  About Us
                </Link>
            
                <Link to="/products" className=" md:mr-3" onClick={scrollToTop}>
                  Products
                </Link>
       
                <Link to="/sellproducts" className=" md:mr-3" onClick={scrollToTop}>
                  Sell Your Products
                </Link>
          
                <Link to="/contactus" className=" md:mr-3" onClick={scrollToTop}>
                  Contact Us
                </Link>
         
         
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between mt-10">
        <div>
          <p className="  text-gray-400 text-sm">
            Have any questions or inquries?
          </p>
          <p className="text-lg lg:text-2xl">
            {" "}
            Please give us a call at{" "}
            <a href="tel:+8552521701" className="underline text-blue-400  ">
              855-252-1701
            </a>
          </p>
        </div>

        <div className="  ">
          <div className="flex lg:place-content-end cursor-pointer ">
            <Link to="/checkout">
              <img
                src={discover}
                alt="discovercard"
                className="w-14 h-14 opacity-60 hover:opacity-100"
              />
            </Link>
            <Link to="/checkout">
              <img
                src={visaSvg}
                alt="visa svg"
                className="w-14 h-14 opacity-60 hover:opacity-100"
              />
            </Link>
            <Link to="/checkout">
              <img
                src={paypal}
                alt="paypal"
                className="mt-2 w-9 h-9  opacity-60 hover:opacity-100"
              />
            </Link>
            <Link to="/checkout">
              <img
                src={amex}
                alt="americanexpress"
                className="w-14 h-14  opacity-60 hover:opacity-100"
              />
            </Link>
            <Link to="/checkout">
              <img
                src={masterCard}
                alt="mastercard"
                className="w-14 h-14  opacity-60 hover:opacity-100"
              />
            </Link>
          </div>
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

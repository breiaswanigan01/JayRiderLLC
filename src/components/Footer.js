import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white p-6 grid grid-cols-1 ">
      {/* display logo again */}

<h1 className="text-2xl">Contact</h1>
      <p className="  text-gray-600 text-md">
 Have any questions or inquries?
      </p>
      <p>
        {" "}
        Please give us a call at{" "}
        <a href="tel:+2488620663" className="underline text-blue-400">
          248-862-0663
        </a>
      </p>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-4xl font-semibold mb-4"> </div>
          <h1 className=" text-2xl pb-2">Quick Links</h1>
          <ul>
            <li className="hover:bg-gray-400">
              <a href="/">Home</a>
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
        {/* 
        <div>
          <h3 className="text-lg font-semibold mb-4">Accepted Payments</h3>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faCreditCard} />
            <FontAwesomeIcon icon={faCreditCard} />
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

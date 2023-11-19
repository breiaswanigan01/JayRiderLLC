import React from "react";

const Card = ({ description, button }) => {
  return (
    <div className=" lg:ml-2 hidden  lg:rounded lg:overflow-hidden lg:shadow-2xl  md:h-full   lg:mb-6 md:bg-white ">
      <div className="lg:px-1  lg:py-10 lg:grid  lg:text-center lg:pr-">
        <p className="text-gray-700 p-1 lg:text-2xl lg:pb-10">{description}</p>
        <button>
          <a
            href="/products"
            className="whitespace-nowrap bg-blue-800 text-white lg:py-2  lg:p-2 rounded-full mb-4  hover:bg-blue-600 transition "
          >
            {button}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;

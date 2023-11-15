import React from "react";

const Card = ({ description, button }) => {
  return (
    <div className="md:relative  md:rounded md:overflow-hidden md:shadow-2xl  md:h-full md:top-56 md:left-20  md:bg-white ">
      <div className="px-3   md:py-20  md:grid  md:text-left lg:pr-20">
        <p className="text-gray-700 text-lg md:text-xl pb-5 p-1 lg:text-2xl md:pb-10">
          {description}
        </p>
        <button>
          <a
            href="/products"
            className=" bg-blue-500 text-white py-2 px-4  rounded-full mb-4  hover:bg-blue-600 transition "
          >
            {button}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;

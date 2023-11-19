import React from "react";

const Products = () => {
  return (
    <>
      <div className="text-center ">
        <h1 className="pb-4 font-extrabold text-4xl lg:text-5xl border-b-4 border-blue-900 inline-block">
          Products
        </h1>
      </div>
      <div className=" grid content-center text-center mb-28 h-[100vh] bg-white mt-10 leading-7 text-md md:text-lg rounded-lg m-8 p-4 shadow-lg md:shadow-2xl">
        <h2 className="md:whitespace-nowrap font-bold text-lg md:text-2xl lg:text-3xl">
          There are no Products available right now. Check back later!
        </h2>
      </div>
    </>
  );
};

export default Products;

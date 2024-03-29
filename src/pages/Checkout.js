import React from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  
  return (
    <div>
      <>
        <div className="text-center">
          <h1 className="mb-4 text-center text-2xl">Your Cart</h1>
        </div>
        <div className="grid place-content-center mt-36">
          <div className="flex justify-center text-xl">
            <Link to="/products">
              <button className="text-center rounded-xl lg:ml-8 text-white bg-blue-900 p-3 hover:bg-blue-600">
                Explore More Products
              </button>
            </Link>
          </div>
          <div className="">
            <p className="checkout-text text-xl mt-10 ">
              There are no items in your shopping cart.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Checkout;

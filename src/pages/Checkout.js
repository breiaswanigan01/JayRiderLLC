import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, []);
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
            <p className="text-xl mt-10 ">
              There are no items in your shopping cart.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Checkout;

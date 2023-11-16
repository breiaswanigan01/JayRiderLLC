import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright py-4 text-sm md:text-center mt-5 md:mt-9">
      <p>
        {" "}
        Copyright &copy;{currentYear} JayRider Equipment LLC. All rights
        reserved.
      </p>
    </div>
  );
};

export default Copyright;

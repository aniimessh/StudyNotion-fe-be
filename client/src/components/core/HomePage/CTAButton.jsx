import React from "react";
import { Link } from "react-router-dom";

export const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] px-6 py-3 rounded-md 
      ${active ? " bg-yellow-50 text-black " : " bg-richblack-300"}
      hover:scale-95 transition-all duration-200 shadow-[1px_1px_0px_0px_#1a202c] `}
      >
        {children}
      </div>
    </Link>
  );
};

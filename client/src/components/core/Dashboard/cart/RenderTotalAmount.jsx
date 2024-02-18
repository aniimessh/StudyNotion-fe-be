import React from "react";
import IconButton from "../../../common/IconButton";
import { useSelector } from "react-redux";

const RenderTotalAmount = () => {
  const { total } = useSelector((state) => state.cart);

  const handleBuyCouse = () => {
    // TODO: Payment API Integration
  };
  return (
    <div className="bg-richblack-700 rounded-md flex flex-col h-max p-6 mt-4 w-[282px]">
      <p className="text-sm font-inter text-richblack-300 font-semibold">Total:</p>
      <p className="font-semibold font-inter text-yellow-100 text-2xl">
        Rs. {total}
      </p>
      <button
        onclick={handleBuyCouse}
        className="text-center text-[13px] px-6 py-3 rounded-md 
        bg-yellow-50 text-black hover:scale-95 transition-all duration-200 shadow-[1px_1px_0px_0px_#1a202c] mt-2"
      >
        Buy Now
      </button>
    </div>
  );
};

export default RenderTotalAmount;

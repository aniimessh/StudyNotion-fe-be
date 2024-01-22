import React from "react";
import IconButton from "../../../common/IconButton";
import { useSelector } from "react-redux";

const RenderTotalAmount = () => {
  const { total } = useSelector((state) => state.cart);

  const handleBuyCouse = () => {
    // TODO: Payment API Integration
  };
  return (
    <div>
      <p>Total:</p>
      <p>Rs. {total}</p>
      <IconButton text="Buy Now" onclick={handleBuyCouse} cutomClasses="w-full flex justify-center" />
    </div>
  );
};

export default RenderTotalAmount;

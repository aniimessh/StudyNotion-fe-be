import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  
  return (
    <div className="w-full p-6">
      <p className="font-inter text-richblack-300 font-medium mb-4">
        Home / Dashboard / <span className="text-yellow-200">Wishlist</span>
      </p>
      <h1 className="font-inter text-3xl text-white font-medium">
        My Wishist
      </h1>
      <p className="text-richblack-400 font-semibold font-inter mt-6">{totalItems} Courses in Wishlist</p>
      <div className="w-full h-[1px] bg-richblack-400"></div>
      {total > 0 ? (
        <>
        <RenderCartCourses />
        <RenderTotalAmount />
        </>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </div>
  );
};

export default Cart;

{/* <div className="w-full p-6">
      <p className="font-inter text-richblack-300 font-medium mb-4">
        Home / Dashboard / <span className="text-yellow-200">My profile</span>
      </p>
      <h1 className="font-inter text-3xl text-white font-medium">
        My Profile
      </h1> */}

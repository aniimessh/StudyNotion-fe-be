import React from "react";
import { useSelector } from "react-redux";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((item, index) => {
        return (
          <>
            <div>
              <div>
                <img src={item?.thumbnail} alt="" />
                <div>
                  <p>{item?.courseName}</p>
                  <p>{item?.category?.name}</p>
                </div>
                <div>
                    <span>4.8</span>
                    {/* 44:33  class 8 frontend*/}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RenderCartCourses;

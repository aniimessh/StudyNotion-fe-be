import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CgTrash } from "react-icons/cg";
import { removeFromCart } from "../../../../slices/cartSlice";
import RatingStars from "../../../common/RatingStars";
import GetAvgRating from "../../../../utils/avgRating";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="">
      {cart.map((course, index) => {
        return (
          <>
            <div className=" flex w-full mt-4 gap-x-5 border-b py-4 justify-between border-richblack-700">
              <div className="flex gap-x-5">
                <img
                  src={course?.thumbnail}
                  alt=""
                  width={400}
                  className="rounded-md"
                />
                <div>
                  <div>
                    <p className="text-lg font-inter text-white">
                      {course?.courseName}
                    </p>
                    <p className="font-inter text-richblack-300">
                      {course?.category?.name}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <span className="text-yellow-50 font-semibold">
                      {GetAvgRating(course.ratingAndReview)}
                    </span>
                    <RatingStars
                      Review_Count={GetAvgRating(course.ratingAndReview)}
                    />
                    <span>{course?.ratingAndReviews?.length}</span>
                  </div>
                  <p className="font-inter text-sm text-richblack-300">
                    Total Courses • Lesson • Beginner
                  </p>
                </div>
              </div>

              <div>
                <button
                  className="flex items-center text-pink-200 bg-richblack-700 rounded-md p-3"
                  onClick={() => dispatch(removeFromCart(course._id))}
                >
                  <CgTrash />
                  Remove
                </button>
                <p className="text-xl mt-2 font-inter  font-semibold text-yellow-100">Rs. {course?.price}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RenderCartCourses;

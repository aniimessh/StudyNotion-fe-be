import React from "react";
import { FaRegClock, FaArrowRotateRight } from "react-icons/fa6";
import { MdImportantDevices } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";
import { buyCourse } from "../../../services/operations/studentPaymentAPI";
import { useNavigate } from "react-router-dom";

const CourseCheckOutCard = ({ coursePageData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const courseId = coursePageData?._id;
  const handleAddToCart = () => {
    dispatch(addToCart(coursePageData));
  };

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
    }
  };

  return (
    <div>
      <div className="bg-richblack-500 rounded-md">
        <img
          src={coursePageData?.thumbnail}
          alt=""
          width={400}
          className="rounded-md"
        />
        <div className="p-6">
          <p className="text-white font-inter text-3xl font-bold">
            Rs. {coursePageData?.price}
          </p>
          <div className="flex flex-col gap-y-2">
            <button
              className="text-center text-[13px] px-6 py-3 rounded-md 
      bg-yellow-50 text-black hover:scale-95 transition-all duration-200 shadow-[1px_1px_0px_0px_#1a202c]"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyCourse()}
              className="text-center text-[13px] px-6 py-3 rounded-md 
      bg-richblack-800 text-white hover:scale-95 transition-all duration-200 shadow-[1px_1px_0px_0px_#1a202c]"
            >
              Buy Now
            </button>
          </div>
          <p className="text-center text-sm text-richblack-300 mt-4">
            30-Day Money Back Gaurantee
          </p>
          <div className="text-white font-inter mt-3">
            This course includes:{" "}
          </div>
          <ul className="text-sm text-caribbeangreen-200 font-inter font-medium">
            <li className="flex items-center gap-1">
              <FaRegClock />8 hours on-demand video
            </li>
            <li className="flex items-center gap-1">
              <FaArrowRotateRight />
              Full Lifetime access
            </li>
            <li className="flex items-center gap-1">
              <MdImportantDevices />
              Access on Mobile and TV
            </li>
            <li className="flex items-center gap-1">
              <LiaCertificateSolid />
              Certification of completion
            </li>
          </ul>
          <button className="text-center text-yellow-100 mt-3 px-6 py-3 w-full font-medium">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCheckOutCard;

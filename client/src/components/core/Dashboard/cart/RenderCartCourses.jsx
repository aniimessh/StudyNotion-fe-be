import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { GoStar, GoStarFill } from "react-icons/go";
import { CgTrash } from "react-icons/cg";
import { removeFromCart } from "../../../../slices/cartSlice";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      {cart.map((course, index) => {
        return (
          <>
            <div>
              <div>
                <img src={course?.thumbnail} alt="" />
                <div>
                  <p>{course?.courseName}</p>
                  <p>{course?.category?.name}</p>
                </div>
                <div>
                  <span>4.8</span>
                  <ReactStars
                    count={5}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<GoStar />}
                    fullIcon={<GoStarFill />}
                  />
                  <span>{course?.ratingAndReviews?.length}</span>
                </div>
              </div>

              <div>
                <button
                  className="flex items-center"
                  onClick={dispatch(removeFromCart(course._id))}
                >
                  <CgTrash />
                  Remove
                </button>
                <p>Rs. {course?.price}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RenderCartCourses;

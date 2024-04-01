import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("courseExperience", "");
    setValue("courseRating", 0);
  }, []);

  const onSubmit = () => {};

  const ratingChange = () => {};
  return (
    <div>
      <div>
        <div>
          <p>Add Review</p>
          <button onClick={setReviewModal(false)}>
            <IoMdClose />
          </button>
        </div>
        <div>
          <div>
            <img
              src={user?.image}
              alt="user-image"
              className="aspect-square rounded-full w-[50px] object-cover"
            />
            <div>
              <p>
                {user?.firstName}
                {user?.lastName}
              </p>
              <p>Posting Publicy</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col"
          >
            <ReactStars
            count={5}
            onChange={ratingChange}
            size={24}
            activeColor="#ffd700"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewModal;

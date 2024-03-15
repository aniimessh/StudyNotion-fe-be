import React from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
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
                <img src={user?.image} alt="" />
            {/* 1:12:00 */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewModal;

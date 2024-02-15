import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAvgRating from "../../../utils/avgRating";
import RatingStars from "../../common/RatingStars";

const CardCourse = ({ course, height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReview);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <div>
      <Link to={`/course/${course._id}`}>
        <div>
          <div>
            <img
              src={course?.thumbnail}
              alt={`Course Thumbnail`}
              className={`${height ? `${height}` : "h-[400px]"} w-full rounded-md object-cover`}
            />
          </div>
          <div className="mt-2">
            <p className="text-white font-inter text-base">{course?.courseName}</p>
            <p className="text-richblack-300 font-inter text-base">
              Created By {course?.instructor?.firstName}{" "}
              {course?.instructor?.lastName}
            </p>
            <div className="flex gap-x-2">
              <span className="text-yellow-50 font-semibold">{avgReviewCount}</span>
              <RatingStars Review_Count={avgReviewCount}/>
              <span className="text-richblack-300 font-inter text-base">{course?.ratingAndReview?.length} Ratings</span>
            </div>
            <p className="font-inter text-xl font-semibold text-white">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCourse;

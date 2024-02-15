import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAvgRating from "../../../utils/avgRating";
import RatingStars from "../../common/RatingStars";

const CardCourse = ({ course }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  console.log(course);

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
              className="h-[400px] w-full rounded-md object-cover"
            />
          </div>
          <div>
            <p>{course?.courseName}</p>
            <p>
              Created By {course?.instructor?.firstName}{" "}
              {course?.instructor?.lastName}
            </p>
            <div className="flex gap-x-4">
              <span>{avgReviewCount}</span>
              <RatingStars Review_Count={avgReviewCount}/>
              <span>{course?.ratingAndReview?.length} Ratings</span>
            </div>
            <p>Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardCourse;

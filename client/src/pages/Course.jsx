import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStars from "../components/common/RatingStars";
import { fetchCourseDetails } from "../services/operations/courseDetailAPI";
import GetAvgRating from "../utils/avgRating";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import CourseCheckOutCard from "../components/core/Course/CourseCheckOutCard";
import WhatYouWillLearn from "../components/core/Course/WhatYouWillLearn";
import CourseContentSection from "../components/core/Course/CourseContentSection";
import Footer from "../components/common/Footer";
import CourseAuthorSection from "../components/core/Course/CourseAuthorSection";

const Course = () => {
  const { courseId } = useParams();
  const [coursePageData, setCoursePageData] = useState(null);
  console.log("COURSE PAGE DATA: ", coursePageData);

  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(coursePageData?.ratingAndReview);
    setAvgReviewCount(count);
  }, [coursePageData]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetchCourseDetails(courseId);
        setCoursePageData(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourse();
  }, [courseId]);
  return (
    <div className="">
      <div className="bg-richblack-700 w-full ">
        <div className="w-8/12 mx-auto px-4 py-12 flex flex-col gap-y-3 relative">
          <p className="font-inter text-richblack-300 text-sm ">
            Home / Learning /{" "}
            <span className="text-yellow-100">
              {coursePageData?.category?.name}
            </span>
          </p>
          <p className="font-inter text-white text-3xl">
            {coursePageData?.courseName}
          </p>
          <p className="font-inter text-sm text-richblack-400">
            {coursePageData?.courseDescription}
          </p>
          <div className="flex gap-x-4">
            <p className="text-yellow-50 font-semibold">{avgReviewCount}</p>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-300 font-inter text-base">
              ({coursePageData?.ratingAndReview?.length} Ratings)
            </span>
            <span className="text-richblack-300 font-inter text-base">
              {coursePageData?.studentsEnrolled?.length} Students
            </span>
          </div>
          <p className="font-inter text-white font-normal">
            Created By {coursePageData?.instructor?.firstName}{" "}
            {coursePageData?.instructor?.lastName}
          </p>
          <div className="flex gap-x-2">
            <span className="font-inter text-white flex gap-x-1 items-center ">
              <BsInfoCircle />
              Created At{" "}
              {new Date(coursePageData?.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="flex gap-x-1 items-center font-inter text-white">
              <AiOutlineGlobal />
              English
            </span>
          </div>
          <div className="absolute top-10 right-0">
            <CourseCheckOutCard coursePageData={coursePageData} />
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <div className="border p-6 mt-3 w-1/2 border-richblack-600">
          <WhatYouWillLearn coursePageData={coursePageData} />
        </div>
        <div className="mt-4 w-1/2">
          <CourseContentSection coursePageData={coursePageData} />
        </div>
        <div className="mt-4 w-1/2">
          <CourseAuthorSection coursePageData={coursePageData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;

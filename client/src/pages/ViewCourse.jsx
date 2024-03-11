import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import Footer from "../components/common/Footer";

const ViewCourse = () => {
  const [reviewModal, setReviewModal] = useState(false);

  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [specificCourseData, setSpecificCourseData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const setSpecificCourseDetails = async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
      setSpecificCourseData(courseData);
      dispatch(setCourseSectionData(courseData?.courseDetails?.courseContent));
      dispatch(setEntireCourseData(courseData?.courseDetails));
      dispatch(setCompletedLectures(courseData?.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    };
    setSpecificCourseDetails();
  }, []);

  return (
    <div>
      <VideoDetailsSidebar
        setReviewModal={setReviewModal}
        specificCourseData={specificCourseData}
      />
      <div>
        <Outlet />
      </div>
      <Footer />
      {/* {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />} */}
    </div>
  );
};

export default ViewCourse;

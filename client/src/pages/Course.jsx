import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services/operations/courseDetailAPI";

const Course = () => {
  const { courseId } = useParams();

  useEffect(async () => {
    const res = await fetchCourseDetails(courseId);
    console.log(res);
  });
  return <div>Course Page Is Here</div>;
};

export default Course;

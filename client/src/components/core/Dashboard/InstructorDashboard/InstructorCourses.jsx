import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailAPI";
import IconButton from "../../../common/IconButton";
import InstructorCourseTable from "./InstructorCourseTable";

const InstructorCourses = () => {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const [courses, setCourses] = useState([])
  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="p-6">
      <div className="w-full flex justify-between">
        <div>
          <p className="font-inter text-richblack-300 font-medium mb-4">
            Home / Dashboard / <span className="text-yellow-200">Courses</span>
          </p>
          <h1 className="font-inter text-3xl text-white font-medium">
            My Courses
          </h1>
        </div>
        <div>
          <IconButton text="New" onclick={() => navigate("/dashboard/add-course")} />
        </div>
      </div>
      {courses && <InstructorCourseTable courses={courses} setCourses={setCourses} />}
    </div>
  );
};

export default InstructorCourses;

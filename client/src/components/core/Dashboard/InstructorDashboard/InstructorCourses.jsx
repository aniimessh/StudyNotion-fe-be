import { useNavigate } from "react-router-dom";
import IconButton from "../../../common/IconButton";
import InstructorCourseTable from "./InstructorCourseTable";

const InstructorCourses = () => {
  const navigate = useNavigate();
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
      <InstructorCourseTable />
    </div>
  );
};

export default InstructorCourses;

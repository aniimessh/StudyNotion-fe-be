import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEngrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const result = await getUserEnrolledCourses(token);
      console.log("ENROLLED COURSE RESULT => ", result);
      setEngrolledCourses(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div>
      <div className="text-white">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div>Loading</div>
      ) : !enrolledCourses.length ? (
        <p className="text-white">Please enroll in Course</p>
      ) : (
        <div>
          <div>
            <p>Course Name</p>
            <p>Duration</p>
            <p>Progress</p>
          </div>
          {enrolledCourses.map((courses, index) => {
            return (
              <div>
                <div>
                  <img src={courses.thumbnail} alt="" />
                  <div>
                    <p>{courses.Coursename}</p>
                    <p>{courses.courseDescription}</p>
                  </div>
                </div>
                <div>{courses?.totalDuration}</div>
                <div>
                  <p>Progress: {courses?.progressPercentage || 0}%</p>
                  <ProgressBar
                    completed={courses?.progressPercentage || 0}
                    height="8px"
                    isLabelVisible={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;

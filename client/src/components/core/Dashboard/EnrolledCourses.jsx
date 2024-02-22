import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const Tabs = ["All", "Pending", "Completed"];

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEngrolledCourses] = useState(null);
  const [currentTab, setCurrentTab] = useState(Tabs[0]);

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

  const setMyCard = (value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <div className="w-full p-6">
        <p className="font-inter text-richblack-300 font-medium mb-4">
          Home / Dashboard /{" "}
          <span className="text-yellow-200">Enrolled Course</span>
        </p>
        <h1 className="font-inter text-3xl text-white font-medium">
          Enrolled Course
        </h1>

        <div className="flex gap-5 rounded-full bg-richblack-700 p-2 mt-4 w-max ">
          {Tabs.map((item, index) => {
            return (
              <div
                className={`flex items-center gap-5 ${
                  currentTab === item
                    ? " bg-richblack-900 text-richblack-5 "
                    : "bg-transparent text-richblack-300 "
                } rounded-full px-4 py-1 transition-all duration-200 cursor-pointer`}
                key={index}
                onClick={() => setMyCard(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          {!enrolledCourses ? (
            <div>Loading</div>
          ) : !enrolledCourses.length ? (
            <p className="text-white">Please enroll in Course</p>
          ) : (
            <table className="w-1/2">
              <tbody className="bg-richblack-700 p-4 rounded-lg ">
                <th className="p-4 rounded-tl-lg">
                  <td className="text-richblack-300  text-sm font-inter">
                    Course Name
                  </td>
                </th>
                <th className="p-4">
                  <td className="text-richblack-300  text-sm font-inter">
                    Durations
                  </td>
                </th>
                <th className="p-4 rounded-tr-lg">
                  <td className="text-richblack-300  text-sm font-inter">
                    Progress
                  </td>
                </th>
              </tbody>
              {enrolledCourses.map((course, index) => {
                return (
                  <tr
                    className="outline-1 outline outline-richblack-700"
                    key={index}
                  >
                    <td>
                      <Link className="flex items-center p-2 gap-x-3">
                        <img
                          src={course.thumbnail}
                          alt=""
                          srcset=""
                          className="object-cover rounded-lg w-[50px] h-[50px]"
                        />
                        <div>
                          <p className="text-white font-inter font-semibold">
                            {course.courseName}
                          </p>
                          <p className="text-richblack-300 font-inter">
                            {course.courseDescription}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td className="text-richblack-300 font-inter ">
                      2hr 30min
                    </td>
                    <td className="p-2">
                      <ProgressBar
                        completed={course?.progressPercentage || 0}
                        height="8px"
                        isLabelVisible={false}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default EnrolledCourses;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailAPI";
import { FaRegClock } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi2";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InstructorCourseTable = () => {
  const { token } = useSelector((state) => state.auth);
  const [instructorCourse, setInstructorCourse] = useState([]);
  const navigate = useNavigate();
  const getInstructorCourse = async () => {
    try {
      const courses = await fetchInstructorCourses(token);
      setInstructorCourse(courses);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getInstructorCourse();
  }, []);
  return (
    <div className=" border rounded-lg border-richblack-500 mt-6">
      <table className="w-full">
        <th className="p-4 text-richblack-300 font-inter text-sm font-medium border-b border-richblack-500">
          <td>COURSES</td>
        </th>
        <th className="p-4 text-richblack-300 font-inter text-sm font-medium border-b border-richblack-500 ">
          <td>DURATION</td>
        </th>
        <th className="p-4 text-richblack-300 font-inter text-sm font-medium border-b border-richblack-500">
          <td>PRICE</td>
        </th>
        <th className="p-4 text-richblack-300 font-inter text-sm font-medium border-b border-richblack-500">
          <td>ACTION</td>
        </th>
        {instructorCourse.length > 0 ? (
          <>
            {instructorCourse.map((course, index) => {
              return (
                <>
                  <tr key={index}>
                    <td className="flex gap-x-6 p-4">
                      <img
                        src={course?.thumbnail}
                        alt={course?.thumbnail}
                        width="221px"
                        className="rounded-lg"
                      />
                      <div className="flex flex-col justify-between">
                        <p className="text-richblack-5 font-inter text-xl font-semibold">
                          {course?.courseName}
                        </p>
                        <p className="text-richblack-300 font-inter text-sm font-normal">
                          {course?.courseDescription}
                        </p>
                        <p className="text-richblack-100 font-inter text-sm font-normal">
                          Created at {course?.createdAt}
                        </p>
                        {course?.status === "Draft" && (
                          <p className="text-pink-100 bg-pink-400 w-max rounded-full px-2 py-1 font-inter font-medium text-xs flex gap-x-1  items-center">
                            <FaRegClock />
                            {course?.status}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-6 text-richblack-300 font-medium font-inter">
                      20h 10m
                    </td>
                    <td className="text-richblack-300  font-inter p-6 font-medium">
                      ₹{course?.price}
                    </td>
                    <td className="w-max p-6">
                      <div className="flex gap-x-2">
                        <button>
                          <HiPencil className="text-richblack-300 w-max" />
                        </button>
                        <button
                          onClick={() =>
                            deleteCourse({ courseId: course._id }, token)
                          }
                        >
                          <FaTrashAlt className="text-richblack-300 w-max" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </>
        ) : (
          <>
            <tr className="">
              <td className="p-6 text-richblack-400 col-span-4 font-bold text-lg uppercase">
                You haven't created any course yet.....
              </td>
            </tr>
          </>
        )}
      </table>
    </div>
  );
};

export default InstructorCourseTable;

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
import ConfirmModal from "../../../common/ConfirmModal";
import { setCourse } from "../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../utils/constants";
import { FaCircleCheck } from "react-icons/fa6";

const InstructorCourseTable = ({ courses, setCourses }) => {
  console.log(courses);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

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
        {courses.length > 0 ? (
          <>
            {courses.map((course, index) => {
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
                          Created at {new Date(course?.createdAt).toLocaleString('en-US',{
                            year:"numeric",
                            month:"short",
                            day: "numeric"
                          })}
                        </p>
                        {course?.status === COURSE_STATUS.DRAFT && (
                          <p className="text-pink-100 bg-pink-400 w-max rounded-full px-2 py-1 font-inter font-medium text-xs flex gap-x-1  items-center">
                            <FaRegClock />
                            {course?.status}
                          </p>
                        )}
                        {course?.status === COURSE_STATUS.PUBLISHED && (
                          <p className="text-yellow-100 bg-richblack-700 w-max rounded-full px-2 py-1 font-inter font-medium text-xs flex gap-x-1  items-center">
                            <FaCircleCheck />
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
                          onClick={() => {
                            setConfirmationModal({
                              text1: "Do you want to delete this course?",
                              text2:
                                "All the data related to this course will be deleted",
                              btn1text: !loading ? "Delete" : "Loading...  ",
                              btn2text: "Cancel",
                              btn1handler: !loading
                                ? () => handleCourseDelete(course._id)
                                : () => {},
                              btn2handler: !loading
                                ? () => setConfirmationModal(null)
                                : () => {},
                            });
                          }}
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
      {confirmationModal && <ConfirmModal modalData={confirmationModal} />}
    </div>
  );
};

export default InstructorCourseTable;

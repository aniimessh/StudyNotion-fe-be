import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IconButton from "../../common/IconButton";
import { IoChevronDownSharp } from "react-icons/io5";

const VideoDetailsSidebar = ({ specificCourseData }) => {
  console.log("SPECIFIC COURSE DETAILS ===>", specificCourseData);
  const [activeStatus, setActiveStatus] = useState("");
  const [videobarActive, setVideobarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();

  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  console.log(totalNoOfLectures);

  useEffect(() => {
    (() => {
      if (!courseSectionData?.length) return;
      const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );

      const currentSubSectionIndex = courseSectionData?.[
        currentSectionIndex
      ]?.subSection?.findIndex((data) => data._id === subSectionId);

      const activeSubSectionId =
        courseSectionData?.[currentSectionIndex]?.subSection?.[
          currentSubSectionIndex
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
      setVideobarActive(activeSubSectionId);
    })();
  }, [courseSectionData, location.pathname, courseEntireData]);
  return (
    <>
      <div className="bg-richblack-600 w-max h-[90vh] p-3">
        <div>
          <div>
            <span className="text-white font-semibold">
              {" "}
              {specificCourseData?.courseDetails?.courseName}
            </span>
            <span className="">
              {completedLectures.length}/{totalNoOfLectures}
            </span>
            {/* <IconButton text="Add review" onclick={() => {}}/>             */}
          </div>
          <div>
            {courseSectionData.map((course, index) => (
              <div onClick={() => setActiveStatus(course?._id)} key={index}>
                <div className="flex justify-between">
                  <div>{course?.sectionName}</div>
                  <IoChevronDownSharp />
                </div>

                <div>
                  {activeStatus === course?._id && (
                    <div>
                      {course?.subSection.map((topic, index) => (
                        <div
                          key={index}
                          className={`${
                            topic?.id === videobarActive ? "bg-yellow-50" : ""
                          }`}
                          onClick={() => {
                            navigate(
                              `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                            );
                            setVideobarActive(topic?._id);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={completedLectures.includes(topic?._id)}
                          />
                          <span>{topic?.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailsSidebar;

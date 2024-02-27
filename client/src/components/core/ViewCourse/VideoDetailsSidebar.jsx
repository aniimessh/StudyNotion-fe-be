import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import IconButton from "../../common/IconButton";

const VideoDetailsSidebar = ({specificCourseData}) => {
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
  return <>
  <div>
      <div>
          <div>
             <span> {specificCourseData?.courseDetails?.courseName.substring(0, 20)}...</span>
             <IconButton text="Add review" onclick={() => {}}/>
          </div>
          <div>
              
          </div>
      </div>
  </div>
  </>;
};

export default VideoDetailsSidebar;

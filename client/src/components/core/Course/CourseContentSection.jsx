import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";

const CourseContentSection = ({ coursePageData }) => {
  return (
    <div>
      <p className="text-xl font-inter text-white font-semibold">
        Course Content
      </p>
      <p className="text-richblack-300 text-sm font-inter mt-3">
        {coursePageData?.courseContent?.length} Sections • 1 Lectures • 1 Length
      </p>
      <div>
        {coursePageData?.courseContent?.map((section) => (
          <details
            className="appearance-none border border-richblack-600 mt-3"
            open
            key={section._id}
          >
            <summary className="appearance-none font-inter text-white bg-richblack-700 px-8 py-4 flex justify-between">
              <p className="flex items-center gap-x-1 text-sm font-medium">
                <MdOutlineFilterList /> {section?.sectionName}
              </p>
              <p>{section?.subSection?.length} Lecture</p>
            </summary>
            <div className="px-8">
              {section?.subSection?.map((item, index) => (
                <details>
                  <summary className="appearance-none font-inter text-white px-8 py-2 flex justify-between">
                    <p className="flex items-center text-base gap-x-1" key={index}>
                      <MdOutlineSlowMotionVideo />
                      {item?.title}
                    </p>
                  </summary>
                </details>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default CourseContentSection;

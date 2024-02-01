import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdDelete, MdEdit } from "react-icons/md";
import ConfirmModal from "../../../../../common/ConfirmModal";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SubSectionModal from "./SubSectionModal";
import {
  deleteSection,
  deleteSubSection,
} from "../../../../../../services/operations/courseDetailAPI";
import { setCourse } from "../../../../../../slices/courseSlice";
import { MdOutlineFilterList } from "react-icons/md";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [addSubsection, setaddSubSection] = useState(null);
  const [editSubsection, seteditSubSection] = useState(null);
  const [viewSubsection, setviewSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseId: course._id,
      token,
    });
    console.log(result);
    if (result) {
      console.log("Dispatching");
      dispatch(setCourse(result));
    }
    setConfirmationModal(null);
  };

  const handleChangeEditSubSectionName = () => {};

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({ subSectionId, sectionId, token });
    console.log(result);
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      );
      const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }
    setConfirmationModal(null);
  };
  return (
    <div className="rounded-md border border-richblack-500 p-6 space-y-6 bg-richblack-700">
      <div>
        {course.courseContent.map((section, index) => (
          <details key={index} open>
            <summary className="flex  cursor-pointer justify-between border-b border-richblack-500 py-4">
              <div className="flex gap-x-3 items-center">
                <MdOutlineFilterList className={`text-xl text-richblack-300`} />{" "}
                <p className="text-richblack-200 font-inter">
                  {section.sectionName}
                </p>
              </div>
              <div className="flex gap-x-2">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit className="text-xl text-richblack-300" />
                </button>
                <button
                  onClick={() => {
                    setConfirmationModal({
                      text1: "Delete Section",
                      text2: "All the lecture in this section will be deleted",
                      btn1text: "Delete",
                      btn2text: "Cancel",
                      btn1handler: () => handleDeleteSection(section._id),
                      btn2handler: () => setConfirmationModal(null),
                    });
                  }}
                >
                  <MdDelete className="text-xl text-richblack-300" />
                </button>
                <span className="font-medium text-richblack-300">|</span>
                <IoMdArrowDropdown className={`text-xl text-richblack-300`} />
              </div>
            </summary>
            <div className="pl-4 pb-4">
              {section?.subSection.map((data) => {
                return (
                  <div
                    key={data._id}
                    
                    className="flex  cursor-pointer justify-between border-b border-richblack-500 py-2"
                  >
                    <div className="flex items-center gap-x-3 py-2">
                      <MdOutlineFilterList
                        className={`text-xl text-richblack-300`}
                      />
                      <p className="text-richblack-200 font-inter" onClick={() => setviewSubSection(data)}>
                        {data.title}
                      </p>
                    </div>
                    <div className="flex gap-x-2">
                      <button
                        onClick={() =>
                          seteditSubSection({
                            ...data,
                            sectionId: section._id,
                          })
                        }
                      >
                        <MdEdit className="text-xl text-richblack-300" />
                      </button>
                      <button
                        onClick={() => {
                          setConfirmationModal({
                            text1: "Delete Subsection",
                            text2: "Selected lecture will be deleted",
                            btn1text: "Delete",
                            btn2text: "Cancel",
                            btn1handler: () =>
                              handleDeleteSubSection(data._id, section._id),
                            btn2handler: () => setConfirmationModal(null),
                          });
                        }}
                      >
                        <MdDelete className="text-xl text-richblack-300" />
                      </button>
                    </div>
                  </div>
                );
              })}
              <button
                onClick={() => setaddSubSection(section._id)}
                className="mt-4 flex items-center gap-x-4 text-yellow-50"
              >
                <AiOutlinePlus />
                <p className="font-inter font-semibold"> Add Lecture </p>
              </button>
            </div>
          </details>
        ))}
      </div>
      {addSubsection ? (
        <SubSectionModal
          modalData={addSubsection}
          setModalData={setaddSubSection}
          add={true}
        />
      ) : viewSubsection ? (
        <SubSectionModal
          modalData={viewSubsection}
          setModalData={setviewSubSection}
          view={true}
        />
      ) : editSubsection ? (
        <SubSectionModal
          modalData={editSubsection}
          setModalData={seteditSubSection}
          edit={true}
        />
      ) : (
        <div></div>
      )}
      {confirmationModal && <ConfirmModal modalData={confirmationModal} />}
    </div>
  );
};

export default NestedView;

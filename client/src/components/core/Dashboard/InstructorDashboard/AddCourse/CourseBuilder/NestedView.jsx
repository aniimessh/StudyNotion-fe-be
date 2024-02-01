import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdDelete, MdEdit } from "react-icons/md";
import ConfirmModal from "../../../../../common/ConfirmModal";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [addSubsection, setaddSubSection] = useState(null);
  const [editSubsection, seteditSubSection] = useState(null);
  const [viewSubsection, setviewSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);
  
  

  const handleDeleteSection = (id) => {};

  const handleChangeEditSubSectionName = () => {};

  const handleDeleteSubSection = (id) => {};
  return (
    <div className="rounded-md border border-richblack-500 p-6 space-y-6 bg-richblack-700">
      <div>
        {course.courseContent.map((section, index) => (
          <details key={index} open>
            <summary className="flex justify-between border-b border-richblack-500">
              <div className="flex gap-x-3 ">
                <p>{section.sectionName}</p>
              </div>
              <div className="flex">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit />
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
                  <MdDelete />
                </button>
                <span>|</span>
                <IoMdArrowDropdown />{" "}
              </div>
            </summary>
            <div>
              {section?.subSection.map((data) => {
                return (
                  <div key={data._id} onClick={setviewSubSection(data)}>
                    <div className="flex gap-x-3 ">
                      <p>{section.title}</p>
                    </div>
                    <div className="flex">
                      <button
                        onClick={() =>
                          handleChangeEditSubSectionName({
                            ...data,
                            sectionId: section._id,
                          })
                        }
                      >
                        <MdEdit />
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
                        <MdDelete />
                      </button>
                      <span>|</span>
                      <IoMdArrowDropdown />{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        ))}
      </div>
      {confirmationModal && <ConfirmModal modalData={confirmationModal} />}
    </div>
  );
};

export default NestedView;

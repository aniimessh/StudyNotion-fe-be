import { useForm } from "react-hook-form";
import IconButton from "../../../../../common/IconButton";
import { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../../slices/courseSlice";
import { toast } from "react-hot-toast";
import {
  createSection,
  updateSection,
  updateSubSection,
} from "../../../../../../services/operations/courseDetailAPI";
import NestedView from "./NestedView";
import { CgAdd } from "react-icons/cg";

const CourseBuilderForm = () => {
  const [editSectionName, setEditSectionName] = useState(false);
  const [loading, setLoading] = useState(false);
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };

  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add atleast 1 section");
      return;
    }
    if (
      course.courseContent.some((section) => section.subSection.length == 0)
    ) {
      toast.error("Please add atleast 1 lecture");
      return;
    }

    dispatch(setStep(3));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    let result;
    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      );
    }
    console.log(result);
    if (result) {
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }
    setLoading(false);
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      setEditSectionName(null);
      setValue("sectionName", "");
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div className="rounded-md border border-richblack-500 p-6 space-y-6 bg-richblack-700">
      <p className="text-2xl font-semibold text-white font-inter">
        Course Builder
      </p>
      {course?.courseContent?.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor=""></label>
          <input
            type="text"
            id="sectionName"
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 font-inter outline-none placeholder:font-inter"
          />
          {errors.sectionName && <span className="text-xs tracking-wide text-pink-200">Section name is required</span>}
        </div>

        <div className="flex gap-x-6 mt-2">
          <IconButton
            type="submit"
            outline={true}
            customClasses="text-yellow-50"
            text={editSectionName ? "Edit section name" : "Create section"}
          >
            <CgAdd className="text-xl"/>
          </IconButton>
          {editSectionName && (
            <button
              type="button"
              onClick={() => {
                setEditSectionName(null);
                setValue("sectionName", "");
              }}
              className="text-sm  text-richblack-300 font-inter underline"
            >
              Canel Edit
            </button>
          )}
        </div>
      </form>

      <div className="flex gap-x-6 mt-5">
        <button
          onClick={goBack}
          className="flex items-center font-inter text-white  bg-richblack-600 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
        >
          Back
        </button>
        <IconButton onclick={goToNext}>
          Next <MdOutlineKeyboardArrowRight />
        </IconButton>
      </div>
    </div>
  );
};

export default CourseBuilderForm;

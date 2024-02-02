import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editCourseDetails } from "../../../../../../services/operations/courseDetailAPI";
import {
  resetCourseState,
  setEditCourse,
  setStep,
} from "../../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../../utils/constants";
import IconButton from "../../../../../common/IconButton";

const PublishForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { course } = useSelector((state) => state.course);

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {};

  const goBack = () => {
    dispatch(setStep(2));
    dispatch(setEditCourse(true));
  };

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true);
    }
  }, []);

  const goToMyCourses = () => {
    dispatch(resetCourseState());
    navigate("/dashboard/my-courses");
  };

  const handleCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      goToMyCourses();
      return;
    }

    const formData = new FormData();
    formData.append("courseId", course._id);
    const formStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT;
    formData.append("status", formStatus);

    setLoading(true);
    const result = await editCourseDetails(formData, token);
    if (result) {
      goToMyCourses();
    }
    setLoading(false);
  };

  const goToNext = () => {
    handleCoursePublish();
  };
  return (
    <div className=" rounded-md border border-richblack-500 p-6 space-y-6 bg-richblack-700">
      <h1 className="font-bold text-white font-inter text-2xl">
        Publish Settings
      </h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          <input
            type="checkbox"
            name=""
            id="public"
            {...register("public", { required: true })}
          />
          <label htmlFor="public" className="text-richblack-300 font-inter">
            Make this Course Public
          </label>
        </div>
      </form>
      <div className="flex gap-x-6 mt-5 justify-between">
        <button
          onClick={goBack}
          className="flex items-center font-inter text-white  bg-richblack-600 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
        >
          <MdOutlineKeyboardArrowLeft />
          Back
        </button>
        <div className="flex gap-x-2">
          <button
            onclick={() => {}}
            className="flex items-center font-inter text-white  bg-richblack-600 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold"
          >
            Save as Draft
          </button>
          <IconButton onclick={goToNext} type="submit">Save and Publish</IconButton>
        </div>
      </div>
    </div>
  );
};

export default PublishForm;

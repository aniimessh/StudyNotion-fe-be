import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../../services/operations/courseDetailAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import ChipInput from "./ChipInput";
import Upload from "../Upload";
import RequirementField from "./RequirementField";
import { setCourse, setStep } from "../../../../../../slices/courseSlice";
import IconButton from "../../../../../common/IconButton";
import toast from "react-hot-toast";
import { COURSE_STATUS } from "../../../../../../utils/constants";

const CourseInformationForm = () => {
  const { course, editCourse } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [courseCategory, setCourseCategory] = useState([]);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategory(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseDescription", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWIllLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirement", course.instructions);
      setValue("courseImage", course.thumbnail);
    }

    getCategories();
  }, []);

  const dispatch = useDispatch();

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseDescription !== course.courseDescription ||
      currentValues.coursePrice !== course.coursePrice ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWIllLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirement.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true;
    } else {
      return false;
    }
  };

  const currentValues = getValues();
  console.log(currentValues);

  const onSubmit = async (data) => {
    console.log(data);
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();

        // console.log(currentValues);
        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage);
        }

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
        }
      } else {
        toast.error("No changes made to the form");
        dispatch(setStep(2));
      }
      return;
    }

    const formData = new FormData();
    formData.append("courseName", data.courseTitle);
    formData.append("courseDescription", data.courseDescription);
    formData.append("price", data.coursePrice);
    formData.append("tag", JSON.stringify(data.courseTags));
    formData.append("whatYouWillLearn", data.courseBenefits);
    formData.append("category", data.courseCategory);
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    formData.append("thumbnailImage", data.courseImage);
    setLoading(true);
    const result = await addCourseDetails(formData, token);
    if (result) {
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border border-richblack-500 p-6 space-y-6 bg-richblack-700"
    >
      <div>
        <label className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
          Course Title<sup className="text-pink-200">*</sup>
        </label>
        <input
          type="text"
          id="courseTitle"
          placeholder="Enter Course Title"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 placeholder:font-inter outline-none"
          {...register("courseTitle", { required: true })}
        />
        {errors.courseTitle && <span className="text-xs tracking-wide text-pink-200">Course Title is Required*</span>}
      </div>

      <div>
        <label className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
          Course Short Description<sup className="text-pink-200">*</sup>
        </label>
        <textarea
          name="courseDescription"
          id="courseDescription"
          cols="30"
          rows="5"
          placeholder="Enter Description"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 placeholder:font-inter outline-none"
          {...register("courseDescription", { required: true })}
        />
        {errors.courseDescription && (
          <span className="text-xs tracking-wide text-pink-200">Course Description is Required*</span>
        )}
      </div>

      <div className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter relative">
        <label>
          Course Price<sup className="text-pink-200">*</sup>
        </label>
        <input
          type="text"
          id="coursePrice"
          placeholder="Enter Course Price"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 pl-8 outline-none"
          {...register("coursePrice", { required: true })}
        />
        <HiOutlineCurrencyRupee className="absolute top-7 text-3xl text-richblack-300" />
        {errors.coursePrice && <span className="text-xs tracking-wide text-pink-200">Course Price is Required*</span>}
      </div>

      <div>
        <label htmlFor=""  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
          Course Category<sup className="text-pink-200">*</sup>
        </label>
        <select
          name=""
          id="courseCategory"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-none font-inter"
          {...register("courseCategory", { required: true })}
        >
          <option value="" className="font-inter">
            Choose a Category
          </option>
          {!loading &&
            courseCategory.map((item, index) => {
              return (
                <option value={item._id} key={index} className="font-inter">
                  {item?.name}
                </option>
              );
            })}
        </select>
        {errors.courseCategory && <span className="text-xs tracking-wide text-pink-200">Course Category is Required*</span>}
      </div>

      <div>
        <ChipInput
          label="Tags"
          name="courseTags"
          placeholder="Enter tags and press enter"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
      </div>

      <div>
        <Upload
          name="courseImage"
          label="Course Thumbnail"
          register={register}
          setValue={setValue}
          errors={errors}
          editData={editCourse ? course?.thumbnail : null}
        />
      </div>

      <div>
        <label className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
          Course Benefits<sup className="text-pink-200">*</sup>
        </label>
        <textarea
          name="courseBenefits"
          id="courseBenefits"
          cols="20"
          rows="2"
          placeholder="Enter Benefits of the course"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 outline-none"
          {...register("courseBenefits", { required: true })}
        />
        {errors.courseBenefits && <span className="text-xs tracking-wide text-pink-200">Course Benefits is Required*</span>}
      </div>
      <div>
        <RequirementField
          name="courseRequirements"
          label="Requiremnts/Instrucions"
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
      </div>

      <div>
        {editCourse && (
          <button onClick={() => dispatch(setStep(2))}>
            Continue without Saving
          </button>
        )}

        <IconButton text={!editCourse ? "Next" : "Save Changes"} />
      </div>
    </form>
  );
};

export default CourseInformationForm;

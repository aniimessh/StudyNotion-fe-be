import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../../services/operations/courseDetailAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import ChipInput from "./ChipInput";
import Upload from "../Upload";

const CourseInformationForm = () => {
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategory, setCourseCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategory(categories);
      }
      setLoading(false);
    };

    getCategories();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md border-richblack-800 p-6 space-y-6"
    >
      <div>
        <label>
          Course Title<sup>*</sup>
        </label>
        <input
          type="text"
          id="courseTitle"
          placeholder="Enter Course Title"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("courseTitle", { required: true })}
        />
        {errors.courseTitle && <span>Course Title is Required*</span>}
      </div>

      <div>
        <label>
          Course Description<sup>*</sup>
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter Description"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span>Course Description is Required*</span>
        )}
      </div>

      <div className=" relative">
        <label>
          Course Price<sup>*</sup>
        </label>
        <input
          type="text"
          id="coursePrice"
          placeholder="Enter Course Price"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("courseTitle", { required: true })}
        />
        <HiOutlineCurrencyRupee className="absolute top-1/2" />
        {errors.coursePrice && <span>Course Price is Required*</span>}
      </div>

      <div>
        <label htmlFor="">
          Course Category <sup>*</sup>
        </label>
        <select
          name=""
          id="courseCategory"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled defaultChecked>
            Choose a Category
          </option>
          {!loading &&
            courseCategory.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item?.name}
                </option>
              );
            })}
        </select>
        {errors.courseCategory && <span>Course Category is Required*</span>}
      </div>

      <div>
        <ChipInput
          label="Tags"
          name="coursetags"
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
        <label>
          Course Benefits<sup>*</sup>
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
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          {...register("courseBenefits", { required: true })}
        />
        {errors.courseBenefits && (
          <span>Course Benefits is Required*</span>
        )}
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
    </form>
  );
};

export default CourseInformationForm;

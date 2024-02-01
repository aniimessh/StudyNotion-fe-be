import { useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import PublishForm from "./PublishForm/PublishForm";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);
  const steps = [
    {
      id: 1,
      title: "Course Informtion",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div className="w-8/12">
      <div className="relative mb-2 flex w-full justify-between">
        {steps.map((item) => {
          return (
            <>
              <div key={item.id} className="flex flex-col items-center ">
                <button
                  className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                    step === item.id
                      ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                      : "border-richblack-700 bg-richblack-800 text-richblack-300"
                  } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
                >
                  {step > item.id ? <FaCircleCheck /> : item.id}
                </button>
              </div>
              {item.id !== steps.length && (
                <>
                  <div
                    className={`h-[calc(34px/2)] w-[45%]  border-dashed border-b-2 ${
                      step > item.id
                        ? "border-yellow-50"
                        : "border-richblack-500"
                    } `}
                  ></div>
                </>
              )}
            </>
          );
        })}
      </div>
      <div className="relative mb-5 flex w-full select-none justify-between">
        {steps.map((item) => {
          return (
            <>
              <div>
                <p>{item.title}</p>
              </div>
            </>
          );
        })}
      </div>
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishForm />}
    </div>
  );
};

export default RenderSteps;

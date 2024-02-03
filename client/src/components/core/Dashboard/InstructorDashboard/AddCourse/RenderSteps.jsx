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
      title: (
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Publish&nbsp;&nbsp;&nbsp;&nbsp;</p>
      ),
    },
  ];
  return (
    <div className="w-8/12">
      <div className="relative mb-2 flex w-9/12 mx-auto justify-between">
        {steps.map((item) => {
          return (
            <>
              <div key={item.id} className="">
                <button
                  className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                    step === item.id
                      ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                      : "border-richblack-600 bg-richblack-700 text-richblack-300"
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
      <div className="relative mb-5 flex select-none justify-between w-4/5 mx-auto">
        {steps.map((item) => {
          return (
            <>
              <div >
                <p className={`${step === item.id ? "text-white" : "text-richblack-300"} text-sm font-inter`}>{item.title}</p>
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

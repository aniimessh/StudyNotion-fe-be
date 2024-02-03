import { Link } from "react-router-dom";
import RenderSteps from "./RenderSteps";
import { MdKeyboardArrowLeft } from "react-icons/md";

const AddCourse = () => {
  return (
    <>
      <div className="flex items-start justify-start p-6 relative">
        <div className="flex w-3/4 flex-col">
          <Link to="/dashboard/my-profile" className="w-max">
            <p className="mb-5  text-richblack-300 flex items-center gap-x-2 font-inter">
              <MdKeyboardArrowLeft />
              Back to Dashboard
            </p>
          </Link>
          <div>
            <RenderSteps />
          </div>
        </div>
        <div className="fixed top-15 right-6 hidden lg:block flex-1">
          <div className="w-[400px] rounded-md border-[1px] border-richblack-500 bg-richblack-700 p-6 font-inter">
            <p className="mb-4 text-lg text-richblack-5 font-semibold">
              ⚡ Course Upload Tips
            </p>
            <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
              <li>Set the Course Price option or make it free.</li>
              <li>Standard size for the course thumbnail is 1024x576.</li>
              <li>Video section controls the course overview video.</li>
              <li>Course Builder is where you create &amp; organize a course.</li>
              <li>
                Add Topics in the Course Builder section to create lessons,
                quizzes, and assignments.
              </li>
              <li>
                Information from the Additional Data section shows up on the
                course single page.
              </li>
              <li>Make Announcements to notify any important</li>
              <li>Notes to all enrolled students at once.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;

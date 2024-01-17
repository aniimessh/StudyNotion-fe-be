import { useSelector } from "react-redux";
import countryCode from "../../../data/countrycode.json";

const ProfileSection = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <section className="border border-richblack-600 w-1/2 p-6 ml-10 mt-5 bg-richblack-700 rounded-xl">
      <div>
        <p className="text-white font-inter font-semibold text-lg">
          Profile Information
        </p>
        <div className="flex justify-between gap-x-4 mb-2">
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              Display Name
            </p>
            <input
              type="text"
              value={user.firstName + " " + user.lastName}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 font-inter"
            />
            <p className="text-xs text-richblack-500 font-inter">
              Name entered above will be used for all issued certifies.
            </p>
          </label>
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              {" "}
              Profession
            </p>
            <select
              name=""
              id=""
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 font-inter"
            >
              <option value="" disabled>
                Select Your Profession
              </option>
              <option value="">Developer</option>
              <option value="">Student</option>
            </select>
          </label>
        </div>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              Date of Birth
            </p>
            <input
              type="date"
              name=""
              id=""
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-500 font-inter"
            />
          </label>
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              Gender
            </p>
            <div
              class="flex justify-between items-center w-full h-[3rem] bg-richblack-800 px-[12px] rounded-[0.5rem]"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
            >
              <div className="flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="male"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-50 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity checked:border-yellow-50 checked:before:bg-yellow-500 hover:before:opacity-10"
                    id="male"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="#FFD60A"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-light font-inter text-richblack-500 cursor-pointer select-none"
                  htmlFor="html"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="female"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-50 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity checked:border-yellow-50 checked:before:bg-yellow-500 hover:before:opacity-10"
                    id="female"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="#FFD60A"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-light text-gray-700 cursor-pointer select-none font-inter text-richblack-500"
                  htmlFor="html"
                >
                  Female
                </label>
              </div>
              <div className="flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="other"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-yellow-50 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity checked:border-yellow-50 checked:before:bg-yellow-500 hover:before:opacity-10"
                    id="other"
                  />
                  <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="#FFD60A"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-light text-gray-700 cursor-pointer select-none font-inter text-richblack-500"
                  htmlFor="other"
                >
                  Other
                </label>
              </div>
            </div>
          </label>
        </div>
        <div className="flex gap-x-4 mt-2">
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              Phone Number
            </p>
            <div className="flex gap-x-2">
              <select
                name="dropdown"
                id="dropdown"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[4.8rem] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              >
                {countryCode.map((data, index) => (
                  <option value={data.code} key={index}>
                    {data.code}-{data.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name=""
                id=""
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-500 font-inter"
                value={user?.additionalDetails?.contactNumber}
              />
            </div>
          </label>
          <label htmlFor="" className="w-1/2">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-inter">
              About
            </p>
            <input
              type="text"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-500 font-inter"
              placeholder="Enter Bio Details"
            />
          </label>
        </div>
        <div className="mt-2 flex justify-end">
          <button
            onClick={() => {}}
            className="flex items-center bg-yellow-50 px-6 py-2 rounded-lg font-inter"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

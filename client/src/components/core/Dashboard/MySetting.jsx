import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useSelector } from "react-redux";

const MySetting = () => {
  const { user } = useSelector((state) => state.profile);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    // Handle the selected file as needed
    console.log("Selected file:", selectedFile);
  };

  const handleButtonClick = () => {
    // Trigger the click event on the hidden file input
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="p-6">
        <NavLink
          to="/dashboard/my-profile"
          className="font-inter text-richblack-300 flex items-center gap-x-2"
        >
          <SlArrowLeft className="text-sm" />
          Back
        </NavLink>
        <p className="text-white font-inter font-medium text-3xl mt-4">
          Edit Profile
        </p>
      </div>

      <section className="border border-richblack-600 w-1/2 p-6 ml-10 mt-5 bg-richblack-700 rounded-xl">
        <div className="flex items-center gap-x-4">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstname} Image`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-y-3">
            <p className="font-inter text-richblack-25">
              Change Profile Picture
            </p>
            <div className="flex gap-x-3">
              <button
                className="flex items-center bg-yellow-50 px-6 py-2 rounded-lg font-inter"
                onClick={handleButtonClick}
              >
                Change
              </button>
              <button className="text-white font-inter bg-richblack-400 px-6 py-2 rounded-lg border border-richblack-300">
                Remove
              </button>
              <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              style={{ display: "none" }}
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MySetting;

import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplayPicture } from "../../../services/operations/settingAPI";
import ProfileSection from "./ProfileSection";
import ChangePasswordSection from "./ChangePasswordSection";
import UpdatePassword from "./ChangePasswordSection";

const MySetting = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileUpload = () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  const handleRemoveClick = () => {
    setPreviewSource(null);
    setImageFile(null);
  };

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);

  return (
    <div className="p-6 h-full ">
      <>
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
      </>

      <section className="border border-richblack-600 w-full p-6 mt-5 bg-richblack-700 rounded-xl">
        <div className="flex items-center gap-x-4">
          <img
            src={`${previewSource || user?.image}`}
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
                onClick={handleClick}
              >
                Change
              </button>
              <button
                className="text-white font-inter bg-richblack-400 px-6 py-2 rounded-lg border border-richblack-300"
                onClick={handleRemoveClick}
              >
                Remove
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                accept="image/png, image/gif, image/jpeg"
              />
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleFileUpload}
            className="flex items-center bg-yellow-50 px-6 py-2 rounded-lg font-inter"
          >
            Save
          </button>
        </div>
      </section>

      <ProfileSection />

      <section className="border border-richblack-600 w-full p-6 mt-5 bg-richblack-700 rounded-xl">
        <UpdatePassword />
      </section>
    </div>
  );
};

export default MySetting;

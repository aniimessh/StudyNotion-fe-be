import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "../../common/IconButton";
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <p className="font-inter text-richblack-300 font-medium p-6">
        Home / Dashboard / <span className="text-yellow-200">My profile</span>
      </p>
      <h1 className="font-inter text-2xl text-white font-medium px-6">
        My Profile
      </h1>

      <section className="border border-richblack-600 w-1/2 p-6 ml-10 mt-5 bg-richblack-700 rounded-xl flex justify-between">
        <div className="flex items-center gap-x-4">
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstname} Image`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p className="font-inter text-white  font-semibold">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="font-inter text-richblack-300 font-medium">
              {user?.email}
            </p>
          </div>
        </div>
        <IconButton
          text="Edit"
          onclick={() => navigate("/dashboard/settings")}
        />
      </section>

      {/* <section>
        <div>
          <p>About</p>
          <IconButton
            text="Edit"
            onclick={() => navigate("dashboard/settings")}
          />
          <p>
            {user?.additionalDetails?.about
              ? user?.additionalDetails?.about
              : "Write something about yourself"}
          </p>
        </div>
      </section> */}

      <section className="border w-1/2 ml-10 mt-5 p-6 rounded-lg border-richblack-600 bg-richblack-700">
        <div className="flex justify-between items-center">
          <p className="font-inter text-xl font-semibold text-white">Personal Details</p>
          <IconButton
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
          />
        </div>

        <div className="">
          <div className="flex justify-between">
          <div className="w-1/2">
            <p className="text-richblack-400 font-normal font-inter">First name</p>
            <p className="text-white font-inter font-medium">{user?.firstName}</p>
          </div>
          <div className="w-1/2">
            <p className="text-richblack-400 font-normal font-inter">Last name</p>
            <p className="text-white font-inter font-medium">{user?.lastName}</p>
          </div>
          </div>
          <div className="flex justify-between mt-2">
          <div className="w-1/2">
            <p className="text-richblack-400 font-normal font-inter">Email</p>
            <p className="text-white font-inter font-medium">{user?.email}</p>
          </div>
          <div className="w-1/2">
            <p className="text-richblack-400 font-normal font-inter">Phone Number</p>
            <p className="text-white font-inter font-medium">
              {user?.additionalDetails?.contactNumber ?? "Add phone number"}
            </p>
          </div>
          </div>
          {/* <div>
            <p>Gender</p>
            <p>{user?.additionalDetails?.gender ?? "Add gender"}</p>
          </div>
          <div>
            <p>Date of Birth</p>
            <p>{user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;

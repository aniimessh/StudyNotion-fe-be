import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconButton from "../../common/IconButton";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div>
      <h1>My Profile</h1>

      <section>
        <div>
          <img
            src={`${user?.image}`}
            alt={`profile-${user?.firstname} Image`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div>
            <p>{user?.firstName + " " + user?.lastName}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <IconButton
          text="Edit"
          onclick={() => navigate("dashboard/settings")}
        />
      </section>

      <section>
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
      </section>

      <section>
        <div>
          <p>Personal Details</p>
          <IconButton
            text="Edit"
            onclick={() => navigate("dashboard/settings")}
          />
        </div>

        <div>
          <div>
            <p>First name</p>
            <p>{user?.firstName}</p>
          </div>
          <div>
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.additionalDetails?.gender ?? "Add gender"}</p>
          </div>
          <div>
            <p>Last name</p>
            <p>{user?.lastName}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>
              {user?.additionalDetails?.contactNumber ?? "Add phone number"}
            </p>
          </div>
          <div>
            <p>Date of Birth</p>
            <p>{user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;

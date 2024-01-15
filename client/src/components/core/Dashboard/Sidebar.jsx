import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import ConfirmModal from "../../common/ConfirmModal";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(null);
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: authLoading } = useSelector((state) => state.auth);
  if (profileLoading || authLoading) {
    toast.loading("Loading");
  }
  return (
    <div>
      <div className="flex min-w-[222px] flex-col border-r border-r-richblack-700 h-[calc(100vh-3.5rem)] bg-richblack-800 py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((item, index) => {
            if (item.type && user?.accountType !== item.type) return null;
            return <SidebarLink key={index} item={item} iconName={item.icon} />;
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700"></div>

        <div className="flex flex-col">
          <SidebarLink
            item={{ name: "Settings", path: "dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          <button
            onClick={() =>
              setOpenModal({
                text1: "Are you sure?",
                text2: "You will be logged out",
                btn1text: "Logout",
                btn2text: "Cancel",
                btn1handler: () => dispatch(logout(navigate)),
                btn2handler: () => setOpenModal(null),
              })
            }
            className="text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gp-x-4">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>
      {openModal && <ConfirmModal modalData={openModal} />}
    </div>
  );
};

export default Sidebar;

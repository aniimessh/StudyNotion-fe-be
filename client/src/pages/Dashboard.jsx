import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: profileLoading } = useSelector((state) => state.profile);

  if (profileLoading || authLoading) {
    return toast.loading("Loading");
  }
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] relative">
      <Sidebar />
        <div className="mx-auto w-1/2 py-5 px-2">
          <Outlet />
        </div>
    </div>
  );
};

export default Dashboard;

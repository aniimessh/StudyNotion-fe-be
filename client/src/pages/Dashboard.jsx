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
    <div className="flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="min-h-[calc(100vh-3.5rem)] w-11/12">
        <div className="mx-auto py-5 px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

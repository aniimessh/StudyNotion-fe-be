import React from "react";
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

const SidebarLink = ({ item, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();
  const dispatch = useDispatch();

  const matchRoutes = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div>
      <NavLink
        to={item?.path}
        onClick
        className={`${
          matchRoutes(item?.path) ? "bg-yellow-800" : "bg-opacity-0"
        } relative py-2 px-8 text-sm font-medium`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-1 bg-yellow-50 ${
            matchRoutes(item?.path) ? "opacity-100" : "opacity-0"
          }`}
        ></span>
        <div className="flex items-center gap-x-2">
          <Icon className="text-lg"/>
          <span>
            {item?.name}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarLink;

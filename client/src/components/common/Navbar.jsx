import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import StudyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { useSelector } from "react-redux";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { ProfileDropDown } from "../core/Auth/ProfileDropDown";
import { BsChevronDown } from "react-icons/bs";
// import { apiConnector } from "../../services/apiconnector";
// import { categories } from "../../services/api";
import axios from "axios";

const subLinks = [
  {
    title: "Python",
    link: "/catalog/python",
  },
  {
    title: "Web Dev",
    link: "/catalog/WebDev",
  },
];

export const Navbar = () => {
  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const {totalItems} = useSelector((state) => state.cart);

  // const [subLinks, setSubLinks] = useState([]);

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  // const fetchSublinks = async () => {
  //   try {
  //     const result = await apiConnector("GET", categories.CATEGORIES_API);
  //     console.log(result);
  //     setSubLinks(result);
  //   } catch {
  //     console.log("Could not fetch the category list");
  //   }
  // };

  // useEffect(() => {
  //   fetchSublinks();
  // }, []);

  return (
    <div className="h-14 border-b border-richblack-700 flex items-center">
      <div className="flex w-11/12 max-w-maxContent items-center mx-auto justify-between">
        <Link to={"/"}>
          <img
            src={StudyNotionLogo}
            alt=""
            width={160}
            height={42}
            loading="lazy"
          />
        </Link>

        {/* Nav Link */}
        <nav>
          <ul className="flex gap-x-10 text-richblack-100">
            {NavbarLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.title === "Catalog" ? (
                    <div className=" relative flex items-center gap-x-2 group">
                      <p>{item.title}</p> <BsChevronDown />
                      <div className=" invisible absolute left-[50%] top-6 h-6 w-6 translate-x-5 rotate-45 rounded-sm bg-richblack-5 group-hover:visible group-hover:opacity-100 opacity-0 transition-all translate-y-[18%]"></div>
                      <div
                        className="invisible absolute left-[50%] top-[5%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all
                      group-hover:visible group-hover:opacity-100 lg:w-[300px] translate-x-[-50%] cursor-pointer translate-y-[50%] z-10"
                      >
                        {subLinks.length ? (
                          subLinks.map((sublink, i) => (
                            <Link to={sublink.link} key={i}>
                              {sublink.title}
                            </Link>
                          ))
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={item?.path}>
                      <p
                        className={`${
                          matchRoute(item?.path)
                            ? " text-yellow-25 "
                            : " text-richblack-100 "
                        }`}
                      >
                        {item.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login signup dashboard */}
        <div className="flex gap-x-5 items-center">
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <BsCartCheck />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Login
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

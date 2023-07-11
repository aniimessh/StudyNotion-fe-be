import React from "react";
import { Link, matchPath } from "react-router-dom";
import StudyNotionLogo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="h-14 border-b border-richblack-700 flex items-center">
      <div className="flex w-11/12 max-w-maxContent items-center mx-auto">
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
          <ul className="flex gapx-5 text-richblack-100">
            {NavbarLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.title === "Catalog" ? (
                    <div>{item.title}</div>
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
            
        </div>
      </div>
    </div>
  );
};

import React from "react";
import StudyLogo from "../../assets/Logo/Logo-Full-Light.png";
import { Link } from "react-router-dom";
import { FooterLink2 } from "../../data/footer-links";

const Company = ["About", "Careers", "Affiliates"];
const Resource = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code Challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspace",
];

const FooterDetails = [" Privacy Policy |", " Cookie Policy |", " Terms "];

const Plans = ["Paid memberships", "For Students", "Bussiness solutions"];

const community = ["Forums", "Chapters", "Events"];

const Support = ["Help Center"];

export const Footer = () => {
  return (
    <div className="bg-richblack-700">
      <div className="w-11/12  flex mx-auto mt-10">
        <div className="flex justify-evenly mt-10 text-white border-r-black border border-transparent w-[50%]">
          <div className="flex flex-col gap-2">
            <img src={StudyLogo} alt="" />
            <p className="text-xl font-bold">Company</p>
            {Company.map((item) => {
              return (
                <p className="text-white">
                  <Link to={`${item}`}>{item}</Link>
                </p>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold mb-2">Resource</p>
            {Resource.map((item) => {
              return (
                <p className="text-white">
                  {" "}
                  <Link to={`/${item}`}>{item}</Link>
                </p>
              );
            })}
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold mb-2">Plans</p>
              {Plans.map((item) => {
                return (
                  <p className="text-white">
                    <Link to={`/${item}`}>{item}</Link>
                  </p>
                );
              })}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold mb-2">Community</p>
              {community.map((item) => {
                return (
                  <p className="text-white">
                    <Link to={`/${item}`}>{item}</Link>
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex mt-10 text-white w-[50%]">
          <div className="flex justify-evenly w-[100%]">
            {FooterLink2.map((item) => {
              return (
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  {item.links.map((item) => {
                    return (
                      <p className="text-white">
                        <Link to={`${item.link}`}>{item.title}</Link>
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto flex justify-between border-t border-black mt-10">
        <div className="flex w-[50%] mt-10">
          {FooterDetails.map((item) => {
            return <p className="text-white">{item} </p>;
          })}
        </div>
        <div className="m-10 text-white">
          <p>Made with ♥ CodeHelp © 2023 Studynotion</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

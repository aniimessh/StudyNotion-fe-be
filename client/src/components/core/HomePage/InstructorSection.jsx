import React from "react";
import InstructorImage from "../../../assets/Images/Instructor.png";
import { HightLightText } from "./HightLightText";
import { CTAButton } from "./CTAButton";
import { AiOutlineArrowRight } from "react-icons/ai";

export const InstructorSection = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-10">
        <div className="shadow-[-22px_-22px_0px_0px_#F7FAFC]">
          <img src={InstructorImage} alt="" />
        </div>
        <div className="flex flex-col justify-center w-[39%] text-white">
          <p className="font-bold text-3xl font-inte text-white mb-4">
            Become an <br />{" "}
            <HightLightText
              text={"instructor"}
              startColor="from-[#1FA2FF]"
              endColor="to-[#A6FFCB]"
              fontbold="font-bold"
            />
          </p>
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.{" "}
          <div className="flex mt-20">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex gap-2 items-center">
                Start Teaching Today <AiOutlineArrowRight />{" "}
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

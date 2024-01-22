import React from "react";
import { HightLightText } from "./HightLightText";
import KnowYouProgress from "../../../assets/Images/Know_your_progress.png";
import CompareWithOthers from "../../../assets/Images/Compare_with_others.png";
import PlanYourLesson from "../../../assets/Images/Plan_your_lessons.png";
import { CTAButton } from "./CTAButton";

export const LearningLanguageSection = () => {
  return (
    <div className="mt-[150px]">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your swiss knife for{" "}
          <HightLightText
            text={"learning any language"}
            startColor="from-[#1FA2FF]"
            endColor="to-[#A6FFCB]"
            fontbold="font-semibold"
          />
        </div>
        <div className="text-center text-black opacity-90 mx-auto text-base mt-4 w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex items-center justify-evenly mt-5">
          <img
            src={KnowYouProgress}
            alt="knowYourProgressImage"
            className="object-contain -mr-32"
          />
          <img
            src={CompareWithOthers}
            alt="CompareWithOthers"
            className="object-contain -mr-32"
          />
          <img
            src={PlanYourLesson}
            alt="PlanYourLesson"
            className="object-contain"
          />
        </div>
        <div className="w-fit mb-20">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

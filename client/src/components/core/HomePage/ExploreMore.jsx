import React, { useState } from "react";
import { HightLightText } from "./HightLightText";
import { HomePageExplore } from "../../../data/homepage-explore";
import { CourseCard } from "./CourseCard";

const Tabs = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

export const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(Tabs[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="text-4xl font-bold">
        Unlock the <HightLightText text={"Power of Code"} />
      </div>
      <p className="text-lg">Learn to Build Anything You Can Imagine</p>

      <div className="flex gap-5 rounded-full bg-richblack-700 p-2 px-3 mt-5 mb-5 ">
        {Tabs.map((item, index) => {
          return (
            <div
              className={`flex items-center gap-5 ${
                currentTab === item
                  ? " bg-richblack-900 text-richblack-5 "
                  : "bg-transparent text-richblack-300 "
              } rounded-full px-5 py-2 transition-all duration-200 cursor-pointer`}
              key={index}
              onClick={() => setMyCard(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="relative h-[150px]"></div>

      {/* course group */}

      <div className="absolute flex gap-10 -bottom-28 justify-between w-full">
        {courses.map((item, index) => {
          return (
            <CourseCard
            key={index}
            cardData = {item}
            currentCard = {currentCard}
            setCurrentCard = {setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

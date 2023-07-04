import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimelineBanner from "../../../assets/Images/TimelineImage.png";

const timeLine = [
  {
    logo: Logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: Logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: Logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: Logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

export const TimeLineSection = () => {
  return (
    <div>
      <div className="flex gap-10 items-center mt-16 max-h-fit">
        <div className="flex flex-col w-[40%] gap-10">
          {timeLine.map((element, index) => {
            return (
              <div className="flex gap-6" key={index}>
                <div className="w-[50px] h-[50px] bg-white items-center flex">
                  <img src={element.logo} alt="" />
                </div>

                <div>
                  <h2 className="text-[1rem] font-semibold">
                    {element.heading}
                  </h2>
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <img src={TimelineBanner} alt="timeline_image" />
          <div className="absolute bg-[#05A77B] text-white flex uppercase left-[50%] -translate-x-[45%] -translate-y-[50%] py-2">
            <div className="flex gap-5 items-center border-r-2 border-white px-7">
              <p className="text-3xl font-bold">10</p>
              <p className="text-sm font-bold opacity-30">
                Year <br /> Experience
              </p>
            </div>
            <div className="flex gap-5 items-center px-7">
              <p className="text-3xl font-bold">250</p>
              <p className="text-sm font-bold opacity-30">
                types of <br /> course
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

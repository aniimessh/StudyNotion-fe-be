import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HightLightText } from "../components/core/HomePage/HightLightText";
import { CTAButton } from "../components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import { Codeblocks } from "../components/core/HomePage/Codeblocks";
import { TimeLineSection } from "../components/core/HomePage/TimeLineSection";
import { LearningLanguageSection } from "../components/core/HomePage/LearningLanguageSection";
import { InstructorSection } from "../components/core/HomePage/InstructorSection";
import { Footer } from "../components/common/Footer";
import { ExploreMore } from "../components/core/HomePage/ExploreMore";

export const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative mx-auto max-w-maxContent flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="mt-16 p-1 mx-auto rounded-full bg-richblack-700 font-normal transition-all duration-200 hover:scale-95 w-fit shadow-[2px_2px_0px_0px_#1a202c]">
            <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 ">
              <p>Become and Instructor </p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-4">
          Empower Your Future with
          <HightLightText
            text=" Coding Skills"
            startColor="from-[#1FA2FF]"
            endColor="to-[#A6FFCB]"
            fontbold="font-bold"
          />
        </div>

        <div className="mt-4 text-center w-[90%] text-lg">
          <p>
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.{" "}
          </p>
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book Demo
          </CTAButton>
        </div>

        <div className="mx-auto my-4 shadow-[20px_20px_0px_0px_#f7fafc]">
          <video muted loop autoPlay src={Banner} typeof="video/mp4"></video>
        </div>

        <div>
          <Codeblocks
            position={"lg:flex-row"}
            heading={
              <div>
                Unlock your{" "}
                <HightLightText
                  text={"coding potential"}
                  startColor="from-[#1FA2FF]"
                  endColor="to-[#A6FFCB]"
                  fontbold="font-bold"
                />{" "}
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              Text: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              Text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title> Example </title><link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
            codeColor={"text-[#E6C229]"}
          />
        </div>

        <div>
          <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
              <div>
                Start{" "}
                <HightLightText
                  text={"coding in seconds"}
                  startColor="from-[#1FA2FF]"
                  endColor="to-[#A6FFCB]"
                  fontbold="font-bold"
                />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              Text: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              Text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title> Example </title><link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><a href="one/">One</a><a href="two/">Two</a><a href="three/">Three</a>\n</nav>`}
            codeColor={"text-[#E6C229]"}
          />
        </div>

        <ExploreMore />
      </div>

      {/* section 2 */}
      <div className="bg-white">
        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent h-[333px] flex items-center justify-center gap-5 mx-auto">
            <div className="flex gap-7 ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                  Explore Full Catalog <AiOutlineArrowRight />{" "}
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between mt-4">
          <div className="flex gap-5 justify-between mt-[100px]">
            <div className="text-4xl font-bold w-[70%]">
              {" "}
              Get the skills you need for a{" "}
              <HightLightText
                text={"job that is in demand."}
                startColor="from-[#1FA2FF]"
                endColor="to-[#A6FFCB]"
                fontbold="font-bold"
              />
            </div>
            <div className="flex flex-col justify-between items-start gap-10">
              <p>
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </p>
              <CTAButton active={true} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>
          {/* timeline section */}
          <TimeLineSection />
          {/* language section */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* section 3 */}
      <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-5 text-white">
        <InstructorSection />
        <h2 className="text-center text-4xl font-bold mt-10">
          Review from other Learners
        </h2>
        {/* <ReviewSilder/> */}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

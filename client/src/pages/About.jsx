import React from "react";
import { HightLightText } from "../components/core/HomePage/HightLightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundStoryImage from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/StatsComponent";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <>
      <section className="bg-richblack-700">
        <div className="w-10/12 mx-auto relative h-[28.625rem]">
          <header className="text-center w-3/5 mx-auto pt-10">
            <h1 className="font-inter font-medium text-richblack-200">
              About Us
            </h1>
            <p className="text-white font-bold font-inter text-4xl mt-10">
              Driving Innovation in Online Education for a
            </p>
            <span className="text-4xl font-inter font-bold">
              <HightLightText
                text="Brighter Future"
                startColor="from-[#1FA2FF]"
                endColor="to-[#12D8FA]"
              />
            </span>
            <p className="font-inter mt-4 text-richblack-200 font-medium text-base text-center">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="flex gap-x-3 mx-auto justify-center absolute -bottom-40 w-full">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-60 w-10/12 mx-auto">
        <div>
          <Quote />
        </div>
      </section>

      <div className="w-full bg-richblack-600 h-[.5px] mt-20"></div>

      <section className="w-10/12 mx-auto mt-32">
        <div className="flex flex-col">
          <div className="flex items-center w-4/5 mx-auto">
            <div className="flex flex-col gap-6 flex-auto">
              <h1 className="text-4xl font-semibold font-inter  bg-gradient-to-tr  from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text">
                Our Founding Story{" "}
              </h1>
              <p className="w-4/6 text-justify text-richblack-300 font-base font-inter font-medium">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="w-4/6 text-justify text-richblack-300 font-base font-inter font-medium">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div className="w-full">
              <img src={FoundStoryImage} alt="" />
            </div>
          </div>

          <div className="flex w-4/5 mx-auto mt-28 gap-x-24">
            <div>
              <h1 className="text-4xl font-semibold font-inter  bg-gradient-to-tr  from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text">
                Our Vision
              </h1>
              <p className="mt-6 font-inter text-richblack-300 font-medium text-justify">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-semibold font-inter  bg-gradient-to-tr  from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text">
                Our Mission
              </h1>
              <p className="mt-6 font-inter text-richblack-300 font-medium text-justify">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponent />

      <section className="w-4/5 mx-auto mt-20">
        <LearningGrid />
      </section>

      <ContactFormSection />

      <section>
        <div>
          Reviews from other learners
          {/* <ReviewSlider /> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

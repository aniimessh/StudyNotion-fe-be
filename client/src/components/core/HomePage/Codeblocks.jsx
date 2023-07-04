import React from "react";
import { CTAButton } from "./CTAButton";
import { HightLightText } from "./HightLightText";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

export const Codeblocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      <div className="flex flex-col w-[40%] gap-8">
        <p className="text-4xl font-bold">{heading}</p>
        <div className="text-white">
          {subheading}
          <div className="flex gap-7 mt-7">
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
              <div className="flex gap-2 items-center">
                {ctabtn1.Text}
                <AiOutlineArrowRight />
              </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
              <div className="flex gap-2 items-center text-black">{ctabtn2.Text}</div>
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="relative h-fit flex w-[100%] lg:w-[500px] p-2 bg-[#6610F2] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white border-opacity-30 ">
        <div className="absolute rounded-full w-[300px] h-[300px] -top-10 -left-10 bg-gradient-to-r from-[#B700F2] to-[#74009C] -z-20 blur-3xl opacity-70"></div>
        <div className="text flex flex-col w-[5%] text-white font-inte">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[100%] flex flex-col gap-2 font-inte font-bold ${codeColor}`}
        >
          <TypeAnimation
            sequence={[codeblock, 50000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{ whiteSpace: "pre-line", display: "block" }}
            omitDeletionAnimation={true}
          ></TypeAnimation>
        </div>
      </div>
    </div>
  );
};

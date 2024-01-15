import React from "react";
import { HightLightText } from "../HomePage/HightLightText";

const Quote = () => {
  return (
    <div className="text-center font-inter text-4xl font-semibold text-richblack-100 w-4/5 mx-auto">
      '' We are passionate about revolutionizing the way we learn. Our innovative
      platform{" "}
      <HightLightText
        text="combines technology "
        startColor="from-[#1FA2FF]"
        endColor="to-[#12D8FA]"
      />
      ,{" "}
      <HightLightText
        text="expertise"
        startColor="from-[#FF512F]"
        endColor="to-[#F09819]"
      />
      , and community to create an{" "}
      <HightLightText
        text="unparalleled educational experience."
        startColor="from-[#E65C00]"
        endColor="to-[#F9D423]"
      />
      ''
    </div>
  );
};

export default Quote;

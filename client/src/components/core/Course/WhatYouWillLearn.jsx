import React from "react";

const WhatYouWillLearn = ({ coursePageData }) => {
  return (
    <div>
      <p className="text-white font-inter text-2xl">What you'll learn </p>
      <div className="mt-2">
        <p className="text-richblack-300">
          {coursePageData?.whatYouWillLearn}
        </p>
      </div>
    </div>
  );
};

export default WhatYouWillLearn;

import React from "react";

export const HightLightText = ({ text, startColor, color, endColor, fontbold }) => {
  const gradientClass = `bg-gradient-to-r ${startColor} ${endColor} text-transparent bg-clip-text`;

  return <span className={`text-${color} ${gradientClass} ${fontbold}`}>{text}</span>;
};


// 
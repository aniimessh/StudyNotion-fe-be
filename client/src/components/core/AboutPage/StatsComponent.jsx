import React from "react";

const stats = [
  {
    count: "5K",
    label: "Active Students",
  },
  {
    count: "10+",
    label: "Mentors",
  },
  {
    count: "200+",
    label: "Courses",
  },
  {
    count: "50+",
    label: "Awards",
  },
];

const StatsComponent = () => {
  return (
    <section className="bg-richblack-700 flex items-center justify-center mt-20">
      <div className="flex justify-center w-full px-28 py-12">
        <div className="flex w-full justify-between">
          {stats.map((item, index) => (
            <div key={index} className="w-1/2 text-center">
              <h1 className="text-white font-bold text-2xl font-inter">{item.count}</h1>
              <h2 className="text-white font-bold text-lg font-inter opacity-50">{item.label}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;

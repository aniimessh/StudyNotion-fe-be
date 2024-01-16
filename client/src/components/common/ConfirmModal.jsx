import React from "react";
import IconButton from "./IconButton";

const ConfirmModal = ({ modalData }) => {
  return (
    <div className=" fixed inset-0 flex items-center justify-center backdrop-blur-3xl backdrop-opacity-70">
      <div className="w-1/5 bg-richblack-700 flex flex-col gap-y-5 px-6 py-4 rounded-lg border border-richblack-600">
        <p className="text-white font-medium text-2xl font-inter">
          {modalData.text1}
        </p>
        <p className="text-richblack-300 font-inter font-medium">
          {modalData.text2}
        </p>
        <div className="flex gap-x-4">
          <button
            onClick={modalData?.btn1handler}
            className="flex items-center bg-yellow-50 px-6 py-2 rounded-lg font-inter"
          >
            {modalData?.btn1text}
          </button>
          <button
            onClick={modalData?.btn2handler}
            className="text-white font-inter bg-richblack-300 px-6 py-2 rounded-lg"
          >
            {modalData?.btn2text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

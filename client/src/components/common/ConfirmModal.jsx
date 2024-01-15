import React from "react";
import IconButton from "./IconButton";

const ConfirmModal = ({ modalData }) => {
  return (
    <div>
      <div>
        <p>{modalData.text1}</p>
        <p>{modalData.text2}</p>
        <div className="flex gap-x-4">
          <IconButton
            onclick={modalData?.btn1handler}
            text={modalData?.btn1text}
          />
          <button onClick={modalData?.btn2handler}>
            {modalData?.btn2text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

import React from "react";
import { FiEdit } from "react-icons/fi";

const IconButton = ({
  text,
  onclick,
  children,
  disable,
  outline = false,
  cutomClasses,
  type,
}) => {
  return (
    <button disabled={disable} onClick={onclick} type={type}>
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        <span className="flex items-center bg-yellow-50 px-6 py-2 rounded-lg "><FiEdit />{text}</span>
      )}
    </button>
  );
};

export default IconButton;

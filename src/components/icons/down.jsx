import React from "react";

function DownIcon({className}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4.293 8.293a1 1 0 011.414 0L12 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default DownIcon;

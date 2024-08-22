import React from "react";

function RepostIcon({className, stroke, fill}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
            stroke={stroke || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6 5h10a2 2 0 012 2v7M18 19H8a2 2 0 01-2-2v-7"
        ></path>
        <path
            stroke={stroke || "#000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 11l3 3 3-3M9 13l-3-3-3 3"
        ></path>
    </svg>
  );
}

export default RepostIcon;

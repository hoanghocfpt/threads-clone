import React from "react";

function SendIcon({className, stroke, fill}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
            fill={fill || "#000"}
            d="M20.33 3.67a1.45 1.45 0 00-1.47-.35L4.23 8.2A1.44 1.44 0 004 10.85l6.07 3 3 6.09a1.44 1.44 0 001.29.79h.1a1.43 1.43 0 001.26-1l4.95-14.59a1.41 1.41 0 00-.34-1.47zM4.85 9.58l12.77-4.26-7.09 7.09-5.68-2.83zm9.58 9.57l-2.84-5.68 7.09-7.09-4.25 12.77z"
        ></path>
    </svg>
  );
}

export default SendIcon;

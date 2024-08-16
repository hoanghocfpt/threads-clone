import React from "react";

function BarIcon({ className }) {
  return (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            d="M2 9.13h20M2 14.88h11.67"
      ></path>
    </svg>
  );
}

export default BarIcon;
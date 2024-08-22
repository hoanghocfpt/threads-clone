import React from "react";

function MoreIcon({className, fill}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={fill || '#000'} viewBox="0 0 24 24">
        <g>
            <path d="M19 13.93a1.72 1.72 0 01-.39 0 2.72 2.72 0 01-.38-.11 2.27 2.27 0 01-.34-.19 2.42 2.42 0 01-.31-.25 1.76 1.76 0 01-.24-.3 2.37 2.37 0 01-.19-.35 1.58 1.58 0 01-.11-.37 1.72 1.72 0 010-.39 2 2 0 01.58-1.41 1.79 1.79 0 01.31-.25 1.63 1.63 0 01.34-.19 1.82 1.82 0 01.38-.11 2 2 0 011.8.55 2 2 0 010 2.82 2 2 0 01-1.45.55zM12 14a1.72 1.72 0 01-.39 0 1.82 1.82 0 01-.38-.11 1.63 1.63 0 01-.34-.19 1.42 1.42 0 01-.3-.25A2 2 0 0110 12a1.72 1.72 0 010-.39 1.58 1.58 0 01.11-.37 1.48 1.48 0 01.19-.35 2.16 2.16 0 01.55-.55 1.63 1.63 0 01.34-.19 1.82 1.82 0 01.38-.11 2 2 0 011.8.55 1.42 1.42 0 01.25.3 2 2 0 01.19.35 1.58 1.58 0 01.11.37A1.72 1.72 0 0114 12a2 2 0 01-2 2zM5 14.07a2 2 0 01-1.41-.58 1.79 1.79 0 01-.25-.31 2.27 2.27 0 01-.19-.34 1.66 1.66 0 01-.15-.38 1.92 1.92 0 010-.78 1.58 1.58 0 01.11-.37 2.37 2.37 0 01.23-.31 1.42 1.42 0 01.25-.3 2 2 0 012.82 0 1.42 1.42 0 01.25.3 2.37 2.37 0 01.19.35 1.58 1.58 0 01.11.37 1.92 1.92 0 010 .78 1.66 1.66 0 01-.11.38 2.27 2.27 0 01-.19.34 1.79 1.79 0 01-.25.31 2 2 0 01-1.41.54z"></path>
        </g>
    </svg>
  );
}

export default MoreIcon;

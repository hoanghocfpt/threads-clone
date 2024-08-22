import React from "react";

function ChatIcon({className, stroke}) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
            stroke={stroke || "#231F20"}
            strokeWidth="1.5"
            d="M12 3c-4.959 0-9 3.6-9 8.1s4.041 8.1 9 8.1a9.811 9.811 0 002.7-.37l4.131 2.07c.114.062.24.096.369.1a.899.899 0 00.9-1.116l-.954-3.825A7.604 7.604 0 0021 11.099C21 6.6 16.959 3 12 3z"
        ></path>
    </svg>
  );
}

export default ChatIcon;

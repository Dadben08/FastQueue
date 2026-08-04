import React from "react";

const TicketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M10 19l-4 4L2 20l4-4" />
    <path d="M12 2l4 4 4-4-4-4z" />
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M22 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

export default TicketIcon;

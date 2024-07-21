import React from "react";
import { IconProps } from "./types";

const ArrowLeftIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      className={`w-8 h-8 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 12H5" />
      <path d="M12 5l-7 7 7 7" />
    </svg>
  );
};

export default ArrowLeftIcon;
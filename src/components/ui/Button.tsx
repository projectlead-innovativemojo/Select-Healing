import React from "react";

import { cn } from "@/libs/utils/twMerge";
interface ButtonProps {
  text?: string;
  children?: React.ReactNode; // Add children prop
  className?: string;

}

const Button: React.FC<ButtonProps> = ({ text = "Explore Music", children, className }) => {
  return (
    <>
     
      <button className={cn(" w-full h-[65.66px] rounded-[32.83px] bg-[#E0B15E] border-[#E0B15E] border text-[20px] font-poppins font-bold leading-[26px] text-[#FFFFFF]",  className)}>
        {children || text} {/* Use children if available, otherwise use text */}
      </button>
    </>
  );
};

export default Button;

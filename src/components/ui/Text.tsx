import React, { forwardRef } from "react";

import { cn } from "@/libs/utils/twMerge";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: any;
  id?:string
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onClick,id="" } = props;

    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-bold  text-[64px] leading-[83.2px] text-[#041F60] font-libre   ",
            className
          )}
          onClick={onClick}
          id={id}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-bold font-Poppins text-[32px] leading-[41.6px] text-[#041F60]  ",
            className
          )}
          id={id}
          onClick={onClick}
        >
          {children}
        </h2>
      );
    }

    return (
      <p
        ref={ref}
        className={cn(
          "   text-[#FFFFFF] text-[20px] font-normal leading-[26px] font-Poppins  ",
          className
        )}
        onClick={onClick}
        id={id}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
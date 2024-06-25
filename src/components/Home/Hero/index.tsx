"use client";
import React, { useRef } from "react";
import Image from "next/image";

import bg from "@/public/images/home/herobg.png";
import headingbg from "@/public/images/home/headingbg.png";

import Navbar from "@/components/Navbar";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface HeroProps {
  scrollToWorkshops: () => void;
}
const Hero: React.FC<HeroProps> = ({ scrollToWorkshops }) => {
  const handleClick = () => {
    if (window.innerWidth <= 768) { // Adjust this value based on your mobile breakpoint
      scrollToWorkshops();
    }
  };
  return (
    <div className="relative min-h-[100vh] mob:min-h-[600px]">
      <Navbar />
      <div onClick={handleClick} className=" w-full flex items-center  min-h-[70vh] mob:min-h-[500px]">
        <Image
          className="absolute object-cover bg-center w-full  h-full top-0 z-0"
          src={bg}
          alt=""
          width={2114}
          height={1037.58}
        />

        {/* content */}
        <div className="relative z-10 flex justify-center items-center w-full pt-[50px] pb-[70px] mob:px-5 ">
          <div className="max-w-[906.89px] w-full">
            <Text
              as="h1"
              className="max-w-[688.48px] relative  mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
            >
              <span className="relative z-10 ]">
                {" "}
                Start Today, ​Transform ​Your Health And Your Life.
              </span>
              <Image
                className="absolute  top-[53%] -left-5 mob:left-0 z-0"
                src={headingbg}
                alt=""
                width={403.59}
                height={38.1}
              />
            </Text>
            <div className="mob:flex mob:justify-center">
              <button
                onClick={scrollToWorkshops}
                onTouchStart={scrollToWorkshops}
                className="max-w-[231.75px] relative z-50 mt-5 w-full h-[65.66px] rounded-[32.83px] bg-[#E0B15E] border-[#E0B15E] border text-[20px] font-poppins font-bold leading-[26px] text-[#FFFFFF]"
              >
                Find Out How
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

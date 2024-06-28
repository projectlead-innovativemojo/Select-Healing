"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import bg from "@/public/images/home/herobg.png";
import headingbg from "@/public/images/home/headingbg.png";

import Navbar from "@/components/Navbar";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import SlideContent from "./SlideContent";
import Link from "next/link";

interface HeroProps {
  scrollToWorkshops: () => void;
}
const Hero: React.FC<HeroProps> = ({ scrollToWorkshops }) => {

  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative min-h-[100vh] mob:min-h-[600px]">
      <Navbar />
      <Image
          className="absolute object-cover bg-center w-full  h-full top-0 z-0"
          src={bg}
          alt=""
          width={2114}
          height={1037.58}
        />
      <div className=" w-full   min-h-[70vh] heroswipe mob:min-h-[500px]  text-container mob:flex mob:items-center  ">
        

        {/* content */}

     
        <div 
         className={`absolute z-10 flex justify-center items-center w-full mb-[50px] mob:mb-0 pb-[70px] mob:px-5 ${
          showFirstText ? 'fade-in' : 'fade-out'
        }`}
       >
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

        {/*  */}

        <div  
         className={`absolute z-10 flex justify-center items-center w-full mb-[50px] mob:mb-0 pb-[70px] mob:px-5   ${
          showFirstText ? 'fade-out' : 'fade-in'
        }`}>
          <div className="max-w-[906.89px] w-full">
            <Text
              as="h1"
              className="max-w-[688.48px] relative  mob:text-[35px] mob:leading-[45px] mob:max-w-full mob:text-center"
            >
              <span className="relative z-10 ]"> Upcoming Retreat</span>
              <Image
                className="absolute  top-[53%] -left-5 mob:left-0 z-0"
                src={headingbg}
                alt=""
                width={403.59}
                height={38.1}
              />
            </Text>
            <Text
              as="h1"
              className="max-w-[688.48px] relative font-bold text-[30px] mob:text-[25px] mob:leading-[45px] mob:max-w-full mob:text-center mt-5 mb-5"
            >
                Date:
              <span className="relative z-10 font-medium">
                {" "}
                 September <br className="hidden mob:block" /> 18 – 22, 2024
              </span>
              <br />
              Location: <br className="hidden mob:block" /> 
              <span className="relative z-10 font-medium">
                {" "}
                Sun Valley, Idaho
              </span>
              
            </Text>
            <div className="flex flex-wrap gap-6 mob:gap-2 mob:justify-center">
              <div className="flex-col w-full max-w-[200.75px]">
              <Link href="https://www.selecthealing.com/events">
                <button className="max-w-[200.75px] relative z-50 mt-5 w-full h-[55.66px] rounded-[32.83px] bg-[#E0B15E] border-[#E0B15E] border text-[20px] font-poppins font-bold leading-[26px] text-[#FFFFFF]">
                  Learn More
                </button>
                </Link>
              </div>

              <div className="flex-col w-full max-w-[200.75px]">
              <Link href="https://buy.stripe.com/aEU9B37Xbburecg3cn">
                <button className="max-w-[200.75px] relative z-50 mt-5 w-full h-[55.66px] rounded-[32.83px] bg-[#E0B15E] border-[#E0B15E] border text-[20px] font-poppins font-bold leading-[26px] text-[#FFFFFF]">
                  Register Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <SlideContent scrollToWorkshops={scrollToWorkshops} /> */}
      </div>
    </div>
  );
};

export default Hero;

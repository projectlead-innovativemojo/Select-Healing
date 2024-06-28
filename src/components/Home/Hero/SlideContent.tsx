"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

import bg from "@/public/images/home/herobg.png";
import headingbg from "@/public/images/home/headingbg.png";
import prevar from "@/public/images/home/arrowleft.png";
import forwadar from "@/public/images/home/arrowright.png";
import Link from "next/link";

interface HeroProps {
  scrollToWorkshops: () => void;
}
const Slider: React.FC<HeroProps> = ({ scrollToWorkshops }) => {
  const handleClick = () => {
    if (window.innerWidth <= 768) {
      scrollToWorkshops();
    }
  };

  return (
    <Swiper
      className="portfolioSlider"
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
      // navigation={{
      //   nextEl: ".custom-next",
      //   prevEl: ".custom-prev",
      // }}
      spaceBetween={2}
      slidesPerView={1}
    //   pagination={{ clickable: true }}
      speed={2000}
      autoplay={{
          delay: 4000,
        }}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },

        1200: {
          slidesPerView: 1,
        },
      }}
    >
      <SwiperSlide className="mob:px-[20px] flex justify-center items-center">
        <div className="relative z-10 flex justify-center items-center w-full mb-[50px] mob:mb-0 pb-[70px] mob:px-5 ">
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
      </SwiperSlide>

      <SwiperSlide className="mob:px-[20px] flex justify-center items-center ">
        <div className="relative z-10 flex justify-center items-center w-full mb-[50px] mob:mb-0 pb-[70px] mob:px-5 ">
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
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

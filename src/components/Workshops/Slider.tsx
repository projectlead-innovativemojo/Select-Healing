"use client";

"use client"
import React, { useRef } from "react";
import Image from "next/image";


import headingbg from "@/public/images/home/headingbg.png";
import j1 from "@/public/images/home/kamar.png";
import j2 from "@/public/images/home/tn2.png";
import j3 from "@/public/images/home/tn3.png";
import j4 from "@/public/images/home/tn4.png";
import Button from "../ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
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
import Text from "../ui/Text";
import Link from "next/link";


const Slider = () => {
  return (
    <div className=" flex justify-center px-5">
       <div className="w-full flex flex-wrap  justify-between mb-28 max-w-[1300px] lg:justify-center lg:gap-14">

      <Swiper
        className="portfolioSlider"
        loop={true}
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          Mousewheel,
        ]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        // direction="vertical"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
        // mousewheel={{ invert: true }}
      >
           {/* 1 */}
        <SwiperSlide >
           <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j1} alt="" width={427.09} height={289.44} />
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] my-4">
            Discussing the Degenerative Hip
            </Text>
            <Link href="https://www.selecthealing.com/offers/wxDLS9YR" className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
              </Link>
          </div>

        </SwiperSlide>
          {/* 2 */}
        <SwiperSlide >
          <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j2} alt="" width={427.09} height={289.44} />
          
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] pb-[1px] my-4">
            Exercise Dissection Workshop
            </Text>
            <Link href="https://www.selecthealing.com/offers/rpzxMFnZ" className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </Link>
          </div>
        </SwiperSlide>
          {/* 3 */}
        <SwiperSlide >
           <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j3} alt="" width={427.09} height={289.44} />
           
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] pb-[1px] my-4">
            Discovering the <br /> Postural Nuances
            </Text>
            <Link href="https://www.selecthealing.com/offers/i6JXiBji" className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </Link>
          </div>

        </SwiperSlide>
          {/* 4 */}
        <SwiperSlide >
        <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j4} alt="" width={427.09} height={289.44} />
           
            <Text as="h2" className="text-center text-[24px] leading-[31.2px] pb-[1px] my-5">
            Examining the Shoulder Girdle
            </Text>
            <Link href="https://www.selecthealing.com/offers/uvtPUKaL" className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </Link>
          </div>
        </SwiperSlide>
     
        
      </Swiper>
    </div>
    </div>
  );
};

export default Slider;

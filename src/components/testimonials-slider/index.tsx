"use client";

import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Text from "../ui/Text";
import moveprevbtn from "@/public/moveBack.svg";
import movenextbtn from "@/public/moveNext.svg";
import headingbg from "@/public/images/home/headingbg.png";
import qutationsvg from "@/public/qutation.svg";
import sliderImage from "@/public/sliderImage.png";

function TestimonialSlider() {
  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  const CustomPagination = () => (
    <div className="custom-pagination flex justify-center items-center mt-8 "></div>
  );

  return (
    <div className="parent-div bg-[#F0F3FF] pt-[123px] pb-[123px]">
      <div className="swiper-main-div">
        <div className=" mb-[72px] mob:mb-0">
          <div className="  mob:mt-14 2xl:gap-0 flex items-center mob:px-0 justify-center gap-[722px] tab:flex-col mob:flex-col mob:gap-0 tab:gap-10 ">
            <div className="flex flex-col relative">
              <Text as="h1" className=" mob:text-[40px]">
                Testimonials
              </Text>
              <Image
                src={headingbg}
                alt="headingbg"
                width={486}
                height={38}
                className=" absolute top-12"
              />
            </div>
            <div className="flex gap-[18px] mob:gap-10">
              <div
                onClick={handleprevbtn}
                className="w[59px] h-[59px] mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center  py-4 px-[22px]"
              >
                <Image
                  className="custom-prev"
                  src={moveprevbtn}
                  alt="moveprevbtn"
                  width={13}
                  height={24}
                />
              </div>
              <div
                onClick={handleNextvbtn}
                className="w[59px] h-[59px] mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center  py-4 px-[22px]"
              >
                <Image
                  className="custom-next"
                  src={movenextbtn}
                  alt="movenextbtn"
                  width={13}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={3}
          // activeIndex={activeIndex}
          //   initialSlide={1}
          spaceBetween={40}
          centeredSlides={true}
          // slidesPerGroupSkip={3}
          // scrollbar={true}
          loop={true}
          //   pagination={{
          //     dynamicBullets: true,
          //   }}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Keyboard, Navigation, Scrollbar, Pagination]}
          pagination={{ el: ".custom-pagination", clickable: true }}
          className="mySwiper max-w-[1480px] "
        >
          <div>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center  ">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and services credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center ">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and service&apos;s credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center ">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and service&apos;s credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center ">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and service&apos;s credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center ">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and service&apos;s credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center">
                <div className="flex gap-[6px] relative justify-center top-10">
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px] "
                  />
                  <Image
                    src={qutationsvg}
                    alt="qutationsvg"
                    className=" w-[50px] h-[87px]"
                  />
                </div>
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[333px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto"
                  >
                    Boost your product and service&apos;s credibility by adding
                    testimonials from your clients. People love recommendations
                    so feedback from others who&apos;ve tried it is invaluable.
                  </Text>
                  <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <CustomPagination />
      </div>
    </div>
  );
}

export default TestimonialSlider;

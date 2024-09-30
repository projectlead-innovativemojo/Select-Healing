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
import { useState } from "react";

// function TestimonialSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiper = useSwiper();

//   const handlePrevBtn = () => {
//     swiper?.slidePrev();
//   };

//   const handleNextBtn = () => {
//     swiper?.slideNext();
//   };

//   const CustomPagination = () => {
//     const totalSlides = 4; // Total number of slides
//     const dots = [];
//     for (let i = 0; i < 3; i++) {
//       dots.push(
//         <div
//           key={i}
//           className={`swiper-pagination-bullet mx-1 ${
//             i === activeIndex ? 'swiper-pagination-bullet-active ' : ''
//           }`}
//           onClick={() => {
//             const newIndex = i + 1;
//             swiper?.slideTo(newIndex);
//             setActiveIndex(i);
//           }}
//         />
//       );
//     }
//     return (
//       <div className=" custom-pagination w-full   flex justify-center items-center mt-8">
//         {dots}
//       </div>
//     );
//   };

//   return (
//     <div className="parent-div bg-[#F0F3FF] pt-[80px] pb-[80px] mb-16 ">
//       <div className="swiper-main-div">
//         <div className=" mb-[72px] mob:mb-0 flex justify-center w-full">
//           <div className=" mob:mt-14 xl:gap-0 flex w-full items-center mob:px-0 justify-between max-w-[1140.36px] px-5 tab:flex-col mob:flex-col mob:gap-0 tab:gap-10 ">
//             <div className="flex flex-col relative">
//               <Text as="h1" className=" mob:text-[40px]">
//                 Testimonials
//               </Text>
//               <Image
//                 src={headingbg}
//                 alt="headingbg"
//                 width={486}
//                 height={38}
//                 className=" absolute top-12"
//               />
//             </div>
//             <div className="flex gap-[18px] mob:gap-10">
//               <div
//                 onClick={handlePrevBtn}
//                 className="w-[59px] h-[59px] custom-prev mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center py-4 px-[22px] cursor-pointer"
//               >
//                 <Image
//                   src={moveprevbtn}
//                   alt="moveprevbtn"
//                   width={13}
//                   height={24}
//                 />
//               </div>
//               <div
//                 onClick={handleNextBtn}
//                 className="w-[59px] h-[59px] custom-next mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center py-4 px-[22px] cursor-pointer"
//               >
//                 <Image
//                   src={movenextbtn}
//                   alt="movenextbtn"
//                   width={13}
//                   height={24}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <Swiper
//           slidesPerView={3}
//           spaceBetween={40}
//           centeredSlides={true}
//           loop={true}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % 3)}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 1,
//             },
//             1280: {
//               slidesPerView: 3,
//             },
//           }}
//           modules={[Keyboard, Navigation, Scrollbar, Pagination]}
//           pagination={{ el: ".custom-pagination", clickable: true }}
//           className="mySwiper max-w-[1480px] relative"
//         >
//           <div>
//             <SwiperSlide>
//               <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center  ">
//                 <div className="flex gap-[6px] relative justify-center top-10">
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px] "
//                   />
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px]"
//                   />
//                 </div>
//                 <div className="bg-white rounded-[20px] max-w-[686px] flex justify-center items-center px-[10px] flex-col min-h-[450px]">
//                   <Text
//                     as="p"
//                     className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
//                   >
//                     David gave me the tools, the stretches, the mindset and the power to heal, recover and come back stronger. 
//                     The mind-body connection is everything and David Starbuck Smith is the pain free expert.
//                   </Text>
//                   <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Nikki N.</Text>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center ">
//                 <div className="flex gap-[6px] relative justify-center top-10">
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px] "
//                   />
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px]"
//                   />
//                 </div>
//                 <div className="bg-white rounded-[20px] max-w-[686px] min-h-[450px] flex justify-center items-center px-[10px] flex-col">
//                   <Text
//                     as="p"
//                     className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
//                   >
//                     This program offered great guidance and advice on the mind/body connection through the exercises, meditation, and overall knowledge David offered. Each class gave me easy action steps I feel I will use for many years to come!
//                   </Text>
//                   <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Lisa F</Text>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center  ">
//                 <div className="flex gap-[6px] relative justify-center top-10">
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px] "
//                   />
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px]"
//                   />
//                 </div>
//                 <div className="bg-white rounded-[20px] max-w-[686px] flex justify-center items-center px-[10px] flex-col min-h-[450px]">
//                   <Text
//                     as="p"
//                     className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
//                   >
//                     David gave me the tools, the stretches, the mindset and the power to heal, recover and come back stronger. 
//                     The mind-body connection is everything and David Starbuck Smith is the pain free expert.
//                   </Text>
//                   <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Nikki N.</Text>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className=" flex flex-col justify-center mob:p-[10px] tab:items-center 2xl:items-center  ">
//                 <div className="flex gap-[6px] relative justify-center top-10">
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px] "
//                   />
//                   <Image
//                     src={qutationsvg}
//                     alt="qutationsvg"
//                     className=" w-[50px] h-[87px]"
//                   />
//                 </div>
//                 <div className="bg-white rounded-[20px] max-w-[686px] flex justify-center items-center px-[10px] flex-col min-h-[450px]">
//                   <Text
//                     as="p"
//                     className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
//                   >
//                     David gave me the tools, the stretches, the mindset and the power to heal, recover and come back stronger. 
//                     The mind-body connection is everything and David Starbuck Smith is the pain free expert.
//                   </Text>
//                   <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Nikki N.</Text>
//                 </div>
//               </div>
//             </SwiperSlide>
           
//           </div>
//         </Swiper>
//         <CustomPagination />
//       </div>
//     </div>
//   );
// }

// export default TestimonialSlider;


function TestimonialSlider() {
  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  const CustomPagination = () => (
    <div className="custom-pagination flex justify-center items-center  "></div>
  );

  return (
    <div className="parent-div bg-[#F0F3FF] pt-[80px] pb-[80px] mb-16">
      <div className="swiper-main-div">
        <div className=" mb-[72px] mob:mb-0 flex justify-center w-full">
          <div className="  mob:mt-14 xl:gap-0 flex w-full items-center mob:px-0 justify-between max-w-[1140.36px] px-5 tab:flex-col mob:flex-col mob:gap-0 tab:gap-10 ">
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
                className="w-[59px] h-[59px] custom-prev  mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center  py-4 px-[22px] cursor-pointer"
              >
                <Image
                  // className="custom-prev"
                  src={moveprevbtn}
                  alt="moveprevbtn"
                  width={13}
                  height={24}
                />
              </div>
              <div
                onClick={handleNextvbtn}
                className="w-[59px] h-[59px] custom-next mob:w-[55px] mob:h-[55px] rounded-[100px] border-[1px] border-[#041F60] flex justify-center items-center  py-4 px-[22px] cursor-pointer"
              >
                <Image
                  // className="custom-next"
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
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
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
                <div className="bg-white rounded-[20px] max-w-[686px] flex justify-center items-center px-[10px] flex-col min-h-[495px]">
                  <Text
                    as="p"
                    className="text-[#041F60] text-[19px] pt-[100px] text-center max-w-[368px] m-auto px-3"
                  >
                David gave me the tools, the stretches, the mindset and the power to heal, recover and come back stronger.
                The mind-body connection is everything and David Starbuck Smith is the pain free expert.
                  </Text>
                  {/* <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  /> */}
                  <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Nikki N.</Text>
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
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[495px] flex justify-center items-center px-[10px] flex-col">
                <Text
        as="p"
        className="text-[#041F60] pt-[100px] text-[19px] text-center max-w-[368px] m-auto px-3"
      >
       When you are in pain you get to a place where things aren’t working and you are scared. you will do whatever it takes to get out of that pain. but this felt different than anything else I’ve tried before. this gave me my life back in my 30s - I went from not being able to do anything physical to surfing and cycling...
       </Text>
      <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">
        Katie&nbsp;S
      </Text>
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
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[495px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
                  >
              This program offered great guidance and advice on the mind/body connection through the exercises, meditation, and overall knowledge David offered. each class gave me easy action steps I feel I will use for many years to come!
                </Text>
                  {/* <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  /> */}
                  <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Lisa F</Text>

                </div>
              </div>
            </SwiperSlide>
          
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
                <div className="bg-white rounded-[20px] max-w-[686px] flex justify-center items-center px-[10px] flex-col min-h-[495px]">
                  <Text
                    as="p"
                    className="text-[#041F60] text-[19px] pt-[100px] text-center max-w-[368px] m-auto px-3"
                  >
                 David gave me the tools, the stretches, the mindset and the power to heal, recover and come back stronger.
                 The mind-body connection is everything and David Starbuck Smith is the pain free expert.
                  </Text>
                  {/* <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  /> */}
                  <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Nikki N.</Text>
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
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[495px] flex justify-center items-center px-[10px] flex-col">
                <Text
        as="p"
        className="text-[#041F60] pt-[100px] text-[19px] text-center max-w-[368px] m-auto px-3"
      >
       When you are in pain you get to a place where things aren’t working and you are scared. you will do whatever it takes to get out of that pain. but this felt different than anything else I’ve tried before. this gave me my life back in my 30s - I went from not being able to do anything physical to surfing and cycling...
           </Text>
      <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">
        Katie&nbsp;S
      </Text>
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
                <div className="bg-white rounded-[20px] max-w-[686px] min-h-[495px] flex justify-center items-center px-[10px] flex-col">
                  <Text
                    as="p"
                    className="text-[#041F60] pt-[100px] text-center max-w-[368px] m-auto px-3"
                  >
             this program offered great guidance and advice on the mind/body connection through the exercises, meditation, and overall knowledge David offered. each class gave me easy action steps I feel I will use for many years to come!
                 </Text>
                  {/* <Image
                    src={sliderImage}
                    alt="sliderImage"
                    width={69}
                    height={69}
                    className=" pb-[53px] pt-5"
                  /> */}
                  <Text as="h2" className="text-[#000] font-bold pb-[53px] pt-5">Lisa F</Text>

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

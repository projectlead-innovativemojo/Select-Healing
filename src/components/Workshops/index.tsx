"use client"
import React, { useRef } from "react";
import Image from "next/image";

import Text from "../ui/Text";

import headingbg from "@/public/images/home/headingbg.png";
import j1 from "@/public/images/home/tn1.png";
import j2 from "@/public/images/home/tn2.png";
import j3 from "@/public/images/home/tn3.png";
import j4 from "@/public/images/home/tn4.png";
import Button from "../ui/Button";
import Slider from "./Slider";

const Workshops = () => {
  const targetRef = useRef(null);


  return (
    <>
      <div ref={targetRef} className="flex justify-center mb-16 px-5">
        <Text
          as="h1"
          className="max-w-[919.91px] relative text-center mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
        >
          <span className="relative z-10 ]">
            {" "}
            Courses and Workshops for Health Practitioners.
          </span>
          <Image
            className="absolute  bottom-[0] left-[30%] mob:left-0 z-0"
            src={headingbg}
            alt=""
            width={403.59}
            height={38.1}
          />
        </Text>
      </div>

      {/* <div className="flex justify-center px-5">
     
       <div className="mb-10">
       <Content
          heading="Creating Postural Therapy Routines"
          text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgpath={postural}
        />
       <Content
          heading="Exercise Dissection"
          text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgpath={exercise}
        />
       <Content
          heading="Discovering the Postural Nuances"
          text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgpath={discovering}
        />
       <Content
          heading="Shoulder Girdle"
          text="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imgpath={shoulder}
        />
       </div>

     <div className="w-full flex flex-wrap  justify-between mb-28 max-w-[1300px] lg:justify-center lg:gap-14">
          <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j1} alt="" width={427.09} height={289.44} />
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] my-4">
            Creating Postural Therapy Routines
            </Text>
            <div className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </div>
          </div>

          <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j2} alt="" width={427.09} height={289.44} />
          
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] my-[37px]">
            Exercise Dissection
            </Text>
            <div className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </div>
          </div>

          <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j3} alt="" width={427.09} height={289.44} />
           
            <Text as="h2" className="text-center leading-[31.2px] text-[24px] my-4">
            Discovering the <br /> Postural Nuances
            </Text>
            <div className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </div>
          </div>

          <div className="flex-col w-full max-w-[280.09px]">
            <Image src={j4} alt="" width={427.09} height={289.44} />
           
            <Text as="h2" className="text-center text-[24px] leading-[31.2px] my-[37px]">
            Shoulder Girdle
            </Text>
            <div className="flex justify-center ">
              <Button className="max-w-[235.55px] h-[65.66px] bg-[#041F60]">
                Enroll Now
              </Button>
            </div>
          </div>

        </div>
      </div> */}
      <Slider/>
    </>
  );
};

export default Workshops;

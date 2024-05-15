import React from "react";
import Image from "next/image";

import headingbg from "@/public/images/home/headingbg.png";
import banner from "@/public/images/home/youcan.png";
import circle from "@/public/images/home/circle.png";

import Text from "../ui/Text";
import Content from "./Content";
const Youcan = () => {
  return (
    <>
      <div className="flex justify-center w-full -mt-32 pb-32">
        <div className="max-w-[1440px] w-full px-5">
          {/* <Image
            className="cursor-pointer"
            src={banner}
            alt=""
            width={1607.34}
            height={1182.23}
          /> */}
      <video
      className="cursor-pointer rounded-[30px] w-full"
      src=""
      poster="/images/home/youcan.png" 
      width={1607.34}
      height={1182.23}
      loop
      playsInline
      controls
    >
     
    </video>
          <div className="flex justify-center my-12">
            <Text
              as="h1"
              className="max-w-[919.91px] relative text-center mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
            >
              <span className="relative z-10 ]"> You can...</span>
              <Image
                className="absolute  bottom-[0] -left-[8%]  z-0"
                src={headingbg}
                alt=""
                width={403.59}
                height={38.1}
              />
            </Text>
          </div>
          {/*  */}
          <div className="flex flex-wrap justify-center gap-16">
            <Content text="Lasting Pain Relief" imgpath={circle} />
            <Content text="Improved Quality of Life" imgpath={circle} />
            <Content text="Regain Control" imgpath={circle} />
            <Content text="Reduce Dependency" imgpath={circle} />
            <Content text="Prevent Future Pain" imgpath={circle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Youcan;

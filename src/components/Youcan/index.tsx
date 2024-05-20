import React from "react";
import Image from "next/image";

import headingbg from "@/public/images/home/headingbg.png";
import banner from "@/public/images/home/youcan.png";
import icon1 from "@/public/images/home/icon1.png";
import icon2 from "@/public/images/home/icon2.png";
import icon3 from "@/public/images/home/icon3.png";
import icon4 from "@/public/images/home/icon4.png";
import icon5 from "@/public/images/home/icon5.png";

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
      src="https://emmesolutions.my.canva.site/videos/c2ba35cc1a6ac6c8176307bc83411ebb.mp4"
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
            <Content text="Achieve Lasting Pain Relief" imgpath={icon1} />
            <Content text="Improve Quality of Life" imgpath={icon2} />
            <Content text="Regain Control" imgpath={icon3} />
            <Content text="Reduce Dependency" imgpath={icon4} />
            <Content text="Prevent Future Pain" imgpath={icon5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Youcan;

import React from "react";
import Image from "next/image";

import bg from "@/public/images/home/herobg.png";
import headingbg from "@/public/images/home/headingbg.png";

import Navbar from "@/components/Navbar";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100vh] mob:min-h-[600px]">
      <Navbar />
      <Image
        className="absolute object-cover bg-center w-full  h-full top-0 z-0"
        src={bg}
        alt=""
        width={2114}
        height={1037.58}
      />

      {/* content */}
      <div className="relative z-10 flex justify-center items-center w-full pt-[50px] pb-[50px] mob:px-5 ">
        <div className="max-w-[906.89px] w-full">
          <Text as="h1" className="max-w-[688.48px] relative  mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center">
            <span className="relative z-10 ]">
              {" "}
              Start Today, ​Transform ​Your Body ​And Your Life.
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
<Button className="max-w-[231.75px] mt-5">Find Out How</Button>
</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

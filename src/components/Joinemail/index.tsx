import React from "react";
import Image from "next/image";

import headingbg from "@/public/images/home/headingbg.png";
import headingbgblue from "@/public/images/home/headingbgblue.png";
import icon from "@/public/images/home/Ellipse 302.svg";
import blue from "@/public/images/home/blue.svg";

import Text from "../ui/Text";

const Joinemail = () => {
  return (
    <>
      <div className="flex xl:flex-wrap  gap-10 justify-center mb-32 px-5">
      <div className="flex-col min-h-[500.04px] mob:min-h-full mob:py-10 py-2 rounded-[30px] bg-[#041F60] flex items-center justify-center">
          <div className=" max-w-[695.46px] px-12 mob:px-4 overflow-hidden">
            <div className="flex justify-center mob:mb-8 mb-12">
              <Text
                as="h1"
                className="max-w-[760.91px] relative text-center text-[#FFFFFF] text-[38px] mob:text-[20px] leading-[62.4px] mob:leading-[35px] mob:max-w-full mob:text-center"
              >
                <span className="relative z-10 ]">
                  {" "}
                  Join Our Email List For Weekly Newsletters And ​Updates On
                  Select Healing ​Specials And Events.
                </span>
                <Image
                  className="absolute  bottom-[46%] left-[32%]  z-0 mob:hidden"
                  src={headingbg}
                  alt=""
                  width={342.74}
                  height={38.1}
                />
              </Text>
            </div>
            <div className="relative flex items-center">
              <input
                className="px-12 w-full h-[65.66px] bg-[#FFFFFF] outline-none rounded-[32.83px] "
                type="email"
                placeholder="Enter Your Email..."
              />
              <Image className="absolute right-4 cursor-pointer" src={icon} alt="" width={45.45} height={45.45} />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="flex-col min-h-[500.04px] mob:min-h-full py-4 mob:py-10 rounded-[30px] bg-[#E0B15E] flex items-center justify-center">
          <div className=" max-w-[600.42px] px-12 mob:px-4 overflow-hidden ">
            <div className="flex justify-center my-12 mob:mb-8 mob:mt-0">
              <Text
                as="h1"
                className="max-w-[760.91px] relative text-center text-[#FFFFFF] text-[38px] mob:text-[20px] leading-[62.4px] mob:leading-[35px] mob:max-w-full mob:text-center"
              >
                <span className="relative z-10 ]">
                  {" "}
                  Follow Select ​Healing For Tips On ​Living A Pain-Free ​Life!
                </span>
                <Image
                  className="absolute  top-[18%] left-[0%]  z-0 mob:hidden"
                  src={headingbgblue}
                  alt=""
                  width={170.24}
                  height={26.86}
                />
              </Text>
            </div>
            <div className="relative flex items-center justify-center gap-8">
            <Image
                  src={blue}
                  alt=""
                  width={63.94}
                  height={63.94}
                />
            <Image
                  src={blue}
                  alt=""
                  width={63.94}
                  height={63.94}
                />
            <Image
                  src={blue}
                  alt=""
                  width={63.94}
                  height={63.94}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinemail;

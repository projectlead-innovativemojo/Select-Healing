import React from "react";
import Image from "next/image";

import Text from "../ui/Text";
import Button from "../ui/Button";

import headingbg from "@/public/images/home/headingbg.png";
import j1 from "@/public/images/home/j1.png";
import j2 from "@/public/images/home/j2.png";
import j3 from "@/public/images/home/j3.png";

const Journey = () => {
  return (
    <div className="flex justify-center">
      <div className="py-32 px-5 max-w-[1440.36px]">
        <div className="flex justify-center">
          <Text
            as="h1"
            className="max-w-[919.91px] relative text-center mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
          >
            <span className="relative z-10 ]">
              {" "}
              Your Learning Journey to Pain ​Free Living
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

        <div className="w-full flex flex-wrap gap-14 pt-16 ">
            {/* 1 */}
          <div className="flex-col w-full max-w-[370.09px]">
            <Image src={j1} alt="" width={427.09} height={289.44} />
            <Text
              as="p"
              className="text-[#041F60] text-center leading-[26px] mt-10"
            >
              Select Healing:
            </Text>
            <Text as="h2" className="text-center">
              Back Pain
            </Text>
            <div className="flex justify-center mt-8">
              <Button className="max-w-[235.55px] h-[65.66px]">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* 2 */}
          <div className="flex-col w-full max-w-[370.09px]">
            <Image src={j2} alt="" width={427.09} height={289.44} />
            <Text
              as="p"
              className="text-[#041F60] text-center leading-[26px] mt-10"
            >
              Select Healing:
            </Text>
            <Text as="h2" className="text-center">
            Sunday Stretch 
            </Text>
            <div className="flex justify-center mt-8">
              <Button className="max-w-[235.55px] h-[65.66px]">
                Enroll Now
              </Button>
            </div>
          </div>

          {/* 3 */}
          <div className="flex-col w-full max-w-[370.09px]">
            <Image src={j3} alt="" width={427.09} height={289.44} />
            <Text
              as="p"
              className="text-[#041F60] text-center leading-[26px] mt-10"
            >
              Select Healing:
            </Text>
            <Text as="h2" className="text-center">
            Connect
            </Text>
            <div className="flex justify-center mt-8">
              <Button className="max-w-[235.55px] h-[65.66px]">
                Enroll Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Journey;

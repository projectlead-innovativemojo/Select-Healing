import React, { FC } from "react";
import Image from "next/image";

import Text from "../ui/Text";
import Button from "../ui/Button";

import headingbg from "@/public/images/home/headingbg.png";
import j1 from "@/public/images/home/backpain.png";
import j2 from "@/public/images/home/sindaystretch.png";
import j3 from "@/public/images/home/connect.png";
import Link from "next/link";
interface JourneyProps {
  refvalue: React.RefObject<HTMLDivElement>;
}

const Journey: FC<JourneyProps> = ({ refvalue }) => {

  return (

    <>
     <div className=" flex justify-center -mt-16">
     <video
      className="cursor-pointer max-w-[58%] rounded-[30px] w-full mob:max-w-[90%]"
      src="https://emmesolutions.my.canva.site/videos/c2ba35cc1a6ac6c8176307bc83411ebb.mp4"
      poster="/images/home/youcan.png" 
      width={1607.34}
      height={1182.23}
      loop
      playsInline
      controls
    >
     
    </video>
     </div>
    <div className="flex justify-center" ref={refvalue}>
      <div className="pb-32 pt-10 px-5 max-w-[1440.36px]">

        
        <div className="flex justify-center">
          <Text
            as="h1"
            className="max-w-[919.91px] relative text-center mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
          >
            <span className="relative z-10 ]">
              {" "}
              Pathways to Self-Healing and Transformation.
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

        <div className="w-full flex flex-wrap justify-center gap-14 pt-16 ">
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
            <Link href="https://www.selecthealing.com/healing-back-pain-5045b7e2-262c-428c-a825-42d1048fba17" className="flex justify-center mt-8">
              <Button className="max-w-[235.55px] h-[65.66px]">
              Enroll Now
              </Button>
            </Link>
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
            <Link href="https://www.selecthealing.com/offers/GWw5J6iS/checkout" className="flex justify-center mt-8">
              <Button className="max-w-[235.55px] h-[65.66px]">
              Enroll Now
              </Button>
            </Link>
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
    </>
    
  );
};

export default Journey;

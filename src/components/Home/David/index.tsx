import React from "react";
import Image from "next/image";

import david from "@/public/images/home/david.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const David = () => {
  return (
    <>
      <div className="bg-[#041F60] py-24 flex justify-center w-full px-5">
        <div className="max-w-[1400.7px]  w-full flex lg:block gap-[50px]">
          {/* left */}
          <div className="lg:w-full lg:flex lg:justify-center  ">
            <Image src={david} alt="" width={636.11} height={677.07} />
          </div>

          {/* right */}
          <div className="max-w-[750.59px] w-full lg:flex lg:justify-center lg:max-w-full lg:mt-10">
          <div className="w-full max-w-[750.59px]">
            <Text
              as="p"
              className="text-[#FFFFFF] text-[32px] font-poppins leading-[41.6px] mob:text-center"
            >
              Hi, there.
            </Text>
            <Text as="h1" className="text-[#E0B15E] my-3 mob:text-center mob:text-[40px] mob:leading-[50px]">
              I'm David <br /> Starbuck Smith.
            </Text>
            <Text as="p" className="my-3 mob:text-center">
              I’m a whole-body health coach, author, speaker, athlete, ​husband,
              dog dad and outdoor enthusiast. I’ve spent my ​career empowering
              those living with chronic pain to achieve ​a pain-free, vibrant
              life through a restored balance in body, ​mind and spirit.
            </Text>
            <Text as="p" className="my-6 mob:text-center">
              The courses I teach can help you to eliminate muscle, nerve ​and
              joint pain, and by connecting you to a deeper inner ​wisdom, that
              help you to heal past and present emotional ​blockages. Through
              this process it is possible to achieve a ​pain-free future, with
              lasting relief and optimal health.
            </Text>
            <Text as="p" className="my-3 mob:text-center">
              I’ve helped thousands of people find the answers to relieving
              ​their pain, and I’d like to help you too!
            </Text>

            <div className="mob:flex mob:justify-center">
              <Button className="max-w-[267.45px] mt-5">Watch the Video</Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default David;

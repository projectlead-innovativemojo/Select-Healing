import React from "react";
import Image from "next/image";

import david from "@/public/images/home/david.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Vidpopup from "./Vidpopup";

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
                Hi, There.
              </Text>
              <Text
                as="h1"
                className="text-[#E0B15E] text-[40px] my-3 mob:text-center mob:text-[30px] mob:leading-[50px]"
              >
                I&apos;m David Starbuck Smith
              </Text>
              <Text
                as="h1"
                className="text-[#fff] text-[30px] my-3 mob:text-center mob:text-[27px] mob:leading-[50px]"
              >
                A holistic life, mind and Body health coach.
              </Text>
              <Text as="p" className="my-3 mob:text-center">
  Over 50 million people in the United States alone suffer from a
  chronic pain condition the Western medical model of healthcare
  hasn&apos;t been able to help them solve. The reasons for this
  include a lack of understanding of the root cause, cookie-cutter
  approaches to treatment, treating the site of the pain as if
  it&apos;s the cause of the pain, and only treating the physical
  aspect of the person, leaving out the mental, emotional, and
  spiritual components of them completely.
</Text>

<Text as="p" className="my-6 mob:text-center">
  At Select Healing, we offer holistic, scientifically proven
  solutions to your pain while fostering an avenue of awareness
  and growth. That way, you can return to your life and activities
  free of pain without expending further time and money on
  ineffective treatments and solutions that can often leave you
  more frustrated than when you began.
</Text>

<Text as="p" className="my-3 mob:text-center">
  My Select Healing: Connect and Healing Back Pain online courses
  will teach you how to discover and solve the root cause of your
  pain. These courses are self-driven, holistic approaches to
  relieving chronic pain. They can serve as your lifelong toolkits
  on a transformative journey to relieving pain and helping you
  thrive in mind, body, and life.
</Text>


              <div className="mob:flex mob:justify-center">
                <Vidpopup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default David;

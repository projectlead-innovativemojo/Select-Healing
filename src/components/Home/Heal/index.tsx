import React from "react";
import Image from "next/image";

import heal from "@/public/images/home/heal.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface HeroProps {
  scrollToWorkshops: () => void;
}
  const Heal: React.FC<HeroProps> = ({ scrollToWorkshops }) => {

  return (
    <>
      <div className="bg-[#E0B15E] py-24 flex justify-center w-full px-5">
        <div className="max-w-[1400.7px]  w-full flex lg:block gap-[50px] pb-32">
          {/* left */}
          <div className="max-w-[740.59px] w-full lg:flex lg:justify-center lg:max-w-full ">
            <div className="w-full max-w-[750.59px]">
              <Text as="h1" className="text-[#FFFFFF] my-3 mob:text-center mob:text-[40px] mob:leading-[50px]">
              Learn To Heal <br /> Yourself
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

              <div onClick={scrollToWorkshops} className="mob:flex mob:justify-center">
                <Button className="max-w-[347px] rounded-[32.83px] mt-5 bg-[#041F60] border-[#041F60] ">
                Preview Courses
                </Button>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="lg:w-full flex justify-center items-center lg:mt-10">
            <Image src={heal} alt="" width={636.11} height={677.07} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heal;

import React from "react";
import Image from "next/image";

import heal from "@/public/images/home/Two-people.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

interface HeroProps {
  scrollToWorkshops: () => void;
}
const Heal: React.FC<HeroProps> = ({ scrollToWorkshops }) => {
  return (
    <>
      <div className="bg-[#E0B15E] py-24 flex justify-center w-full px-5">
        <div className="max-w-[1400.7px]  w-full flex lg:block gap-[50px] ">
          {/* left */}
          <div className="max-w-[740.59px] w-full lg:flex lg:justify-center lg:max-w-full ">
            <div className="w-full max-w-[750.59px]">
              <Text
                as="h1"
                className="text-[#FFFFFF] my-3 mob:text-center mob:text-[40px] mob:leading-[50px]"
              >
                Learn To Heal <br /> Yourself
              </Text>
              <Text as="p" className="my-3 ">
                {/* Over 50 million people in the United States alone suffer from a
  chronic pain condition the Western medical model of healthcare
  hasn&apos;t been able to help them solve. The reasons for this
  include a lack of understanding of the root cause, cookie-cutter
  approaches to treatment, treating the site of the pain as if
  it&apos;s the cause of the pain, and only treating the physical
  aspect of the person, leaving out the mental, emotional, and
  spiritual components of them completely. */}
                Over <span className="font-bold">50 million</span> people in the
                United States suffer from chronic pain. Why?
              </Text>

              {/* <Text as="p" className="my-6 "> */}
                {/* At Select Healing, we offer holistic, scientifically proven
  solutions to your pain while fostering an avenue of awareness
  and growth. That way, you can return to your life and activities
  free of pain without expending further time and money on
  ineffective treatments and solutions that can often leave you
  more frustrated than when you began. */}
                <ul className="list-disc my-6 ml-6">
                  <li className="text-[#FFFFFF] text-[20px] font-normal leading-[26px] font-poppins my-3"  >
                    The <span className="font-bold">root cause</span> is rarely
                    addressed by Western medical care
                  </li>
                  <li className="text-[#FFFFFF] text-[20px] font-normal leading-[26px] font-poppins">
                    The site of the pain is treated as the cause of the pain
                  </li>
                  <li className="text-[#FFFFFF] text-[20px] font-normal leading-[26px] font-poppins my-3">
                    Only the physical part is treated, leaving the{" "}
                    <span className="font-bold">
                      mental, emotional, and spiritual
                    </span>{" "}
                    parts unhealed
                  </li>
                </ul>
              {/* </Text> */}

              <Text as="p" className="my-3 ">
                {/* My <span style={{fontStyle:"italic"}}> Select Healing: Connect and Healing Back Pain  </span> online courses
  will teach you how to discover and solve the root cause of your
  pain. These courses are self-driven, holistic approaches to
  relieving chronic pain. They can serve as your lifelong toolkits
  on a transformative journey to relieving pain and helping you
  thrive in mind, body, and life. */}
                At Select Healing, we offer{" "}
                <span className="font-bold">
                  holistic, scientifically proven solutions to your pain
                </span>{" "}
                while fostering an avenue of awareness and growth.
              </Text>

              <Text as="p" className="my-3 ">
                Our courses “Healing Back Pain” and “Healing Chronic Pain” are
                self-paced, proven, and{" "}
                <span className="font-bold">
                  powerful approaches to relieving chronic pain.{" "}
                </span>
              </Text>

              <Text as="p" className="my-3 ">
              They’ll help you relieve your pain by helping you {" "}
                <span className="font-bold">
                realign your mind and body
                </span>{" "}
                through scientifically proven exercises, healing meditations, and other tools.
              </Text>

              <div
                onClick={scrollToWorkshops}
                className="mob:flex mob:justify-center max-w-[345px]"
              >
                <Button className="max-w-[347px] rounded-[32.83px] mt-5 bg-[#041F60] border-[#041F60] ">
                  Preview Courses
                </Button>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="lg:w-full flex justify-center items-center lg:mt-10">
            <Image
              className="rounded-[15px]"
              src={heal}
              alt=""
              width={636.11}
              height={677.07}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heal;

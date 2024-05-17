import React from "react";
import Image from "next/image";

import heal from "@/public/images/home/heal.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const Heal = () => {
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
  The mission of Select Healing is to help people discover how to transform their bodies and lives through scientifically proven exercises, meditations, and self-healing techniques. We believe in empowering you to heal yourself, thereby putting your health back in your hands where it rightly belongs.
</Text>
<Text as="p" className="my-6 mob:text-center">
  Whether you&apos;re seeking solutions for chronic pain, more balance in mind and body, enhanced muscle and joint flexibility, techniques to relieve stress, or simply a pathway to find optimal health, Select Healing is here to guide and support you every step of the way.
</Text>
<Text as="p" className="my-3 mob:text-center">
  We offer courses, retreats, live and recorded &quot;Sunday Stretch&quot; classes, and continued education workshops for health practitioners seeking to add new knowledge and added value to their clients. Simply put, we&apos;re here to help you thrive in body, mind, and life.
</Text>

              <div className="mob:flex mob:justify-center">
                <Button className="max-w-[347px] rounded-[32.83px] mt-5 bg-[#041F60] border-[#041F60] ">
                Preview Course Material
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

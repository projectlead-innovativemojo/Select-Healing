import React from "react";
import Image from "next/image";

import heal from "@/public/images/home/heal.png";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const Heal = () => {
  return (
    <>
      <div className="bg-[#E0B15E] py-24 flex justify-center w-full px-5">
        <div className="max-w-[1400.7px]  w-full flex lg:block gap-[50px]">
          {/* left */}
          <div className="max-w-[740.59px] w-full lg:flex lg:justify-center lg:max-w-full ">
            <div className="w-full max-w-[750.59px]">
              <Text as="h1" className="text-[#FFFFFF] my-3 mob:text-center mob:text-[40px] mob:leading-[50px]">
              Learn To Heal <br /> Yourself
              </Text>
              <Text as="p" className="my-3 mob:text-center">
                If you’re like the millions of people who struggle with chronic
                pain ​on a daily basis, you have been through a lot of
                treatments, with ​hope that you might find relief, only to be
                let down, and frustrated ​with yet another ineffective
                treatment. You may even feel like ​there’s no hope for relief,
                or even normalcy.
              </Text>
              <Text as="p" className="my-6 mob:text-center">
                I’m here to tell you that with a little bit of work, and focus,
                you CAN ​find relief. If you’re looking for a lasting solution,
                that you can ​control, and won’t cost you ongoing fees, never
                ending ​appointments and treatments, you’ve come to the right
                place.
              </Text>
              <Text as="p" className="my-3 mob:text-center">
                My SelectHealing: Connect digital course will teach you how to
                dig ​deep into the root cause of your pain. This course is a
                self-driven, ​holistic approach to relieving chronic pain. It
                will be your life long ​toolkit on a transformative journey to
                lasting relief, and a life ​without restrictions and pain
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

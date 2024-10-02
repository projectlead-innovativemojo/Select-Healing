import React from "react";
import Image from "next/image";
import Link from "next/link";

import footlogo from "@/public/images/home/logofooter.png";
import Text from "../ui/Text";
const Footer = () => {

  
  return (
    <>
     <div className="px-5">
     <div className="flex justify-center ">
        <Image src={footlogo} alt="" width={336.73} height={179.21} />
      </div>
      <div className="flex justify-center mt-4">
        <Text
          as="p"
          className="text-[#7B7B7B] max-w-[789.52px] text-[20px] text-center capitalize"
        >
          Disclaimer: Nothing contained on this website is intended to provide
          health care advice. Should you have any health care-related questions,
          please call or see your physician or other health care provider. The
          safety and security of our members is our top priority. Individual
          results may vary.
        </Text>
      </div>
      <div className="flex justify-center w-full pb-8">
        <div className="max-w-[1440px] w-full">
          <hr className="h-px mt-20 mb-6 bg-[#767676]/30 border-0 " />

          <div className="flex flex-wrap justify-between mob:justify-center">
            <div className="flex-col">
              <Text
                as="p"
                className="text-[#7B7B7B] text-[16px] text-center capitalize"
              >
                © 2024 Select Healing. All Rights Reserved.
              </Text>
            </div>

            <div className="flex-col">
              <Link href="/privacy-policy">
              <Text
                as="p"
                className="text-[#7B7B7B]  text-[16px] text-center capitalize mob:mt-4"
              >
                Privacy Terms
              </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Footer;

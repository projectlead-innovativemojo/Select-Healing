import React from "react";
import Image from "next/image";

import book from "@/public/images/book/Align_feel_heal_CVR-1017x1536.jpg";
import Text from "../ui/Text";

const NewBook = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-[#041F60] py-20 gap-32 mob:gap-10 px-5">
      <div className="">
        <Image src={book} alt="" width={250} height={350} />
      </div>
      <div className="">
        <Text
          as="h1"
          className="text-[#E0B15E] text-[55px] my-3 mob:text-center mob:text-[30px] mob:leading-[50px]"
        >
          A New Book is Coming!
        </Text>
        <Text
          as="p"
          className="text-[#FFFFFF] text-[32px] mob:text-[24px] font-poppins leading-[41.6px] mob:text-center"
        >
          Release Date: (Jan 14th 2025)
        </Text>
      </div>
    </div>
  );
};

export default NewBook;

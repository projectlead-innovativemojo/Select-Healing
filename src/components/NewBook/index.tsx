import React from "react";
import Image from "next/image";

import Text from "../ui/Text";

import book from "@/public/images/book/Bookcover.png";

const NewBook = () => {
  return (
    <div className="flex  tab:flex-wrap justify-center items-center bg-[#041F60] py-20 gap-14 mob:gap-10 px-5">
      <div className="">
        <Image src={book} alt="" width={500} height={650} />
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
          className="text-[#FFFFFF] text-[32px] mob:text-[20px] font-poppins leading-[41.6px] mob:text-center"
        >
          Release Date: (Jan 14th 2025)
        </Text>
      </div>
    </div>
  );
};

export default NewBook;

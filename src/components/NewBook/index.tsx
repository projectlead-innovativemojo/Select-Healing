import React from "react";
import Image from "next/image";

import Text from "../ui/Text";

import book from "@/public/images/book/book-avail.png";
import bg from "@/public/images/book/new-bg.png";

const NewBook = () => {
  return (
    <div className="flex relative tab:flex-wrap justify-center items-center bg-[#041F60] py-20 gap-10 mob:gap-10 px-5">
      {/* <Image src={bg} alt="book image" className="absolute w-full h-full" /> */}
      <div className="">
        <Image src={book} alt="" width={650} height={650} />
      </div>
      <div className="">
        <Text
          as="h1"
          className="text-[#E0B15E] text-[45px] my-3 mob:text-center mob:text-[30px] mob:leading-normal"
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

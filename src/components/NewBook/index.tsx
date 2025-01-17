import React from "react";
import Image from "next/image";
import Link from "next/link";

import Text from "../ui/Text";
import Button from "../ui/Button";

import book from "@/public/images/book/straight-book.png";
import bg from "@/public/images/book/new-bg.png";
const NewBook = () => {
  return (
    <div className="flex relative tab:flex-wrap justify-center items-center bg-[#041F60] py-20 gap-10 mob:gap-10 px-5">
      <Image
        src={bg}
        alt="book image"
        className="absolute object-cover z-0 w-full h-full"
      />
      <div className="w-full max-w-[1200px] mob:flex-col flex mob:justify-center justify-between items-center">
        <div className="relative z-10 w-full mob:max-w-full max-w-[600px] mob:flex mob:justify-center mob:items-center">
          <Image
            src={book}
            alt=""
            width={275}
            height={394}
            className="mob:w-[181px] mob:h-[260px]"
          />
        </div>
        <div className="relative z-10 w-full max-w-[600px] flex flex-col justify-center items-center">
          <Text
            as="h1"
            className="uppercase text-center text-white text-[64px] leading-[90px] my-3 mob:text-center mob:text-[40px] mob:leading-normal"
          >
            The Book <br /> is out now
          </Text>
          {/* <Text
          as="p"
          className="text-[#FFFFFF] text-[32px] mob:text-[20px] font-poppins leading-[41.6px] mob:text-center"
        >
          Release Date: (Jan 14th 2025)
        </Text> */}
          <Link
            className=""
            href="https://www.amazon.com/Align-Feel-Heal-Integrated-Eliminating/dp/B0DLDMGX17"
          >
            <Button className="text-[18px] mob:text-[18px] w-[260px] h-[60px] mt-5">
              BUY NOW ON AMAZON{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewBook;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import { FaChevronDown } from "react-icons/fa";

import Drawer from "../ui/Drawer";
import logo from "@/public/images/home/logo.png";
import Link from "next/link";

// The Connect Retreat event is over, so its "Upcoming Retreats" menu link is
// hidden (not deleted). Set this to true to show it again.
const SHOW_RETREAT_LINK = false;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setdropDownOpen] = useState(false);
  // const [resAboutusToggle, setresAboutusToggle] = useState(false);
  // const [resOurWorkToggle, setresOurWorkToggle] = useState(false);

  const handleResOurWorkToggle = () => {
    setdropDownOpen(!dropDownOpen);
    // setresAboutusToggle(false);
  };

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      gsap.set(listItems, { opacity: 0, x: 20 });

      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <div className="flex justify-center relative z-50 pb-36 mob:pb-0">
      <div className="max-w-[1440px] w-full px-[5%] pt-[30px] flex justify-between items-center  mob:pl-0 mob:pr-5 ">
        <Image className="" src={logo} alt="" width={300.19} height={159.77} />

        {/* menu */}
        <ul className="flex gap-10 xl:hidden">
          <div
            className="flex justify-center items-center"
            onMouseLeave={() => setdropDownOpen(false)}
          >
            <div className="relative inline-block">
              <span
                onMouseEnter={() => setdropDownOpen(true)}
                className="font-semibold  text-[20px] text-[#041F60] font-poppins cursor-pointer"
              >
                Explore More
              </span>
              {dropDownOpen && (
                <div className="absolute left-[0px] mt-1 rounded-[8px] w-[250px] bg-white shadow-lg py-4  z-10">
                  <Link
                    href="https://www.selecthealing.com/login"
                    target="_blank"
                  >
                    <li className="font-semibold px-4 text-[20px] text-left leading-[23.2px] text-[#041F60] font-poppins">
                      My Library
                    </li>
                    <hr className="h-px my-4 bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                  </Link>
                  <Link
                    href="https://www.selecthealing.com/about"
                    target="_blank"
                  >
                    <li className="font-semibold px-4  text-[20px] text-left leading-[23.2px] text-[#041F60] mt-3 font-poppins">
                      About
                    </li>
                  </Link>
                  <hr className="h-px my-4 bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                  <Link
                    href="https://www.selecthealing.com/news"
                    target="_blank"
                  >
                    <li className="font-semibold  text-[20px] text-left leading-[23.2px] px-4 text-[#041F60] font-poppins mt-3">
                      News
                    </li>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Link href="https://www.selecthealing.com/contact" target="_blank">
            <li className="font-semibold  text-[20px] leading-[83.2px] text-[#041F60] font-poppins">
              Contact
            </li>
          </Link>
          <Link href="https://www.selecthealing.com/store" target="_blank">
            <li className="font-semibold  text-[20px] leading-[83.2px] text-[#041F60] font-poppins">
              Store
            </li>
          </Link>
          {SHOW_RETREAT_LINK && (
            <Link
              href="https://www.selecthealing.com/Connect-retreat"
              target="_blank"
            >
              <li className="font-semibold  text-[20px] leading-[83.2px] text-[#041F60] font-poppins">
                Upcoming Retreats
              </li>
            </Link>
          )}
          <Link
            href="https://www.selecthealing.com/login"
            target="_blank"
            className="h-[46px]"
          >
            <li className="font-semibold text-[20px] px-[35px] h-[46px] flex justify-center items-center mt-[18px] rounded-[6px] leading-[83.2px] text-[#fff] bg-[#012284] font-poppins">
              Login
            </li>
          </Link>
        </ul>

        {/* mobile menu */}
        <div className="hidden xl:block ">
          <div className="relative cursor-pointer flex " onClick={onOpen}>
            <button
              // onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm border border-[#fff]/90 bg-[#fff] text-[#E0B15E] rounded-lg  "
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="relative z-40">
            <Drawer isOpen={isOpen} onClose={onClose}>
              <div className="flex items-center h-full w-full ">
                <ul className="font-normal  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                  <div
                    className="flex justify-center items-center"
                    onMouseLeave={() => setdropDownOpen(false)}
                  >
                    <div className="text-[12px] text-primary w-full font-walsheimGt font-medium leading-[25.5px]">
                      <li
                        className="text-center py-[15px] flex justify-center items-center gap-2"
                        onClick={handleResOurWorkToggle}
                      >
                        <a
                          className={
                            "text-[20px] pl-5 text-white font-poppins text-center  leading-[25.5px]"
                          }
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore More
                        </a>
                        <FaChevronDown
                          className={`text-white transform transition-transform duration-300 text-[18px] ${
                            dropDownOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </li>
                      <div
                        className={`relative  px-6   left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${
                          dropDownOpen
                            ? "max-h-[180px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-1 pb-4 flex items-center flex-col h-full justify-center">
                          <Link
                            href="https://www.selecthealing.com/login"
                            target="_blank"
                          >
                            <li className="font-semibold text-[16px] leading-[23.2px] text-white font-poppins">
                              My Library
                            </li>
                          </Link>
                          <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                          <Link
                            href="https://www.selecthealing.com/about"
                            target="_blank"
                          >
                            <li className="font-semibold  text-[16px] leading-[23.2px] text-white mt-3 font-poppins">
                              About
                            </li>
                          </Link>
                          <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                          <Link
                            href="https://www.selecthealing.com/news"
                            target="_blank"
                          >
                            <li className="font-semibold  text-[16px] leading-[23.2px] text-white font-poppins mt-3">
                              News
                            </li>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                  <a
                    href="https://www.selecthealing.com/contact"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      Contact
                    </li>
                  </a>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                  <a
                    href="https://www.selecthealing.com/store"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      Store
                    </li>
                  </a>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                  {/* <a
                    href="https://www.selecthealing.com/login"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      My Library
                    </li>
                  </a>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                  <a
                    href="https://www.selecthealing.com/about"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      About
                    </li>
                  </a>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                  <a
                    href="https://www.selecthealing.com/news"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      News
                    </li>
                  </a> */}

                  {SHOW_RETREAT_LINK && (
                    <>
                  <a
                    href="https://www.selecthealing.com/Connect-retreat"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="flex justify-center py-[15px] list-items">
                      Upcoming Retreats
                    </li>
                  </a>
                  <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
                    </>
                  )}

                  <a
                    href="https://www.selecthealing.com/login"
                    target="_blank"
                    className="block  text-[20px] font-poppins font-medium w-[140px]  mx-auto leading-[25.5px] text-[#FFFFFF]  "
                  >
                    <li className="py-[15px] list-items bg-[#fff] text-[#012284] mt-5 w-[140px] h-[46px] flex justify-center items-center rounded-[6px] mx-auto">
                      Login
                    </li>
                  </a>
                  {/* <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr> */}
                </ul>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

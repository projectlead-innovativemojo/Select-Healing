"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from "gsap";

import Drawer from "../ui/Drawer";
import logo from "@/public/images/home/logo.png"
import Link from 'next/link'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      // Select all list items
      const listItems = document.querySelectorAll(".list-items");

      // Set initial opacity to 0 and translateX to 20px
      gsap.set(listItems, { opacity: 0, x: 20 });

      // Iterate through list items and animate them
      gsap.to(listItems, {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 0.7, // Animation duration
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        ease: "power2.out", // Easing function
      });
    }
  }, [isOpen]);

  return (
    <div className='flex justify-center relative z-50 pb-36 mob:pb-0'>
        <div className="max-w-[1440px] w-full px-[5%] pt-[30px] flex justify-between items-center  mob:pl-0 mob:pr-5 ">
            <Image className='' src={logo} alt="" width={300.19} height={159.77} />

           {/* menu */}
              <ul className='flex gap-10 tab:hidden'>
                <Link href='https://www.selecthealing.com/store' >
                <li className='font-semibold  text-[24px] leading-[83.2px] text-[#041F60] font-poppins'>Store</li>
                </Link>
                <Link href='https://www.selecthealing.com/login' >
                <li className='font-semibold  text-[24px] leading-[83.2px] text-[#041F60] font-poppins'>My Library</li>
                </Link>
                <Link href='https://www.selecthealing.com/about' >
                <li className='font-semibold  text-[24px] leading-[83.2px] text-[#041F60] font-poppins'>About</li>
                </Link>
                <Link href='https://www.selecthealing.com/contact' >
                <li className='font-semibold  text-[24px] leading-[83.2px] text-[#041F60] font-poppins'>Contact</li>
                </Link>
              </ul>

              {/* mobile menu */}
              <div className="hidden tab:block ">
                <div
                  className="relative cursor-pointer flex "
                  onClick={onOpen}
                >
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
                        <a
                          href="https://www.selecthealing.com/store"
                          className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  " 
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          Store
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="https://www.selecthealing.com/login"
                          className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          My Library
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="https://www.selecthealing.com/about"
                          className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          About
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                        <a
                          href="https://www.selecthealing.com/contact"
                          className="block  text-[20px] font-poppins font-medium leading-[25.5px] text-[#FFFFFF]  "
                        >
                          <li className="flex justify-center py-[15px] list-items">
                          Contact
                          </li>
                        </a>
                        <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                     
                      </ul>
                    </div>
                  </Drawer>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Navbar

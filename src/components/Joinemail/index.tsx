"use client";
import { useState, MouseEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import headingbg from "@/public/images/home/headingbg.png";
import headingbgblue from "@/public/images/home/headingbgblue.png";
import submit from "@/public/images/home/form.png";
import fb from "@/public/icons/Icon_11_.svg";
import insta from "@/public/icons/Group 1000007395.svg";
import youtube from "@/public/icons/XMLID_822_.svg";

import Text from "../ui/Text";
import Link from "next/link";
import Script from "next/script";

const Joinemail = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");

  // const sendMail = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/sendSubscribe", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setSuccessMessage("Subscribed Successfully!");
  //       alert("Subscribed successfully!");
  //       setEmail("");
  //     } else {
  //       throw new Error(data.message || "Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error sending email:", error);
  //     alert("Failed to send email. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
//   const [isMounted, setIsMounted] = useState <boolean>(false);
//   console.log(isMounted)
// useEffect(() => {
//     setIsMounted(true);
//   console.log(isMounted)

//   }, [setIsMounted]);
//   if (!isMounted) return null;
   

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.selecthealing.com/forms/2148304028/embed.js'; 
    script.async = true;

    // Append the script to the document head
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="flex xl:flex-wrap  gap-10 justify-center mb-32 px-5">
        <div className="flex-col min-h-[500.04px] mob:min-h-full mob:py-10 py-2 rounded-[30px] bg-[#041F60] flex items-center justify-center">
          <div className=" max-w-[695.46px] px-12 mob:px-4 overflow-hidden">
            <div className="flex justify-center mob:mb-8 mt-4">
              <Text
                as="h1"
                className="max-w-[760.91px] relative text-center text-[#FFFFFF] text-[38px] mob:text-[20px] leading-[62.4px] mob:leading-[35px] mob:max-w-full mob:text-center "
              >
                <span className="relative z-10 capitalize">
                  {" "}
                  Join our email list for useful tips on health and healing, and
                  updates on Select Healing specials and events.
                </span>
                <Image
                  className="absolute  bottom-[37%] left-[32%]  z-0 mob:hidden"
                  src={headingbg}
                  alt=""
                  width={342.74}
                  height={38.1}
                />
              </Text>
            </div>
            {/* <form > */}
            <div
        dangerouslySetInnerHTML={{
          __html: `
            <div id="your-html-id">
            <script src="https://www.selecthealing.com/forms/2148304028/embed.js" ></script>
            </div>
          `,
        }}
      />
            {/* <script src="https://www.selecthealing.com/forms/2148304028/embed.js" ></script> */}
            {/* <Script src="https://www.selecthealing.com/forms/2148304028/embed.js" /> */}
          
            {/* <Script
    type="text/javascript"
    src="https://www.selecthealing.com/forms/2148304028/embed.js"
    strategy="beforeInteractive"
    defer={false}
/> */}
              {/* <div className="relative flex items-center">
                <input
                  className="px-12 mob:pl-6 mob:pr-16 w-full h-[65.66px] bg-[#FFFFFF] outline-none rounded-[32.83px] placeholder:text-[#A5A5A5]  "
                  type="email"
                  placeholder="Enter Your Email..."
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                />

                <button className="absolute right-4">
                  {loading ? (
                    "Subscribing..."
                  ) : (
                    <Image
                      className=" cursor-pointer"
                      src={submit}
                      alt=""
                      width={45.45}
                      height={45.45}
                    />
                  )}
                </button>
              </div> */}
            {/* </form> */}
          </div>
        </div>

        {/* 2 */}
        <div className="flex-col min-h-[500.04px] mob:min-h-full py-4 mob:py-10 rounded-[30px] bg-[#E0B15E] flex items-center justify-center">
          <div className=" max-w-[600.42px] px-12 mob:px-4 overflow-hidden ">
            <div className="flex justify-center my-12 mob:mb-8 mob:mt-0">
              <Text
                as="h1"
                className="max-w-[760.91px] relative text-center text-[#FFFFFF] text-[38px] mob:text-[20px] leading-[62.4px] mob:leading-[35px] mob:max-w-full mob:text-center"
              >
                <span className="relative z-10 capitalize">
                  {" "}
                  Follow Select Healing for tips on finding health and balance
                  in body, mind, and life!
                </span>
                <Image
                  className="absolute  top-[18%] left-[0%]  z-0 mob:hidden"
                  src={headingbgblue}
                  alt=""
                  width={170.24}
                  height={26.86}
                />
              </Text>
            </div>
            <div className="relative flex items-center justify-center gap-8">
              <Link
                className="bg-[#041F60] flex justify-center items-center rounded-[50%] w-[55px] h-[55px]"
                href="https://www.facebook.com/Select.Healing"
              >
                <Image
                  className="cursor-pointer w-[16px]"
                  src={fb}
                  alt=""
                  width={47.94}
                  height={47.94}
                />
              </Link>

              <Link
                className="bg-[#041F60] flex justify-center items-center rounded-[50%] w-[55px] h-[55px]"
                href="https://www.instagram.com/select.healing/"
              >
                <Image
                  className="cursor-pointer w-[28px] mob:w-[25px]"
                  src={insta}
                  alt=""
                  width={47.94}
                  height={47.94}
                />
              </Link>

              <Link
                className="bg-[#041F60] flex justify-center items-center rounded-[50%] w-[55px] h-[55px]"
                href="https://www.youtube.com/@davidstarbucksmith"
              >
                <Image
                  className="cursor-pointer w-[28px]"
                  src={youtube}
                  alt=""
                  width={47.94}
                  height={47.94}
                />
              </Link>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinemail;

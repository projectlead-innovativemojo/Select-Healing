"use client ";
import React, { FC } from "react";
import { useRef, useEffect, RefObject } from "react";
import Image from "next/image";

import Text from "../ui/Text";
import Button from "../ui/Button";

import headingbg from "@/public/images/home/headingbg.png";
import j1 from "@/public/images/home/backpain.png";
import j2 from "@/public/images/home/sundaystretch1.png";
import j3 from "@/public/images/home/connect.png";
import fourth from "@/public/images/home/image-for-desktop.png";
import fifth from "@/public/images/home/Image (15).png";
import Link from "next/link";
interface JourneyProps {
  refvalue: React.RefObject<HTMLDivElement>;
}

const Journey: FC<JourneyProps> = ({ refvalue }) => {
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playVideo = () => {
        // Check screen width
        if (window.innerWidth < 768) {
          video.play().catch((error) => {
            console.error("Error attempting to play the video:", error);
          });
        } else {
          video.pause();
        }
      };

      playVideo();

      window.addEventListener("resize", playVideo);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", playVideo);
      };
    }
  }, []);
  return (
    <>
      <div className=" flex justify-center -mt-16">
        <video
          ref={videoRef}
          className="cursor-pointer max-w-[58%] rounded-[30px] w-full mob:max-w-[90%] relative z-40"
          src="/SELECTHEALING_WEBSITE_V1.mp4"
          poster="/images/home/thumbnaill.png"
          width={1607.34}
          height={1182.23}
          loop
          playsInline
          controls
          muted
        ></video>
      </div>
      <div className="flex justify-center" ref={refvalue}>
        <div className="pb-32 pt-10 px-5 max-w-[1200.36px]">
          <div className="flex justify-center">
            <Text
              as="h1"
              className="max-w-[919.91px] relative text-center mob:text-[30px] mob:leading-[45px] mob:max-w-full mob:text-center"
            >
              <span className="relative z-10 ]">
                {" "}
                {/* Pathways to Self-Healing and Transformation. */}
                Courses to Heal Your Chronic Pain.
              </span>
              <Image
                className="absolute  bottom-[0] left-[30%] mob:left-0 z-0"
                src={headingbg}
                alt=""
                width={403.59}
                height={38.1}
              />
            </Text>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-14 pt-16 ">
            {/* 1 */}
            <div className="flex-col w-full max-w-[280.09px]">
              <Image src={j1} alt="" width={427.09} height={289.44} />
              <div>
                <Text
                  as="p"
                  className="text-[#041F60] text-center leading-[26px] mt-10"
                >
                  Online Course
                </Text>
                <Text as="h2" className="text-center">
                  Healing Back Pain
                </Text>
              </div>
              <Link
                href="https://www.selecthealing.com/healing-back-pain-5045b7e2-262c-428c-a825-42d1048fba17"
                target="_blank"
                className="flex justify-center mt-8"
              >
                <Button className="max-w-[235.55px] h-[65.66px]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* 2 */}
            <div className="flex-col w-full max-w-[280.09px]">
              <Image src={j3} alt="" width={427.09} height={289.44} />

              <Text
                as="p"
                className="text-[#041F60] text-center leading-[26px] mt-10"
              >
                Online Course
              </Text>
              <Text as="h2" className="text-center">
                Healing Chronic Pain
              </Text>

              <div className="flex justify-center mt-8 relative z-40">
                <Link
                  href="https://www.selecthealing.com/connect"
                  target="_blank"
                  className="flex justify-center max-w-[235.55px] h-[65.66px] w-full"
                >
                  <Button className="max-w-[235.55px] h-[65.66px] w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3 */}
            <div className="flex-col w-full max-w-[280.09px]">
              <Image src={j2} alt="" width={427.09} height={289.44} />
              <div className="min-h-[109px]">
                <Text
                  as="p"
                  className="text-[#041F60] text-center leading-[26px] mt-10"
                >
                  Weekly Flexibility/Alignment Classes
                </Text>
                <Text as="h2" className="text-center">
                  Sunday Stretch
                </Text>
              </div>
              <Link
                href="https://www.selecthealing.com/sunday-stretch"
                target="_blank"
                className="flex justify-center mt-8"
              >
                <Button className="max-w-[235.55px] h-[65.66px]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* 4 */}
            <div className="flex-col w-full max-w-[280.09px]">
              <Image src={fourth} alt="" width={427.09} height={289.44} />
              <div className="md:min-h-[109px] min-h-auto">
                <Text
                  as="p"
                  className="text-[#041F60] text-center leading-[26px] mt-10"
                >
                  {""}
                </Text>
                <Text as="h2" className="text-center">
                  Ultimate Back Strength
                </Text>
              </div>
              <Link
                href="https://www.selecthealing.com/offers/o2uMN73b/checkout"
                target="_blank"
                className="flex justify-center mt-8"
              >
                <Button className="max-w-[235.55px] h-[65.66px]">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* 5 */}
            <div className="flex-col w-full max-w-[280.09px]">
              <Image src={fifth} alt="" width={427.09} height={289.44} />
              <div className="md:min-h-[109px] min-h-auto">
                <Text
                  as="p"
                  className="text-[#041F60] text-center leading-[26px] mt-10"
                >
                  {""}
                </Text>
                <Text as="h2" className="text-center">
                  Strong for Life - The Back Pain Blueprint
                </Text>
              </div>
              <Link
                href="https://www.selecthealing.com/offers/NFE5nNuj/checkout"
                target="_blank"
                className="flex justify-center mt-8"
              >
                <Button className="max-w-[235.55px] h-[65.66px]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;

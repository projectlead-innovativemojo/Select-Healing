"use client"
import Footer from "@/components/Footer";
import David from "@/components/Home/David";
import Heal from "@/components/Home/Heal";
import Hero from "@/components/Home/Hero";
import Joinemail from "@/components/Joinemail";
import Journey from "@/components/Journey";

import TestimonialSlider from "@/components/testimonials-slider";
import Workshops from "@/components/Workshops";
import Youcan from "@/components/Youcan";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const workshopsRef = useRef<HTMLDivElement>(null);
  return (
    <main className="">
      <Hero scrollToWorkshops={() => workshopsRef.current?.scrollIntoView({ behavior: 'smooth' })} />
          <Heal scrollToWorkshops={() => workshopsRef.current?.scrollIntoView({ behavior: 'smooth' })}/>
      {/* <David/> */}
      <div >
      <Journey refvalue={workshopsRef} />
      </div>
        <Workshops />
      {/* <Heal scrollToWorkshops={() => workshopsRef.current?.scrollIntoView({ behavior: 'smooth' })}/> */}
       <David/>
      <Youcan/>
        <TestimonialSlider />
      <Joinemail/>
      <Footer/>
    </main>
  );
}

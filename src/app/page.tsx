import David from "@/components/Home/David";
import Heal from "@/components/Home/Heal";
import Hero from "@/components/Home/Hero";
import Journey from "@/components/Journey";
import Youcan from "@/components/Youcan";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <David/>
      <Journey/>
      <Heal/>
      <Youcan/>
    </main>
  );
}

import David from "@/components/Home/David";
import Hero from "@/components/Home/Hero";
import Journey from "@/components/Journey";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <David/>
      <Journey/>
    </main>
  );
}

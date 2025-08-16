import Banner from "@/components/home/Banner";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/how-it-works";
import OurServices from "@/components/home/OurServices";
import VisaServicesListing from "@/components/visa-serivices/VisaServices";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <HeroSection />
      <OurServices/>
      <HowItWorks />
   </main>
  );
}

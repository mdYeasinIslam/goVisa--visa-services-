import ChooseUsSection from "@/components/home/ChooseUsSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/how-it-works";
import OurServices from "@/components/home/OurServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | GoVisa - Visa Service Portal",
  description:
    "Explore visa services, track your application, and manage your visa journey easily with GoVisa.",
};

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <HeroSection />
      <OurServices/>
      <HowItWorks />
      <ChooseUsSection/>
      <FaqSection/>
   </main>
  );
}

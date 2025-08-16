import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/how-it-works";
import OurServices from "@/components/home/OurServices";

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <HeroSection />
      <OurServices/>
      <HowItWorks />
      <FaqSection/>
   </main>
  );
}

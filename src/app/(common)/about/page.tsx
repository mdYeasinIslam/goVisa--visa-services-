import ContactSection from "@/components/about/ContactSection";
import CoreValueSection from "@/components/about/Core-value-section";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import ServiceSection from "@/components/about/ServiceSection";
import StatSection from "@/components/about/StatSection";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "About | GoVisa",
  description:
    "Learn about GoVisa, a mini web app for exploring visa services and tracking applications efficiently.",
};

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      <StatSection />

      {/* Mission & Vision Section */}
      <MissionSection />

      {/* Values Section */}
      <CoreValueSection />

      {/* Timeline Section */}
      {/* <TimelineSection/> */}

      {/* Services Overview */}
      <ServiceSection />

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

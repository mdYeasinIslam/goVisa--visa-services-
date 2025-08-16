import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/about/about.jpg";
import img2 from "../../../public/images/about/about2.jpg";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10 pt-20 pb-10">
      <div className="text-right flex flex-col-reverse md:flex-row gap-5 ">
        <div className="text-black col-span-2 space-y-6 w-[80%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Our Mission
          </h1>
          <p className="text-[#9B9A9A]">
            We are committed to making the visa application process easy,
            transparent, and stress-free. Whether you&qout;re planning a
            vacation, studying abroad, or traveling for business — VisaPortal
            helps you get the right visa, without the confusion.
          </p>
        </div>
        <figure className="">
          <Image
            src={img1}
            alt="about image"
            width={500}
            height={500}
            className="w-[450px] h-full  rounded-md"
          />
        </figure>
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-3 ">
        <figure className="">
          <Image
            src={img2}
            alt="about image"
            width={500}
            height={500}
            className="w-[450px] h-full rounded-md"
          />
        </figure>
        <div className="text-black md:col-span-2 space-y-6  md:pl-16  xl:pl-20">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            Our Mission
          </h1>
          <p className="text-[#9B9A9A] overflow-y-scroll">
            We are committed to making the visa application process easy,
            transparent, and stress-free. Whether you&qout;re planning a
            vacation, studying abroad, or traveling for business — VisaPortal
            helps you get the right visa, without the confusion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

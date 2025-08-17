"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiCheckCircle, BiGlobe, BiShield } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Your Gateway to Global Travel",
      subtitle:
        "Professional visa services for seamless international journeys",
      image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
    },
    {
      title: "Expert Visa Consultation",
      subtitle: "Get personalized guidance from our visa specialists",
      image: "https://i.ibb.co.com/HL3B3Hw6/heroImg2.jpg",
    },
    {
      title: "Fast & Reliable Processing",
      subtitle: "Quick turnaround times with 99% approval success rate",
      image: "https://i.ibb.co.com/GvQ45TG1/heroImg1.jpg",
    },
  ];

  const stats = [
    { number: "50K+", label: "Visas Processed" },
    { number: "99%", label: "Success Rate" },
    { number: "150+", label: "Countries Covered" },
    { number: "24/7", label: "Support Available" },
  ];

  const features = [
    "Expert visa consultation",
    "Document verification",
    "Application tracking",
    "Fast processing times",
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleExploreServices = () => {
    // Navigate to services page
    window.location.href = "/visa-services";
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-32 flex items-center min-h-screen relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium">
              <BiGlobe className="w-4 h-4 mr-2" />
              Trusted by 50,000+ travelers worldwide
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <div className="text-5xl xl:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  GoVisa
                </span>
                <br />
                <h1 className="text-white h-28 md:h-full xl:h-40">
                  <Typewriter
                    words={[
                      "Your Gateway to Global Travel",
                      "Expert Visa Consultation",
                      "Fast & Reliable Processing",
                    ]}
                    loop={50}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                  {/* {heroSlides[currentSlide].title} */}
                </h1>
              </div>

              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                <Typewriter
                  words={[
                    "Professional visa services for seamless international journeys",
                    "Get personalized guidance from our visa specialists",
                    "Quick turnaround times with 99% approval success rate",
                  ]}
                  loop={50}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={30}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
                {/* {heroSlides[currentSlide].subtitle} */}

              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-white">
                  <BiCheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href={'/visa-services'}>
              <button
                onClick={handleExploreServices}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                <span>Explore Visa Services</span>
                <BsArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
                </Link>

              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <BiShield className="w-5 h-5 mr-2" />
                Free Consultation
              </button>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/user_icon.png?height=40&width=40&text=User${i}`}
                      alt={`Customer ${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <BiStar
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-blue-200">
                    4.9/5 from 2,000+ reviews
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Hero Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-5 md:p-8 border border-white/20 shadow-2xl">
              <Image
                src={heroSlides[currentSlide].image || "/placeholder.svg"}
                alt="GoVisa Services"
                width={500}
                height={500}
                className="w-full md:h-96 lg:h-[500px] object-cover rounded-2xl transition-opacity duration-500"
              />

              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-orange-500 w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-0 -left-6 bg-white rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <BiCheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    99% Success Rate
                  </div>
                  <div className="text-xs text-gray-600">Visa Approvals</div>
                </div>
              </div>
            </div>

            <div className="hidden  absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 animate-float delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <BsClock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Fast Processing
                  </div>
                  <div className="text-xs text-gray-600">3-5 Business Days</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float delay-500">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <FaUsers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Expert Support
                  </div>
                  <div className="text-xs text-gray-600">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

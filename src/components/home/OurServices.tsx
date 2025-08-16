"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMapPin, BiSearch } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";

interface VisaService {
  id: number;
  type: string;
  country: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  popular?: boolean;
}

const visaServices: VisaService[] = [
  {
    id: 1,
    type: "Tourist visa",
    country: "Morocco",
    duration: "12 months",
    price: 123,
    description:
      "Lorem ipsum dolor sit amet consectetur. In turpis morbi risus feugiat tempor ultrices vitae. Ut leo dui lorem morbi pellentesque. A ipsum fringilla sed nunc arcu amet nunc. Tellus nec quis ut facilisis lorem. Semper aliquet orci habitasse orci a tellus lacus. Nibh donec suspendisse in dignissim turpis.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
    popular: true,
  },
  {
    id: 2,
    type: "Business visa",
    country: "UAE",
    duration: "24 months",
    price: 250,
    description:
      "Aenean tincidunt mauris at egestas facilisis, est nullis vulputate leo, at tincidunt velit consectetur. In ut tellus at mi volutpat volutpat. Aliquam mauris, quam in volutpat justo bibo blandit tortor, eget feugiat libero ligula non mauris. Fusce vitae egestas nulla, ut feugiat orci.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
  },
  {
    id: 3,
    type: "Student visa",
    country: "France",
    duration: "36 months",
    price: 450,
    description:
      "Suspendisse potenti, integer tristique, tellus quis aliquet velit, ipsum orci euismod est, in interdum purus eros et ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Curabitur condimentum erat quis ligula fringilla, a hendrerit quam dignissim.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
  },
  {
    id: 4,
    type: "Work visa",
    country: "Canada",
    duration: "18 months",
    price: 320,
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
  },
  {
    id: 5,
    type: "Transit visa",
    country: "Germany",
    duration: "6 months",
    price: 89,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
  },
  {
    id: 6,
    type: "Family visa",
    country: "Australia",
    duration: "30 months",
    price: 380,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    image: "https://i.ibb.co.com/F4hRD1HJ/heroImg.jpg",
  },
];

export default function OurServices() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleApplyNow = (service: VisaService) => {
    console.log(`Applying for ${service.type} to ${service.country}`);
    // Handle application logic here
  };

  return (
    <section className="py-16 px-4 bg-gray-50 space-y-5">
      <h1 className="text-4xl font-semibold text-center ">
        Our Services For You
      </h1>
      <div className="max-w-4xl mx-auto">
        {/* Visa Services List */}
        <div className="space-y-8">
          {visaServices?.slice(0, 3)?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="md:col-span-2 relative overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.country} visa`}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.type}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <BiMapPin className="w-4 h-4 mr-2" />
                          <span className="font-medium">{service.country}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <BsClock className="w-4 h-4 mr-2" />
                          <span className="text-sm">
                            Duration: {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-red-500">
                          ${service.price}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <div className="flex justify-start">
                    <button
                      onClick={() => handleApplyNow(service)}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                    >
                      <span>Apply Now</span>
                      <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}

        <div className="text-center mt-12">
          <Link href={"/visa-services"} className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl  group">
              View More
            </button>
          </Link>
        </div>
      </div>

      {/* Custom CSS for line clamping */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

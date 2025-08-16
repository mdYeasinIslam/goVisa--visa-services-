"use client";

import Link from "next/link";
import { useState } from "react";
import { BiMapPin, BiSearch } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";
import ServiceCard from "./ServiceCard";
import SharredButton from "../sharred/SharredButton";

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

export default function VisaServicesListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredServices = visaServices.filter(
    (service) =>
      service.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleServices = filteredServices.slice(0, visibleCount);

  const handleApplyNow = (service: VisaService) => {
    console.log(`Applying for ${service.type} to ${service.country}`);
    // Handle application logic here
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredServices.length));
  };

  return (
    <section className="py-20 px-4 bg-gray-50 space-y-5">
      <h1 className="text-4xl font-semibold text-center ">
        Our Services For You
      </h1>
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-md">
            <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by country"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
            />
          </div>
        </div>

        {/* Visa Services List */}
        <div className="space-y-8">
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredServices.length && (
          <div className="text-center mt-12 ">
                      <SharredButton text="View More" handleViewMore={handleViewMore} />
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <BiSearch className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No visa services found
            </h3>
            <p className="text-gray-600">
              Try searching for a different country or visa type.
            </p>
          </div>
        )}
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

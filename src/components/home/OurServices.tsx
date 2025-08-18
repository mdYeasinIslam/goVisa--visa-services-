"use client";

import { VisaService } from "@/types/ServicesType";
import Link from "next/link";
import ServiceCard from "../visa-serivices/ServiceCard";
import SharredButton from "../sharred/SharredButton";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/loading";

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
    const [visaServices, setVisaServices] = useState<VisaService[]>([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("/data/visa-service.json")
        .then((res) => res.json())
        .then((data) => {
          setVisaServices(data);
          setLoading(false);
        });
    }, []);
  return (
    <section className="py-16 px-4 bg-gray-50 space-y-5">
      <h1 className="text-4xl font-semibold text-center ">
        Our Services For You
      </h1>
      <div className="max-w-4xl mx-auto">
        {/* Visa Services List */}
        {!visaServices.length && loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <div className="space-y-8">
            {visaServices?.slice(0, 3)?.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )
        }
        {/* View More Button */}

        <div className="text-center mt-12">
          <Link href={"/visa-services"} className="text-center">
            <SharredButton text={"View More"} />
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

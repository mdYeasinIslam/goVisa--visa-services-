"use client";

import { VisaService } from "@/types/ServicesType";
import Link from "next/link";
import ServiceCard from "../visa-serivices/ServiceCard";
import SharredButton from "../sharred/SharredButton";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/app/loading";
import { useTheme } from "next-themes";


export default function OurServices() {
    const [visaServices, setVisaServices] = useState<VisaService[]>([]);
  const [loading, setLoading] = useState(true);
    // const { theme } = useTheme();


    useEffect(() => {
      fetch("/data/visa-service.json")
        .then((res) => res.json())
        .then((data) => {
          setVisaServices(data);
          setLoading(false);
        });
    }, []);

  return (
    <section
      className={`py-16 px-4 bg-gray-50  space-y-5 `}
    >
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
        )}
        {/* View More Button */}

        <div className="text-center mt-12">
          <Link href={"/visa-services"} className="text-center">
            <SharredButton text={"View More"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

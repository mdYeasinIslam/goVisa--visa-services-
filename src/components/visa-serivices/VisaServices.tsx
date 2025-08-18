"use client";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import ServiceCard from "./ServiceCard";
import SharredButton from "../sharred/SharredButton";
import { VisaService } from "@/types/ServicesType";
import LoadingSpinner from "@/app/loading";
import { Button, Dropdown, MenuProps, message, Space } from "antd";
import { FaChevronDown } from "react-icons/fa";


const items: MenuProps["items"] = [
  {
    label: "Filter by Price",
    key: "1",
    // icon: <UserOutlined />,
  },
  {
    label: "Filter by Type",
    key: "2",
    // icon: <UserOutlined />,
  },
];


export default function VisaServicesListing() {
  const [visaServices, setVisaServices] = useState<VisaService[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);



  const filteredServices = visaServices.filter(
    (service) =>
      service.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleServices = filteredServices.slice(0, visibleCount);
  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredServices.length));
  };
  useEffect(() => {
    fetch("/data/visa-service.json")
      .then((res) => res.json())
      .then((data) => {
        setVisaServices(data);
        setLoading(false);
      });
  }, []);
const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);

};
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <section className="py-20 px-4 bg-gray-50 space-y-5">
      <h1 className="text-4xl font-semibold text-center ">
        Our Services For You
      </h1>
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="mb-12 flex justify-between">
          <div className="w-full">
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
            <Dropdown menu={menuProps}>
          <div className="border place-content-center px-4 rounded-md border-gray-500">
              <button className="flex items-center gap-2 font-medium ">
                <span>Filter</span>
                <FaChevronDown />
              </button>
          </div>
            </Dropdown>
        </div>
        {/* Visa Services List */}
        {!visaServices.length && loading ? (
          <div>
            <LoadingSpinner />
          </div>
        ) : (
          <div className="space-y-8">
            {visibleServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* View More Button */}
        {visibleCount < filteredServices.length && (
          <div className="text-center mt-12 ">
            <SharredButton text="View More" handleViewMore={handleViewMore} />
          </div>
        )}

        {/* No Results */}
        {filteredServices?.length === 0 && visaServices.length && (
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
    </section>
  );
}

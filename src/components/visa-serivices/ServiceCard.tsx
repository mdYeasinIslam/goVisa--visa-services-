import { VisaService } from '@/types/ServicesType';
import Link from 'antd/es/typography/Link';
import React from 'react'
import { BiMapPin } from "react-icons/bi";
import { BsArrowRight, BsClock } from "react-icons/bs";

type PropType = {
  service: VisaService
};
export default function ServiceCard({service}:PropType) {
  return (
    <div
     
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
                  <span className="text-sm">Duration: {service.duration}</span>
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
            <Link href={"/my-application"}>
              <button
                // onClick={() => handleApplyNow(service)}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group cursor-pointer"
              >
                <span>Apply Now</span>
                <BsArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

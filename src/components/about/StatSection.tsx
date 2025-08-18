import React from 'react'
import {
  BiAward,
  BiCalendar,
  BiCheckCircle,
  BiGlobe
} from "react-icons/bi";
const stats = [
  { number: "50,000+", label: "Visas Processed", icon: BiCheckCircle },
  { number: "99.2%", label: "Success Rate", icon: BiAward },
  { number: "150+", label: "Countries Covered", icon: BiGlobe },
  { number: "15+", label: "Years Experience", icon: BiCalendar },
];
export default function StatSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

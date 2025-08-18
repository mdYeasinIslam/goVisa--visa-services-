import React from 'react'
import { BiHeart, BiShield } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
const values = [
  {
    icon: BiShield,
    title: "Trust & Security",
    description:
      "Your personal information and documents are protected with bank-level security.",
    color: "blue",
  },
  {
    icon: BsClock,
    title: "Efficiency",
    description:
      "Streamlined processes ensure quick turnaround times without compromising quality.",
    color: "green",
  },
  {
    icon: BiHeart,
    title: "Customer Care",
    description:
      "Personalized support and guidance throughout your entire visa journey.",
    color: "red",
  },
  {
    icon: FiTarget,
    title: "Excellence",
    description:
      "Committed to delivering exceptional results and exceeding expectations.",
    color: "purple",
  },
];
export default function CoreValueSection() {
      const getColorClasses = (color: string) => {
        switch (color) {
          case "blue":
            return {
              bg: "bg-blue-500",
              light: "bg-blue-50",
              text: "text-blue-600",
            };
          case "green":
            return {
              bg: "bg-green-500",
              light: "bg-green-50",
              text: "text-green-600",
            };
          case "red":
            return {
              bg: "bg-red-500",
              light: "bg-red-50",
              text: "text-red-600",
            };
          case "purple":
            return {
              bg: "bg-purple-500",
              light: "bg-purple-50",
              text: "text-purple-600",
            };
          default:
            return {
              bg: "bg-gray-500",
              light: "bg-gray-50",
              text: "text-gray-600",
            };
        }
      };
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide everything we do and shape our commitment to
            exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div
                  className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

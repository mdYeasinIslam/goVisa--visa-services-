import React from 'react'
type PropType = {
    current:number
}

const steps = [
  {
    id: 1,
    title: "",
    content: "First-content",
  },
  {
    id: 2,
    title: "",
    content: "Second-content",
  },
  {
    id: 3,
    title: "",
    content: "Last-content",
  },
  {
    id: 4,
    title: "",
    content: "Last-content",
  },
];
export default function Steps({current}:PropType) {
  return (
    <div className="max-w-3xl mx-auto flex items-center justify-center pt-32">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
              step.id < current
                ? "bg-[#1F2C5B] text-white"
                : step.id === current
                ? "bg-[#1F2C5B] text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {step.id}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 lg:w-40 h-1 mx-2 ${
                step.id < current ? "bg-[#1F2C5B]" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

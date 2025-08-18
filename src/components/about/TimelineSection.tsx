import React from 'react'


const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "Started as a small visa consultancy with a mission to simplify international travel.",
  },
  {
    year: "2012",
    title: "Digital Transformation",
    description:
      "Launched our first online platform, making visa applications more accessible.",
  },
  {
    year: "2016",
    title: "Global Expansion",
    description: "Extended services to cover 100+ countries worldwide.",
  },
  {
    year: "2020",
    title: "AI Integration",
    description:
      "Implemented AI-powered document verification and processing systems.",
  },
  {
    year: "2023",
    title: "50K Milestone",
    description:
      "Successfully processed over 50,000 visa applications with 99%+ success rate.",
  },
];
export default function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small consultancy to a global visa service leader - here&apos;s
            our story.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {milestone.year.slice(-2)}
                </div>
                <div className="ml-8 bg-white rounded-xl shadow-lg p-6 flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

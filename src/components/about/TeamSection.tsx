import React from 'react'
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    bio: "15+ years in immigration law with expertise in global visa regulations.",
    specialties: [
      "Immigration Law",
      "Business Strategy",
      "International Relations",
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
    bio: "Former embassy official with deep knowledge of visa processing systems.",
    specialties: [
      "Visa Processing",
      "Government Relations",
      "Quality Assurance",
    ],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Senior Visa Consultant",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
    bio: "Specialized in student and work visas with 10+ years of experience.",
    specialties: ["Student Visas", "Work Permits", "Document Review"],
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Customer Success Manager",
    image: "/placeholder.svg?height=300&width=300&text=David+Thompson",
    bio: "Dedicated to ensuring exceptional customer experience throughout the visa journey.",
    specialties: [
      "Customer Support",
      "Process Optimization",
      "Client Relations",
    ],
  },
];
export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals are dedicated to making your visa
            journey smooth and successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-2">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

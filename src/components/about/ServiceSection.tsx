import React from 'react'
import { BiBriefcase } from 'react-icons/bi'
import { CiPlane } from 'react-icons/ci'
import { FaGraduationCap } from 'react-icons/fa'

export default function ServiceSection() {
  return (
     <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive visa services tailored to your specific travel
                  needs.
                </p>
              </div>
    
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <CiPlane className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Tourist Visas
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leisure travel visas for vacation, sightseeing, and visiting
                    friends and family worldwide.
                  </p>
                </div>
    
                <div className="text-center group">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                    <BiBriefcase className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Business Visas
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional travel visas for business meetings, conferences,
                    and work-related activities.
                  </p>
                </div>
    
                <div className="text-center group">
                  <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <FaGraduationCap className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Student Visas
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Educational visas for studying abroad, including universities,
                    colleges, and language schools.
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}

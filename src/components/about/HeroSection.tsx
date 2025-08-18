import React from 'react'
import { BiAward, BiGlobe } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'

export default function HeroSection() {
  return (
     <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-white rounded-full animate-bounce"></div>
            </div>
    
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    GoVisa
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                  Your trusted partner in making global travel dreams come true.
                  We've been simplifying visa processes for over 15 years.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full">
                    <BiGlobe className="w-5 h-5 inline mr-2" />
                    Global Reach
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full">
                    <BiAward className="w-5 h-5 inline mr-2" />
                    Award Winning
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full">
                    <FaUsers className="w-5 h-5 inline mr-2" />
                    Expert Team
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

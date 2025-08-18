import React from 'react'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Your Visa Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get in touch with our expert team today and let us help you navigate
                the visa process with confidence.
              </p>
    
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors">
                  View Our Services
                </button>
              </div>
    
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center text-white">
                  <BiPhone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-white">
                  <CgMail className="w-5 h-5 mr-3" />
                  <span>info@govisa.com</span>
                </div>
                <div className="flex items-center text-white">
                  <BiMapPin className="w-5 h-5 mr-3" />
                  <span>New York, USA</span>
                </div>
              </div>
            </div>
          </section>
  )
}

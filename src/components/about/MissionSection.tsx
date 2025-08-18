import Image from 'next/image'
import React from 'react'
import aboutImg from "../../../public/images/about/about.jpg";
import { FiTarget } from 'react-icons/fi';
import { BsEye } from 'react-icons/bs';
import { BiCheckCircle } from 'react-icons/bi';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
           <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                 <h2 className="text-4xl font-bold text-gray-900 mb-8">
                   Our Mission & Vision
                 </h2>
   
                 <div className="space-y-8">
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                       <FiTarget className="w-6 h-6 text-blue-600" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3">
                         Mission
                       </h3>
                       <p className="text-gray-600 leading-relaxed">
                         To simplify and streamline the visa application process,
                         making international travel accessible to everyone while
                         maintaining the highest standards of service and security.
                       </p>
                     </div>
                   </div>
   
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                       <BsEye className="w-6 h-6 text-purple-600" />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3">
                         Vision
                       </h3>
                       <p className="text-gray-600 leading-relaxed">
                         To become the world's most trusted visa service provider,
                         connecting people across borders and enabling seamless
                         global mobility for business, education, and leisure.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
   
               <div className="relative">
                 {aboutImg && (
                   <Image
                     src={aboutImg}
                     alt="Global Connection"
                     width={500}
                     height={500}
                     className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                   />
                 )}
                 <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                   <div className="flex items-center space-x-3">
                     <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                       <BiCheckCircle className="w-6 h-6 text-white" />
                     </div>
                     <div>
                       <div className="font-bold text-gray-900">
                         Trusted Worldwide
                       </div>
                       <div className="text-sm text-gray-600">
                         50,000+ successful applications
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
  )
}

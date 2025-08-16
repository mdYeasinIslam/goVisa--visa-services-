import React from 'react'
type PropType = {
    text: string
    handleViewMore?:()=>void
}
export default function SharredButton({ text, handleViewMore }:PropType) {
  return (
    <button
      onClick={handleViewMore}
      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl  group cursor-pointer"
    >
      {text}
    </button>
  );
}

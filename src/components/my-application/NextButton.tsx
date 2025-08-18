import React from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

type PropType = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

export default function NextButton({ current, setCurrent }: PropType) {
  const increment = () => {
    setCurrent(current + 1);
  };
  const decrement = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="flex justify-center gap-5">
      {current < 2 && (
        <button
          onClick={increment}
          type="submit"
          className="bg-[#1F2C5B] flex items-center gap-2 text-white px-  rounded-lg font-semibold px-12 py-3 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <span>Next</span> <FaCircleArrowRight className="w-5 h-5" />
        </button>
      )}
      {current > 1 && (
        <button
          onClick={decrement}
          type="submit"
          className="bg-[#1F2C5B] flex items-center gap-2 text-white px-  rounded-lg font-semibold px-12 py-3 hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <FaCircleArrowLeft className="w-5 h-5" /> <span>Previous</span>
        </button>
      )}
    </div>
  );
}

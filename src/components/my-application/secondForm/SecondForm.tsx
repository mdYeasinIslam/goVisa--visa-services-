"use client";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import FormHeader from "../FormHeader/FormHeader";
import FileUploadSection from "../fileUpload/FileUploadSection";
import NextButton from "../NextButton";


// interface UploadedFile {
//   id: string
//   name: string
//   size: number
//   type: string
// }

type PropType = {
  setCurrent: React.Dispatch<React.SetStateAction<number>>,
  current: number
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  uploadedFiles: File[];
  handleSubmit: () => string | number | undefined;
};
const SecondForm = ({
    current,setCurrent,
  uploadedFiles,
  setUploadedFiles,
  handleSubmit,
}: PropType) => {
  return (
    <div>
      <div className=" ">
        <FormHeader content="Upload Documents" />
      </div>
      <div className="space-y-6">
        <div className="border ">
          <FileUploadSection
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6 gap-5">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#1F2C5B] flex items-center gap-2 text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <span>Submit</span> 
          </button>

          <NextButton current={current} setCurrent={setCurrent} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SecondForm;

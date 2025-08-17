"use client";
import React, { useState } from "react";
import Steps from "./stepsTracker/Steps";
import FirstForm from "./firstForm/FirstForm";
import NextButton from "./NextButton";
import SecondForm from "./secondForm/SecondForm";
import toast from "react-hot-toast";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function FormPage() {
  const [current, setCurrent] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    passportNumber: "",
    nationalID: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    effectiveDate: "",
    duration: 0,
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
const handleSubmit = () => {
    if (!uploadedFiles.length) {
        return toast.error("Please upload documents");
    }

    // Retrieve existing submissions array or initialize
    const existing = JSON.parse(localStorage.getItem("submissions") || "[]");

    // Prepare new submission object
    const newSubmission = {
        formData,
        files: uploadedFiles.map((file) => ({
            name: file.name,
            type: file.type,
            size: file.size,
        })),
        submittedAt: new Date().toISOString(),
    };

    // Push new submission and save back to localStorage
    existing.push(newSubmission);
    localStorage.setItem("submissions", JSON.stringify(existing));

    toast.success("Submission saved");
};

  return (
    <div className="py-32">
      <Steps current={current} />
      {current == 1 && (
        <FirstForm
          formData={formData}
          current={current}
          setFormData={setFormData}
          setCurrent={setCurrent}
        />
      )}
      {current == 2 && (
        <SecondForm
          current={current}
          setCurrent={setCurrent}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

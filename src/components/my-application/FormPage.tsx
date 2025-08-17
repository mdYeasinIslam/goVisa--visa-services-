"use client";
import React, { useState } from "react";
import Steps from "./stepsTracker/Steps";
import FirstForm from "./firstForm/FirstForm";
import NextButton from "./NextButton";
import SecondForm from "./secondForm/SecondForm";
import toast from "react-hot-toast";

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
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          handleSubmit={handleSubmit}
        />
      )}
      <NextButton current={current} setCurrent={setCurrent} />
    </div>
  );
}

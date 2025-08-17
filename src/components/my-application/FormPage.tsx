'use client'
import React, { useState } from 'react'
import Steps from './stepsTracker/Steps'
import FirstForm from './firstForm/FirstForm'

export default function FormPage() {
    const [current, setCurren] = useState(1)
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
    //    spouses: [
    //      {
    //        firstName: "",
    //        lastName: "",
    //        dateOfBirth: "",
    //        spouse: "",
    //      },
    //    ],
    //    children: [
    //      {
    //        firstName: "",
    //        lastName: "",
    //        dateOfBirth: "",
    //        child: "",
    //      },
    //    ],
    //    vehicles: [
    //      {
    //        registerNumber: "",
    //        brand: "",
    //        serviceDate: "",
    //      },
    //    ],
     });
  return (
    <div className="py-32">
      <Steps current={current} />
      <FirstForm
        formData={formData}
        current={current}
        setFormData={setFormData}
        setCurrent={setCurren}
      />
    </div>
  );
}

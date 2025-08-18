import React from 'react'
import FormHeader from '../FormHeader/FormHeader'
import InputField from '../InputField';
import SelectField from '../SelectedField';
import { FormDataTypes } from '@/types/FormTypes';
import NextButton from '../NextButton';
 type PropType = {
   setCurrent: React.Dispatch<React.SetStateAction<number>>;
   current: number;
   formData: FormDataTypes;
   setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>;
 };
export default function FirstForm({ formData, setFormData, setCurrent, current }: PropType) {
   const handleInputChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) => {
     const { name, value } = e.target;
    //  console.log(name, value);
     setFormData((prev) => ({
       ...prev,
       [name]: name === "duration" ? parseInt(value) : value,
     }));
     // console.log(formData)
   };
  return (
    <div>
      <FormHeader content="Personal Info" />
      <div className='container mx-auto px-5 lg:px-10'>

        <form className="space-y-6">
          {/* First Row */}
          <div className="md:grid md:grid-cols-2 gap-6">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter Your first name"
              required
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter Your last name"
              required
            />
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Passport Number"
              name="passportNumber"
              type="number"
              value={formData.passportNumber}
              onChange={handleInputChange}
              placeholder="Enter Passport Number"
              required
            />
            <InputField
              label="National ID"
              name="nationalID"
              value={formData.nationalID}
              onChange={handleInputChange}
              placeholder="Enter Your National ID"
              required
            />
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
              // icon={<Calendar className="h-5 w-5 text-gray-400" />}
            />
            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              options={[
                { value: "", label: "Select Your Gender" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
            />
          </div>

          {/* Fourth Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your email"
              required
            />
            <InputField
              label="Phone Number"
              name="phone"
              type="number"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter Your phone number"
              required
            />
          </div>

          {/* Fifth Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter Your address"
              required
            />
            <InputField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter Your zip code"
              required
            />
          </div>

          {/* Sixth Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Effective Date"
              name="effectiveDate"
              type="date"
              value={formData.effectiveDate}
              onChange={handleInputChange}
              placeholder="7/06/2025"
              required
            />
            <SelectField
              label="Duration"
              name="duration"
              value={formData.duration | 0}
              onChange={handleInputChange}
              options={[
                { value: 0, label: "Select your duration" },
                { value: 30, label: "30 Days" },
                { value: 90, label: "90 Days" },
                { value: 180, label: "6 Months" },
                { value: 365, label: "1 Year" },
                // { value: "multiple-entry", label: "Multiple Entry" },
              ]}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            {/* <button type="submit"> 

                              <StepsButton  setCurrent={setCurrent} current={current}/>
                          </button> */}
          </div>
        </form>
      </div>
      <NextButton current={current} setCurrent={setCurrent}/>
    </div>
  );
}

import FormPage from '@/components/my-application/FormPage'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "My Application | GoVisa",
  description:
    "Submit your visa application, update application steps, and track your progress online with GoVisa.",
};
export default function page() {
  return (
    <div>
      <FormPage/>
    </div>
  )
}

import VisaServicesListing from '@/components/visa-serivices/VisaServices'
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "Visa Services | GoVisa",
  description:
    "Browse all visa services offered, check processing times, and find the best option for your visa application.",
};
export default function page() {
  return (
      <div>
          <VisaServicesListing/>
    </div>
  )
}

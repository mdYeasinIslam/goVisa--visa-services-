import ContactSection from '@/components/contact/ContactSection'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Contact | GoVisa",
  description:
    "Get in touch with the GoVisa team for support, inquiries, or assistance with your visa application.",
};
export default function page() {
  return (
      <div>
          <ContactSection/>
    </div>
  )
}

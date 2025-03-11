import ContactDetails from '@/components/Contact/ContactDetails'
import ContactForm from '@/components/Contact/ContactForm'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-[#F3F3F3] py-20'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 justify-center items-center">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  )
}

export default page
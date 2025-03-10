import BookAppointment from '@/components/OurStory/BookAppointment/BookAppointment';
import OurSheba from '@/components/OurStory/OurSheba/OurSheba';
import OurTarget from '@/components/OurStory/OurTarget/OurTarget';
import StoryBanner from '@/components/OurStory/StoryBanner/StoryBanner';
import React from 'react'

const OurStorys = () => {
  return (
    <div>
      <StoryBanner />
      <OurTarget />
      <OurSheba />
      <BookAppointment />
    </div>
  )
}

export default OurStorys;
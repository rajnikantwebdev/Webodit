import React from 'react'
import Hero from '../sections/Hero'
import FormSection from '../sections/FormSection'
import ProjectSection from '../sections/ProjectSection'
import ClientSection from '../sections/ClientSection'
import TestimonialSection from '../sections/TestimonialSection'
import TrustSection from '../sections/TrustSection'

function HomePage() {
  return (
    <div className='w-full m-auto overflow-hidden'>
        <Hero/>
        <FormSection/>
        <ProjectSection/>
        <ClientSection/>
        <TestimonialSection/>
        <TrustSection/>
    </div>
  )
}

export default HomePage

import React from 'react'
import Hero from '../components/Hero'
import FormSection from '../sections/FormSection'
import ProjectSection from '../sections/ProjectSection'

function HomePage() {
  return (
    <div className='w-full overflow-hidden'>
        <Hero/>
        <FormSection/>
        <ProjectSection/>
    </div>
  )
}

export default HomePage

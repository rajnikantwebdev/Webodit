import React from 'react'
import Hero from '../components/Hero'
import FormSection from '../sections/FormSection'
import ProjectSection from '../sections/ProjectSection'
import ClientSection from '../sections/ClientSection'

function HomePage() {
  return (
    <div className='w-full m-auto overflow-hidden'>
        <Hero/>
        <FormSection/>
        <ProjectSection/>
        <ClientSection/>
    </div>
  )
}

export default HomePage

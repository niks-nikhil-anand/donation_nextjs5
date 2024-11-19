import BlogSection from '@/components/frontend/ui/BlogSection'
import Faqs from '@/components/frontend/ui/Faqs'
import HeroSection from '@/components/frontend/ui/HeroSection'
import Testimonial from '@/components/frontend/ui/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      
      <Testimonial/>
      <BlogSection/>
      <Faqs/>
    </div>
  )
}

export default page
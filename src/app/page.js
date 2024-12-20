import Banner1 from '@/components/frontend/ui/Banner/Banner1'
import Banner2 from '@/components/frontend/ui/Banner/Banner2'
import BlogSection from '@/components/frontend/ui/BlogSection'
import Faqs from '@/components/frontend/ui/Faqs'
import HeroSection from '@/components/frontend/ui/HeroSection'
import Testimonial from '@/components/frontend/ui/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Banner1/>
      <Testimonial/>
      <Banner2/>
      <BlogSection/>
      <Faqs/>
    </div>
  )
}

export default page
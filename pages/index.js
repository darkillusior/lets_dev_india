import Blog from '@/components/Blog'
import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const Home = ({user}) => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Navbar user={user}/>
      <Hero />
      <Features />  
      {/* <Stats /> */}
      <Testimonial />
      <CallToAction />
      {/* <Blog /> */}
      <Footer />
    </div>
  )
}

export default Home
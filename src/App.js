import React from 'react'
import GlobalCounter from './components/GlobalCounter'
import TestimonialSlider from './components/TestimonialSlider'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'
import Faqs from './components/Faqs'

const App = () => {
  return (
    <>
      <Hero/>
      <GlobalCounter />
      <TestimonialSlider />
      <Faqs />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App

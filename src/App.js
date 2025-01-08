import React from 'react'
import GlobalCounter from './components/GlobalCounter'
import TestimonialSlider from './components/TestimonialSlider'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'
import Faq from './components/Faq'
import PreLoader from './common/PreLoader'

const App = () => {
  return (
    <>
      <PreLoader/>
      <Hero/>
      <GlobalCounter />
      <TestimonialSlider />
      <Faq />
      <Footer />
      <BackToTop/>
    </>
  )
}

export default App

import React from 'react'
import GlobalCounter from './components/GlobalCounter'
import TestimonialSlider from './components/TestimonialSlider'
import Hero from './components/Hero'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <div>
      <Hero/>
      <GlobalCounter />
      <TestimonialSlider />
      <FAQs />
      <Footer />
      <BackToTop/>
    </div>
  )
}

export default App

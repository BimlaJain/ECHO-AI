import React from 'react'
import GlobalCounter from './components/GlobalCounter'
import TestimonialSlider from './components/TestimonialSlider'
import Hero from './components/Hero'
import FAQs from './components/FAQs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <GlobalCounter />
      <TestimonialSlider />
      <FAQs />
      <Footer/>
    </div>
  )
}

export default App

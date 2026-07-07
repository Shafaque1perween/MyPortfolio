import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Footer from './Components/Footer'



const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Service/>
      <Projects/>
      <Footer/>
    </div>

  )
}

export default App

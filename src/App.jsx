import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <About setActiveSection={setActiveSection} />
      <Education setActiveSection={setActiveSection} />
      <Skills setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <Certificates setActiveSection={setActiveSection} />
      <Contact setActiveSection={setActiveSection} />
      <Footer />
    </div>
  )
}

export default App


import React from 'react'
import Navbar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

function App() {
  return (
    <main className = "max-w-7xl mx-auto">
      <Navbar/>
      <Hero/>  
      <About/>
      <Projects/>
    </main>
  )
}

export default App
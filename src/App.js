import React from "react"

import Hero from "./components/Hero"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import "./scss/app.scss"

function App() {
  return (
    <>
      <Hero />
      <div className="container">
        
        <Navbar />
      </div>
      <AboutMe />
      <div className="container">
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </>

  )
}

export default App

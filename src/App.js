import React from "react"

import Hero from "./components/Hero"
import Navbars from "./components/navbars/Navbars"
import AboutMe from "./components/AboutMe"
import Skills from "./components/skills/Skills"
import Projects from "./components/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer"

import "./scss/app.scss"

function App() {
  return (
    <>
      <Navbars />
      <Hero />
      <div className="container">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

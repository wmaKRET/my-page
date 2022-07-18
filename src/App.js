import React from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

import "./scss/app.scss"

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

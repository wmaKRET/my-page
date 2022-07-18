import React from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"

import "./scss/app.scss"

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
    </div>
  )
}

export default App

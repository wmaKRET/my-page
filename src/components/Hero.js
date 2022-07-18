import React from "react"

import CV from "../assets/cv.pdf"

function Hero() {
    return (
        <section className="hero">
            <h5>Hello! My name is</h5>
            <h2>Wojciech Kret</h2>
            <h5 className="hero-margin">and currently I am looking for a job as a Frontend Developer</h5>
            <div className="hero__content">
                    <a className="btn-hero" href={CV}>CV</a>
                    <a className="btn-hero" href="#contact">About Me</a>
            </div>
        </section>
    )
}

export default Hero
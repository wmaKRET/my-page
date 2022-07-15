import React from "react"

import MyPhoto from "../assets/me.png"
import CV from "../assets/cv.pdf"

function Header() {
    return (
        <header className="header">
            <h5>Hello! My name is</h5>
            <h2>Wojciech</h2>
            <div className="header__content">
                <img className="header__img" src={MyPhoto} alt="my photo" />
                <div className="header__panel">
                    <a className="btn btn-primary" href={CV}>CV</a>
                    <a className="btn" href="#contact">Contact Me</a>
                </div>
            </div>
        </header>
    )
}

export default Header
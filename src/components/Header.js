import React from "react"

import MyPhoto from "../assets/me.png"
import CV from "../assets/cv.pdf"

import { FaLinkedin, FaGithub } from "react-icons/fa"

function Header() {
    return (
        <header className="header">
            <h5>Hello! My name is</h5>
            <h2>Wojciech</h2>
            <div className="header__content">
                <div className="header__img">
                    <img 
                            className="header__img-photo" 
                            src={MyPhoto} 
                            alt="my photo" 
                    />
                    <div className="header__img-shadowtop"></div>
                    <div className="header__img-shadowbottom"></div>
                </div>
                <div className="header__panel">
                    <a className="btn btn-primary" href={CV}>CV</a>
                    <a className="btn" href="#contact">Contact Me</a>
                </div>
            </div>
            <div className="header__socials">
                <a 
                    className="header__socials-icon" 
                    href="https://www.linkedin.com/in/wojciech-kret/" 
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a 
                    className="header__socials-icon" 
                    href="https://github.com/wmaKRET" 
                    target="_blank"
                >
                    <FaGithub />
                </a>
            </div>
            <p className="header__scroll">scroll down</p>
        </header>
    )
}

export default Header
import React, { useState, useEffect } from "react"

import MyPhoto from "../assets/me.png"
import CV from "../assets/cv.pdf"

import { FaLinkedin, FaGithub } from "react-icons/fa"

function Header() {
    const [pageIsLoaded, setPageIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPageIsLoaded(true)
        }, 1)
    }, [])

    function loadPageClass(){
        return pageIsLoaded
            ? 'load'
            : ''
    }

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
                    className={loadPageClass()}
                    href="https://www.linkedin.com/in/wojciech-kret/" 
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a 
                    className={loadPageClass()}
                    href="https://github.com/wmaKRET" 
                    target="_blank"
                >
                    <FaGithub />
                </a>
            </div>
            <div className="header__scroll">
                <a 
                    className={loadPageClass()}
                    href="#contact"
                >
                    scroll down
                </a>
            </div>
        </header>
    )
}

export default Header
import React, { useState, useEffect } from "react"

import { BsPersonCircle, BsListCheck, BsFolderCheck } from "react-icons/bs"
import { FaHome, FaLinkedin, FaGithub, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Navbar() {
    const [activeNavIcon, setActiveNavIcon] = useState('#')
    const [pageHasLoaded, setPageIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPageIsLoaded(true)
        }, 1)
    }, [])

    function isIconActive(value) {
        return activeNavIcon === value
            ? "navbar__item active"
            : "navbar__item"
    }

    function handleNavIconChange(value) {
        setActiveNavIcon(value)
    }

    function loadSidePanels(panel) {
        return pageHasLoaded
            ? `navbar__${panel} load`
            : `navbar__${panel}`
    }

    return (
        <nav className="navbar">
            <div className="navbar__panel">
                <a
                    href="#"
                    className={isIconActive('#')}
                    onClick={() => handleNavIconChange('#')}
                >
                    <FaHome size={28} />
                </a>
                <a
                    href="#about"
                    className={isIconActive('#about')}
                    onClick={() => handleNavIconChange('#about')}
                >
                    <BsPersonCircle size={28} />
                </a>
                <a
                    href="#skills"
                    className={isIconActive(`#skills`)}
                    onClick={() => handleNavIconChange(`#skills`)}
                >
                    <BsListCheck size={28} />
                </a>
                <a
                    href="#projects"
                    className={isIconActive('#projects')}
                    onClick={() => handleNavIconChange('#projects')}
                >
                    <BsFolderCheck size={28} />
                </a>
                <a
                    href="#contact"
                    className={isIconActive('#contact')}
                    onClick={() => handleNavIconChange('#contact')}
                >
                    <FiMail size={28} />
                </a>
            </div>
            <div className={loadSidePanels('socials')}>
                <a
                    href="https://www.linkedin.com/in/wojciech-kret/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/wmaKRET"
                    target="_blank"
                >
                    <FaGithub />
                </a>
            </div>
            <div className={loadSidePanels('scroll')}>
                <a
                    href="#"
                    onClick={() => handleNavIconChange('#contact')}
                >
                    <FaArrowAltCircleUp />
                </a>
                <a
                    href="#contact"
                    onClick={() => handleNavIconChange('#contact')}
                >
                    <FaArrowAltCircleDown />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
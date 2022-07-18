import React, { useState, useEffect } from "react"

import { BsPersonCircle, BsListCheck, BsFolderCheck } from "react-icons/bs"
import { FaHome, FaLinkedin, FaGithub, FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

function Navbar() {
    const pageSections = [
        { id: 1, url: "#", icon: (<FaHome size={28} />) },
        { id: 2, url: "#about", icon: (<BsPersonCircle size={28} />) },
        { id: 3, url: "#skills", icon: (<BsListCheck size={28} />) },
        { id: 4, url: "#projects", icon: (<BsFolderCheck size={28} />) },
        { id: 5, url: "#contact", icon: (<FiMail size={28} />) },
    ]
    const [activeNavIcon, setActiveNavIcon] = useState(pageSections[0].url)
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

    function animateSidePanels(panel) {
        return pageHasLoaded
            ? `navbar__${panel} load`
            : `navbar__${panel}`
    }

    const iconElements = pageSections.map(section => (
        <a
            key={section.id}
            href={section.url}
            className={isIconActive(section.url)}
            onClick={() => handleNavIconChange(section.url)}
        >
            {section.icon}
        </a>
    ))

    return (
        <nav className="navbar">
            <div className="navbar__panel">
                {iconElements}
            </div>
            <div className={animateSidePanels('socials')}>
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
            <div className={animateSidePanels('scroll')}>
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